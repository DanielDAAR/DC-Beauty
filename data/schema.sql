-- Copia y pega en Supabase SQL Editor
-- Habilita RLS y políticas mínimas para demo (ajusta en producción)

create table if not exists materials (
  id text primary key,
  nombre text not null,
  precio_base integer not null default 0,
  categoria text not null check (categoria in ('tecnica','color','extra','largo')),
  color_hex text
);

create table if not exists catalog_items (
  id text primary key,
  nombre text not null,
  imagen_url text,
  tecnica text,
  color text,
  precio_desde integer not null,
  activo boolean default true,
  ocasion text,
  created_at timestamp with time zone default now()
);

create table if not exists appointments (
  id uuid primary key default gen_random_uuid(),
  nombre_cliente text not null,
  telefono text not null,
  fecha date not null,
  hora text not null,
  servicio text not null,
  precio_total integer not null,
  estado text not null default 'confirmada' check (estado in ('confirmada','cancelada','pendiente')),
  notas text,
  created_at timestamp with time zone default now(),
  unique(fecha, hora) -- evita doble reserva a nivel DB
);

create table if not exists blocked_slots (
  id uuid primary key default gen_random_uuid(),
  fecha date not null,
  hora_inicio text not null,
  hora_fin text not null,
  motivo text
);

-- Políticas (demo: lectura pública, escritura pública — endurece con auth para admin)
alter table materials enable row level security;
alter table catalog_items enable row level security;
alter table appointments enable row level security;
alter table blocked_slots enable row level security;

create policy "public read materials" on materials for select using (true);
create policy "public read catalog" on catalog_items for select using (true);
create policy "public read appointments" on appointments for select using (true);
create policy "public insert appointments" on appointments for insert with check (true);
create policy "public update appointments" on appointments for update using (true);
create policy "public read blocked" on blocked_slots for select using (true);
create policy "public insert blocked" on blocked_slots for insert with check (true);

-- Datos semilla
insert into materials (id, nombre, precio_base, categoria, color_hex) values
 ('t1','Gel semipermanente',350,'tecnica', null),
 ('t2','Acrílico',450,'tecnica', null),
 ('t3','Soft Gel',500,'tecnica', null),
 ('t4','Polygel',480,'tecnica', null),
 ('c1','Rojo Laca',0,'color','#9B2542'),
 ('c2','Nude Rosé',0,'color','#D8B4A0'),
 ('c3','Blanco Leche',0,'color','#F5F5F0'),
 ('c4','Negro Azabache',30,'color','#1A1A1A'),
 ('l1','Cortas',0,'largo', null),
 ('l2','Medianas',50,'largo', null),
 ('l3','Largas',100,'largo', null),
 ('e1','Efecto aurora',80,'extra', null),
 ('e3','Francesa',60,'extra', null)
on conflict (id) do nothing;

insert into catalog_items (id, nombre, imagen_url, tecnica, color, precio_desde, activo, ocasion) values
 ('1','Rouge Classique','https://images.unsplash.com/photo-1604654894610-df63bc536371?w=600&q=80','Gel semipermanente','Rojo Laca',380,true,'fiesta'),
 ('2','Milky French','https://images.unsplash.com/photo-1519014816548-bf5fe059798b?w=600&q=80','Soft Gel','Blanco Leche',450,true,'diario'),
 ('3','Sage Minimal','https://images.unsplash.com/photo-1522337660859-02fbefca4702?w=600&q=80','Acrílico','Verde Sage',480,true,'diario')
on conflict (id) do nothing;
