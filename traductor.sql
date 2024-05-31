PGDMP  /                    |         	   traductor    16.2    16.2     �           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            �           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            �           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            �           1262    24576 	   traductor    DATABASE     �   CREATE DATABASE traductor WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'Spanish_Guatemala.1252';
    DROP DATABASE traductor;
                postgres    false            �            1259    32792    frases    TABLE     �   CREATE TABLE public.frases (
    id bigint NOT NULL,
    frase character varying NOT NULL,
    traduccion character varying NOT NULL
);
    DROP TABLE public.frases;
       public         heap    postgres    false            �            1259    32800    frases_id_seq    SEQUENCE     �   CREATE SEQUENCE public.frases_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 $   DROP SEQUENCE public.frases_id_seq;
       public          postgres    false    217            �           0    0    frases_id_seq    SEQUENCE OWNED BY     ?   ALTER SEQUENCE public.frases_id_seq OWNED BY public.frases.id;
          public          postgres    false    218            �            1259    24577    traducciones    TABLE     �   CREATE TABLE public.traducciones (
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
          public          postgres    false    216            V           2604    32801 	   frases id    DEFAULT     f   ALTER TABLE ONLY public.frases ALTER COLUMN id SET DEFAULT nextval('public.frases_id_seq'::regclass);
 8   ALTER TABLE public.frases ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    218    217            U           2604    32802    traducciones id    DEFAULT     r   ALTER TABLE ONLY public.traducciones ALTER COLUMN id SET DEFAULT nextval('public.traducciones_id_seq'::regclass);
 >   ALTER TABLE public.traducciones ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    216    215            �          0    32792    frases 
   TABLE DATA           7   COPY public.frases (id, frase, traduccion) FROM stdin;
    public          postgres    false    217   ^       �          0    24577    traducciones 
   TABLE DATA           ^   COPY public.traducciones (palabra, traduccion, idioma_origen, idioma_destino, id) FROM stdin;
    public          postgres    false    215   o       �           0    0    frases_id_seq    SEQUENCE SET     =   SELECT pg_catalog.setval('public.frases_id_seq', 290, true);
          public          postgres    false    218            �           0    0    traducciones_id_seq    SEQUENCE SET     C   SELECT pg_catalog.setval('public.traducciones_id_seq', 269, true);
          public          postgres    false    216            Z           2606    32798    frases frases_pkey 
   CONSTRAINT     P   ALTER TABLE ONLY public.frases
    ADD CONSTRAINT frases_pkey PRIMARY KEY (id);
 <   ALTER TABLE ONLY public.frases DROP CONSTRAINT frases_pkey;
       public            postgres    false    217            X           2606    24585    traducciones traducciones_pkey 
   CONSTRAINT     \   ALTER TABLE ONLY public.traducciones
    ADD CONSTRAINT traducciones_pkey PRIMARY KEY (id);
 H   ALTER TABLE ONLY public.traducciones DROP CONSTRAINT traducciones_pkey;
       public            postgres    false    215            �     x�-�MN�@���Sx7����**�%+$D%6N2j�$���p���@"����{���������s���4�bnv5	��$�.�sL�v��@%S4��,X���6�GK��\����,��oR;�� \�7�|D��w.�����f������1�ܼ�1�[�a<)+TQ0��7��w wJ?-��e���ܯ-�g�z�$���D�R�V�)�z�.a���Z6��%,�pҗ��IZ\fY�8-�+,Q ���xH      �     x�UUK��6\�.e}-�%H�ش)R���o�e��l�����RNո�i� >���N^���"��JV%VZ�ϟ�x��V�OG-�d�S>���wt�WV��B�ir~�6ⳑ�H=]��6��9a� �N�-���n7������?�"���+NWk�`ح30�"6��g�[Zde�˜�b��2[m8=��ſSMzn����'�⻌4�Xd��.AV��%eI��^�J`EW>dog�eM��К����xeC�~�g8�g�[��Ţ��E����6-�ӥp�$9��B}{���m_�	h�脋~W�C����D�Wz�*��&��n��}���%�IUM��`��oh�E�S�v3����W:�9����~$�Hs��C�.��x� =>5�h��SDS����$�Ѕ�&�$�xJ��ݺB�F1�)���5}B4J�Ts�hY+�~ۗ�犖e�v�j�<vV�N�G�r6���������?�����g@����SW}�}k��5^T7�9�����O��[7~̩uMLse`c�o@� &�	A��hh�R�Mb��.��#�˟]v���bܪLH�kz0f�3���eqw�uߖ4�s3O�V�	b�E1�:�}2:���N���0joL����X.0�ڎN�1Xa�H�r�^{�Zwʢ+�i{Z��D8q��r�w�uZ�(��BW����swəu-A������TW�j��vkt��{�L������;��S�;�	�1�^�\`�	�u��Z8~�g}����-���a*����z<��� ������O:+_��QH�"��Xѧ���K(��⊣�sjlG��Ժ��ã�\����Q�ũM�m����ؼe��q��)���������z�
�����
�kS���3�"�(���ܞy*�\�~����>��9��Sc��PƊ��}��k��
!�ghb 2"�`rV]܉&��+kc��~QB}i�=�#����N64Ǵ̩ �@ؑ1�G��܁x��1���`��ת���c�k�f��@nICM��FD� ��     