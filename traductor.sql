PGDMP              	        |         	   traductor    16.2    16.2     �           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            �           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            �           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            �           1262    16398 	   traductor    DATABASE     �   CREATE DATABASE traductor WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'Spanish_Guatemala.1252';
    DROP DATABASE traductor;
                postgres    false            �            1259    16399    traducciones    TABLE     �   CREATE TABLE public.traducciones (
    palabra character varying(255),
    traduccion character varying(255),
    idioma_origen character varying(10),
    idioma_destino character varying(10),
    id bigint NOT NULL
);
     DROP TABLE public.traducciones;
       public         heap    postgres    false            �            1259    16416    traducciones_id_seq    SEQUENCE     |   CREATE SEQUENCE public.traducciones_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 *   DROP SEQUENCE public.traducciones_id_seq;
       public          postgres    false    215            �           0    0    traducciones_id_seq    SEQUENCE OWNED BY     K   ALTER SEQUENCE public.traducciones_id_seq OWNED BY public.traducciones.id;
          public          postgres    false    216            P           2604    16417    traducciones id    DEFAULT     r   ALTER TABLE ONLY public.traducciones ALTER COLUMN id SET DEFAULT nextval('public.traducciones_id_seq'::regclass);
 >   ALTER TABLE public.traducciones ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    216    215            �          0    16399    traducciones 
   TABLE DATA           ^   COPY public.traducciones (palabra, traduccion, idioma_origen, idioma_destino, id) FROM stdin;
    public          postgres    false    215   D       �           0    0    traducciones_id_seq    SEQUENCE SET     B   SELECT pg_catalog.setval('public.traducciones_id_seq', 15, true);
          public          postgres    false    216            R           2606    16424    traducciones traducciones_pkey 
   CONSTRAINT     \   ALTER TABLE ONLY public.traducciones
    ADD CONSTRAINT traducciones_pkey PRIMARY KEY (id);
 H   ALTER TABLE ONLY public.traducciones DROP CONSTRAINT traducciones_pkey;
       public            postgres    false    215            �   �   x�=�M�0F��E�9V`Ի�	!J��h��;q
.&���{I�$Vd+�8��d���$a�	_�!7j?�+k/�;?��k+Գ�`i[��j�2�Dȴ��HMY�n�:� K���:xK�9��NC�v[�����R����o��'����p&n�w͓��e�q�{�I����qB�/f�]F     