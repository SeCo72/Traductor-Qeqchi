PGDMP  #    9                |         	   traductor    16.2    16.2     �           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            �           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            �           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            �           1262    24576 	   traductor    DATABASE     �   CREATE DATABASE traductor WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'Spanish_Guatemala.1252';
    DROP DATABASE traductor;
                postgres    false            �            1259    24577    traducciones    TABLE     �   CREATE TABLE public.traducciones (
    palabra character varying(255),
    traduccion character varying(255),
    idioma_origen character varying(10),
    idioma_destino character varying(10),
    id bigint NOT NULL
);
     DROP TABLE public.traducciones;
       public         heap    postgres    false            �            1259    24582    traducciones_id_seq    SEQUENCE     |   CREATE SEQUENCE public.traducciones_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 *   DROP SEQUENCE public.traducciones_id_seq;
       public          postgres    false    215            �           0    0    traducciones_id_seq    SEQUENCE OWNED BY     K   ALTER SEQUENCE public.traducciones_id_seq OWNED BY public.traducciones.id;
          public          postgres    false    216            �            1259    32792    frases    TABLE     �   CREATE TABLE public.frases (
    id bigint DEFAULT nextval('public.traducciones_id_seq'::regclass) NOT NULL,
    frase character varying NOT NULL,
    traduccion character varying NOT NULL
);
    DROP TABLE public.frases;
       public         heap    postgres    false    216            T           2604    24583    traducciones id    DEFAULT     r   ALTER TABLE ONLY public.traducciones ALTER COLUMN id SET DEFAULT nextval('public.traducciones_id_seq'::regclass);
 >   ALTER TABLE public.traducciones ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    216    215            �          0    32792    frases 
   TABLE DATA           7   COPY public.frases (id, frase, traduccion) FROM stdin;
    public          postgres    false    217   �       �          0    24577    traducciones 
   TABLE DATA           ^   COPY public.traducciones (palabra, traduccion, idioma_origen, idioma_destino, id) FROM stdin;
    public          postgres    false    215   *       �           0    0    traducciones_id_seq    SEQUENCE SET     B   SELECT pg_catalog.setval('public.traducciones_id_seq', 20, true);
          public          postgres    false    216            Y           2606    32798    frases frases_pkey 
   CONSTRAINT     P   ALTER TABLE ONLY public.frases
    ADD CONSTRAINT frases_pkey PRIMARY KEY (id);
 <   ALTER TABLE ONLY public.frases DROP CONSTRAINT frases_pkey;
       public            postgres    false    217            W           2606    24585    traducciones traducciones_pkey 
   CONSTRAINT     \   ALTER TABLE ONLY public.traducciones
    ADD CONSTRAINT traducciones_pkey PRIMARY KEY (id);
 H   ALTER TABLE ONLY public.traducciones DROP CONSTRAINT traducciones_pkey;
       public            postgres    false    215            �   �   x��K
�0�יS���>����͘b2�D[��<�`/f��c�~�n�D�+uy���FN�L�WCku,U^�z�p�l=ub�;j���As�^fC�s����:7�a��4ڶ������m�̌����b����0      �   �   x�M�=r� �k�"�2F��]�<$2�����F)Ӧ���P ���o�Y�H�j�B;!����
i��=���+����"w�t��\96R�@��o�L�xD�|9A�dt�;qY�s��\C󳩷�T�fn�V�pׁz6W����dc-��^�j��T��o�_��9:�'%V��;�)�0(�ӛ�f:�fS�0��C�O��Y;��|ҿ���7��~�ꊽ����/\�3     