# Capítulo 11. Subnetting IPv4: máscaras fijas y variables

## Objetivos del capítulo

Al finalizar este capítulo serás capaz de:

- Comprender por qué puede ser necesario dividir una red IPv4 en varias subredes.
- Interpretar máscaras de subred utilizando notación decimal y CIDR.
- Calcular el número de subredes disponibles.
- Calcular el número de hosts que puede albergar cada subred.
- Determinar la dirección de red, el primer host, el último host y la dirección de difusión de una subred.
- Utilizar el método del salto para localizar rápidamente las subredes.
- Diseñar subredes utilizando una máscara fija (**FLSM**).
- Diseñar subredes de diferente tamaño utilizando máscaras variables (**VLSM**).
- Comparar la eficiencia de FLSM y VLSM.
- Elaborar un plan de direccionamiento IPv4 para una pequeña organización.

---

## Introducción

En el capítulo anterior hemos aprendido a interpretar y configurar direcciones IPv4.

Sabemos identificar:

- la dirección de red;
- las direcciones disponibles para los hosts;
- la dirección de difusión (*broadcast*);
- la máscara de subred.

Hasta ahora hemos trabajado principalmente con redes sencillas como:

```text
192.168.1.0
Máscara: 255.255.255.0
```

Esta red permite disponer de hasta 254 direcciones utilizables para dispositivos.

Pero imaginemos ahora que esa red pertenece a una empresa con varios departamentos:

- Administración.
- Dirección.
- Informática.
- Ventas.

¿Deberían estar los 254 posibles dispositivos dentro de una única red?

En muchas situaciones la respuesta es **no**.

Puede resultar conveniente dividir una red grande en varias redes más pequeñas e independientes.

Este proceso recibe el nombre de **subnetting** o **subneteo**.

---

## 11.1 ¿Por qué dividir una red en subredes?

Supongamos que una empresa dispone de la siguiente red:

```text
192.168.10.0
Máscara: 255.255.255.0
```

Todos los ordenadores, servidores, impresoras y demás dispositivos podrían utilizar direcciones comprendidas entre:

```text
192.168.10.1
```

y:

```text
192.168.10.254
```

Técnicamente sería posible colocar todos los equipos dentro de esa misma red.

Sin embargo, a medida que aumenta el número de dispositivos pueden aparecer diferentes problemas.

---

### Una red demasiado grande

Imaginemos que la empresa dispone de:

- 40 equipos en Administración.
- 30 equipos en Ventas.
- 20 equipos en Informática.
- 10 equipos en Dirección.

Si todos pertenecen a la misma red, los cien dispositivos compartirán el mismo espacio de comunicación.

Esto puede dificultar:

- la organización;
- el diagnóstico de problemas;
- la aplicación de políticas de seguridad;
- la separación entre departamentos;
- la planificación de futuras ampliaciones.

Una posible solución consiste en dividir la red original en varias redes más pequeñas.

---

### Crear redes independientes

Podríamos organizar la empresa de forma conceptual así:

```text
Red original
192.168.10.0
        │
        ├── Administración
        │
        ├── Ventas
        │
        ├── Informática
        │
        └── Dirección
```

Cada departamento dispondría de su propia **subred**.

Los equipos seguirían utilizando direcciones pertenecientes al espacio original `192.168.10.x`, pero organizadas en grupos independientes.

---

### ¿Qué es una subred?

Una **subred** es una división lógica de una red IP original.

El proceso consiste en utilizar una parte de los bits que inicialmente estaban disponibles para identificar hosts y destinarlos a identificar diferentes subredes.

No necesitamos comprender todavía cómo se realiza esta operación.

Por el momento basta con recordar la idea fundamental:

> **Subnetear significa dividir una red en varias redes más pequeñas.**

---

### Ventajas del subnetting

Dividir una red puede aportar varias ventajas:

- Facilita la organización de los dispositivos.
- Permite separar departamentos o servicios.
- Reduce el tamaño de los dominios de difusión.
- Facilita la aplicación de políticas de seguridad.
- Simplifica el diagnóstico de incidencias.
- Permite utilizar de forma más ordenada el espacio de direccionamiento disponible.

En redes empresariales es habitual utilizar diferentes subredes para separar grupos de equipos con funciones distintas.

<figure class="figura-libro">
  <img
    src="../../assets/images/parte3/capitulo11/figura11_1_2.png"
    alt="Comparación entre una única red y varias subredes e idea conceptual del subnetting IPv4"
  >
  <figcaption>
    <strong>Figuras 11.1 y 11.2.</strong> Comparación entre una única red en la que todos los dispositivos comparten el mismo espacio de direccionamiento y una red dividida en varias subredes. El subnetting permite tomar una red IPv4 original y organizarla en redes más pequeñas, facilitando su administración, segmentación y planificación.
  </figcaption>
</figure>

---

### Un problema que tendremos que resolver

Sabemos que la red original es:

```text
192.168.10.0
255.255.255.0
```

pero queremos obtener varias redes más pequeñas.

Por tanto, tendremos que responder preguntas como:

- ¿Cuántas subredes necesitamos?
- ¿Cuántos hosts debe admitir cada una?
- ¿Qué máscara debemos utilizar?
- ¿Dónde empieza cada subred?
- ¿Cuál es su dirección de broadcast?

Estas preguntas serán el eje de todo el capítulo.

---

!!! note "Recuerda"

    El subnetting permite dividir una red IPv4 en varias subredes más pequeñas, facilitando la organización, administración y segmentación de los dispositivos.

!!! tip "¿Sabías que...?"

    En una empresa real es habitual utilizar subredes distintas para separar departamentos, servidores, cámaras IP, teléfonos VoIP o redes inalámbricas.

!!! abstract "🛠️ En este capítulo..."

    Partiremos siempre de redes `/24`, equivalentes al tamaño utilizado tradicionalmente por las redes de Clase C, y aprenderemos primero a dividirlas en subredes iguales mediante FLSM y después en subredes de distinto tamaño mediante VLSM.

!!! question "Piensa un momento..."

    Una empresa tiene una red con 200 dispositivos distribuidos entre cuatro departamentos. ¿Qué ventajas podría ofrecer dividirlos en cuatro subredes en lugar de mantener todos los equipos dentro de una única red?

## 11.2 El sistema binario aplicado al subnetting

En el capítulo anterior vimos que una dirección IPv4 está formada por **32 bits**, agrupados en cuatro octetos de 8 bits.

Por ejemplo:

```text
192.168.10.25
```

puede representarse internamente como:

```text
11000000.10101000.00001010.00011001
```

Para aprender subnetting no necesitaremos realizar continuamente conversiones completas de 32 bits.

Como en este capítulo partiremos siempre de redes `/24`, centraremos nuestros cálculos principalmente en el **último octeto**.

---

### Los ocho bits de un octeto

Cada octeto de una dirección IPv4 contiene ocho bits.

Cada posición tiene un valor determinado:

| Bit | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 |
|---|---:|---:|---:|---:|---:|---:|---:|
| Valor | **128** | **64** | **32** | **16** | **8** | **4** | **2** | **1** |

Estos valores siempre aparecen en el mismo orden:

```text
128   64   32   16   8   4   2   1
```

Para obtener el valor decimal de un número binario solo tenemos que sumar los valores correspondientes a las posiciones que contienen un `1`.

---

### Un ejemplo sencillo

Observa el siguiente octeto:

```text
11000000
```

Colocamos debajo los valores de cada posición:

```text
Bits:       1    1    0    0    0    0    0    0
Valor:    128   64   32   16    8    4    2    1
```

Solo sumamos las posiciones que contienen un `1`:

```text
128 + 64 = 192
```

Por tanto:

```text
11000000 = 192
```

---

### Otro ejemplo

Supongamos ahora:

```text
11100000
```

Tenemos:

```text
Bits:       1    1    1    0    0    0    0    0
Valor:    128   64   32   16    8    4    2    1
```

Sumamos:

```text
128 + 64 + 32 = 224
```

Por tanto:

```text
11100000 = 224
```

Este procedimiento será muy importante cuando comencemos a trabajar con diferentes máscaras de subred.

---

### ¿Qué relación tiene esto con la máscara?

Recordemos la máscara que hemos utilizado hasta ahora:

```text
255.255.255.0
```

En binario se representa como:

```text
11111111.11111111.11111111.00000000
```

Los bits con valor `1` identifican la **parte de red**, mientras que los bits con valor `0` quedan disponibles para identificar los **hosts**.

Podemos representarlo de forma simplificada:

```text
11111111.11111111.11111111.00000000
────────── RED ──────────── ── HOST ─
```

En una red `/24`, los primeros 24 bits identifican la red y los últimos 8 bits están disponibles para los hosts.

---

### Tomar bits de la parte de host

Aquí aparece la idea fundamental del subnetting.

Si queremos dividir una red `/24` en varias subredes, utilizaremos algunos de los bits que originalmente pertenecían a la parte de host.

Por ejemplo:

```text
Máscara original:

11111111.11111111.11111111.00000000
                            ↑
                         8 bits
                         de host
```

Si utilizamos un bit para crear subredes:

```text
11111111.11111111.11111111.10000000
                            ↑
                     bit utilizado
                     para subnetting
```

El último octeto pasa de:

```text
00000000
```

a:

```text
10000000
```

y su valor decimal es:

```text
128
```

Por tanto, la nueva máscara será:

```text
255.255.255.128
```

No necesitamos calcular todavía las subredes resultantes.

Lo importante es comprender qué acaba de ocurrir:

> **Hemos tomado un bit que antes identificaba hosts y lo hemos utilizado para identificar subredes.**

---

### ¿Y si tomamos dos bits?

Partimos nuevamente del último octeto:

```text
00000000
```

Tomamos ahora dos bits:

```text
11000000
```

Como ya sabemos:

```text
128 + 64 = 192
```

Por tanto, obtenemos:

```text
255.255.255.192
```

Si tomamos tres:

```text
11100000
```

obtenemos:

```text
128 + 64 + 32 = 224
```

y la máscara será:

```text
255.255.255.224
```

Empieza a aparecer un patrón.

<figure class="figura-libro">
  <img
    src="../../assets/images/parte3/capitulo11/figura11_3_4.png"
    alt="Valores de los bits de un octeto y utilización de bits de host para crear subredes IPv4"
  >
  <figcaption>
    <strong>Figuras 11.3 y 11.4.</strong> Valores decimales correspondientes a las ocho posiciones de un octeto y utilización progresiva de bits de la parte de host para crear subredes. Al aumentar los bits destinados a identificar subredes, aumenta el número de subredes disponibles y disminuye el número de hosts que puede contener cada una.
  </figcaption>
</figure>

---

### Las máscaras que utilizaremos

Cuando dividamos una red `/24`, encontraremos principalmente las siguientes máscaras:

| Bits utilizados para subred | Último octeto binario | Último octeto decimal | Máscara |
|---:|:---:|---:|---|
| 0 | `00000000` | 0 | `255.255.255.0` |
| 1 | `10000000` | 128 | `255.255.255.128` |
| 2 | `11000000` | 192 | `255.255.255.192` |
| 3 | `11100000` | 224 | `255.255.255.224` |
| 4 | `11110000` | 240 | `255.255.255.240` |
| 5 | `11111000` | 248 | `255.255.255.248` |
| 6 | `11111100` | 252 | `255.255.255.252` |

No es necesario memorizar ahora esta tabla.

A medida que resolvamos ejercicios, estos valores acabarán resultando familiares.

---

### Una regla muy importante

En una máscara de subred, los bits `1` siempre aparecen consecutivamente desde la izquierda.

Una máscara válida puede contener:

```text
11110000
```

pero nunca:

```text
11010100
```

Por tanto:

```text
255.255.255.240
```

puede ser una máscara válida, mientras que una máscara cuyo último octeto tuviera el patrón `11010100` no lo sería.

Esta regla nos ayudará también a detectar configuraciones incorrectas.

---

### ¿Qué hemos conseguido?

Ahora ya podemos comprender qué sucede cuando modificamos una máscara.

Partimos de:

```text
255.255.255.0
```

y podemos ir tomando bits de la parte de host:

```text
255.255.255.0
        ↓
255.255.255.128
        ↓
255.255.255.192
        ↓
255.255.255.224
        ↓
255.255.255.240
        ↓
255.255.255.248
        ↓
255.255.255.252
```

Cuantos más bits utilizamos para crear subredes:

- podemos crear **más subredes**;
- quedan **menos bits para los hosts**;
- cada subred puede contener **menos dispositivos**.

Esta relación será fundamental durante todo el capítulo.

---

!!! note "Recuerda"

    Para realizar subnetting utilizamos algunos de los bits que originalmente estaban destinados a identificar hosts y los empleamos para identificar subredes.

!!! tip "Truco"

    Memoriza únicamente esta secuencia:

    `128 - 64 - 32 - 16 - 8 - 4 - 2 - 1`

    Son los valores de los ocho bits de un octeto y nos permitirán obtener fácilmente las máscaras utilizadas durante el subnetting.

!!! warning "Importante"

    Los bits `1` de una máscara siempre deben aparecer consecutivamente desde la izquierda. No pueden existir ceros intercalados entre ellos.

!!! abstract "🛠️ En el siguiente apartado..."

    Aprenderemos una forma mucho más sencilla de representar las máscaras de subred: la **notación CIDR**. Así veremos que `255.255.255.0` puede escribirse como `/24`, `255.255.255.128` como `/25` y `255.255.255.192` como `/26`.

!!! question "Comprueba que lo has entendido"

    ¿Cuál sería el valor decimal del siguiente octeto?

    ```text
    11110000
    ```

    Pista: suma únicamente los valores correspondientes a los bits que contienen un `1`.

## 11.3 Notación CIDR

Hasta ahora hemos representado las máscaras de subred utilizando su forma decimal:

```text
255.255.255.0
255.255.255.128
255.255.255.192
255.255.255.224
```

Sin embargo, existe una forma mucho más sencilla y compacta de escribirlas.

Se denomina **notación CIDR** (*Classless Inter-Domain Routing*).

En lugar de escribir toda la máscara, indicamos simplemente **cuántos bits consecutivos con valor `1` contiene**.

---

### De 255.255.255.0 a /24

Observemos la máscara:

```text
255.255.255.0
```

En binario:

```text
11111111.11111111.11111111.00000000
```

Contemos los bits con valor `1`:

```text
8 + 8 + 8 = 24
```

Por tanto:

```text
255.255.255.0 = /24
```

Una red como:

```text
192.168.10.0
Máscara: 255.255.255.0
```

puede escribirse de forma más compacta:

```text
192.168.10.0/24
```

Ambas formas representan exactamente la misma red.

---

### De /24 a /25

En el apartado anterior vimos que para crear subredes podemos tomar bits que inicialmente pertenecían a la parte de host.

Partimos de:

```text
11111111.11111111.11111111.00000000
```

Si tomamos un bit:

```text
11111111.11111111.11111111.10000000
```

Ahora tenemos:

```text
24 + 1 = 25 bits
```

Por tanto:

```text
255.255.255.128 = /25
```

---

### De /25 a /26

Si utilizamos otro bit:

```text
11111111.11111111.11111111.11000000
```

tenemos:

```text
24 + 2 = 26 bits
```

El último octeto:

```text
11000000
```

equivale a:

```text
128 + 64 = 192
```

Por tanto:

```text
255.255.255.192 = /26
```

---

### De /26 a /27

Tomamos un tercer bit:

```text
11111111.11111111.11111111.11100000
```

Ahora existen 27 bits con valor `1`.

El último octeto vale:

```text
128 + 64 + 32 = 224
```

Por tanto:

```text
255.255.255.224 = /27
```

El patrón continúa de la misma forma.

---

### Tabla de máscaras que utilizaremos

Como en este capítulo partiremos de redes `/24`, estas serán las máscaras que utilizaremos con mayor frecuencia:

| CIDR | Máscara decimal | Último octeto binario | Bits disponibles para host |
|:----:|-----------------|:----------------------:|:--------------------------:|
| `/24` | `255.255.255.0` | `00000000` | 8 |
| `/25` | `255.255.255.128` | `10000000` | 7 |
| `/26` | `255.255.255.192` | `11000000` | 6 |
| `/27` | `255.255.255.224` | `11100000` | 5 |
| `/28` | `255.255.255.240` | `11110000` | 4 |
| `/29` | `255.255.255.248` | `11111000` | 3 |
| `/30` | `255.255.255.252` | `11111100` | 2 |

Esta tabla será una referencia muy útil durante todo el capítulo.

<figure class="figura-libro">
  <img
    src="../../assets/images/parte3/capitulo11/figura11_5_6.png"
    alt="Conversión de máscaras de subred a notación CIDR y relación entre el prefijo CIDR y los bits disponibles para hosts"
  >
  <figcaption>
    <strong>Figuras 11.5 y 11.6.</strong> Conversión de una máscara de subred desde su representación decimal y binaria hasta la notación CIDR. Al aumentar el prefijo se utilizan más bits para identificar la red y las subredes, mientras disminuye el número de bits disponibles para identificar hosts.
  </figcaption>
</figure>

---

### ¿Qué nos indica realmente el número?

El número que aparece después de `/` indica la cantidad de bits utilizados para identificar la **red y la subred**.

Por ejemplo:

```text
192.168.10.0/26
```

significa que los primeros **26 bits** están destinados a identificar la red y la subred.

Como una dirección IPv4 tiene 32 bits:

```text
32 - 26 = 6
```

quedan **6 bits disponibles para los hosts**.

Podemos representarlo así:

```text
/26

11111111.11111111.11111111.11000000
└────────── 26 bits ─────────┘└─6─┘
        RED + SUBRED             HOST
```

Esta operación será muy importante dentro de unos momentos.

---

### Una relación fundamental

Observa lo que ocurre al aumentar el prefijo:

```text
/24 → 8 bits de host
/25 → 7 bits de host
/26 → 6 bits de host
/27 → 5 bits de host
/28 → 4 bits de host
/29 → 3 bits de host
/30 → 2 bits de host
```

Cada vez que aumentamos el prefijo en una unidad:

- utilizamos un bit más para crear subredes;
- queda un bit menos para los hosts;
- podemos crear más subredes;
- cada subred puede contener menos dispositivos.

Por ejemplo:

```text
/24
 ↓
/25
 ↓
/26
 ↓
/27
```

significa que estamos dividiendo progresivamente la red en bloques cada vez más pequeños.

---

### Convertir rápidamente entre CIDR y máscara decimal

Con la práctica conviene reconocer directamente las equivalencias principales:

```text
/24 = 255.255.255.0
/25 = 255.255.255.128
/26 = 255.255.255.192
/27 = 255.255.255.224
/28 = 255.255.255.240
/29 = 255.255.255.248
/30 = 255.255.255.252
```

No obstante, si olvidamos alguna podemos reconstruirla utilizando los valores:

```text
128  64  32  16  8  4  2  1
```

Por ejemplo, para `/28` necesitamos cuatro bits adicionales respecto a `/24`:

```text
11110000
```

Sumamos:

```text
128 + 64 + 32 + 16 = 240
```

Por tanto:

```text
/28 = 255.255.255.240
```

---

### Comprueba que lo has entendido

Completa mentalmente:

```text
/25 = 255.255.255.___

/26 = 255.255.255.___

/27 = 255.255.255.___
```

Las respuestas son:

```text
/25 = 255.255.255.128
/26 = 255.255.255.192
/27 = 255.255.255.224
```

---

!!! note "Recuerda"

    La notación CIDR indica el número de bits consecutivos con valor `1` que contiene la máscara.

    Por ejemplo:

    `255.255.255.192 = /26`

!!! tip "Truco"

    Si trabajamos a partir de una red `/24`, podemos conocer rápidamente los bits disponibles para hosts restando el prefijo a 32.

    Por ejemplo:

    `32 - 27 = 5`

    Por tanto, una red `/27` dispone de **5 bits para hosts**.

!!! warning "No confundas"

    `/26` no significa que existan 26 hosts ni 26 subredes.

    Significa que **26 de los 32 bits de la dirección IPv4 pertenecen al prefijo de red**.

!!! question "Piensa un momento..."

    Una red utiliza la máscara `255.255.255.240`.

    ¿Cuál es su prefijo CIDR?

    ¿Cuántos bits quedan disponibles para identificar hosts?

!!! abstract "🛠️ En el siguiente apartado..."

    Ya sabemos interpretar `/24`, `/25`, `/26`, `/27`... El siguiente paso será descubrir **cuántas subredes y cuántos hosts podemos obtener con cada una de estas máscaras**.

## 11.4 Cálculo del número de subredes y de hosts

En los apartados anteriores hemos visto que, al realizar subnetting, utilizamos algunos de los bits que originalmente estaban destinados a identificar hosts.

Esto provoca dos efectos:

- aumenta el número de subredes que podemos crear;
- disminuye el número de hosts que puede contener cada subred.

Ahora aprenderemos a calcular ambos valores.

---

### ¿Cuántas subredes podemos crear?

Partiremos siempre de nuestra red original `/24`.

En ella disponemos de 8 bits para hosts:

```text
/24

11111111.11111111.11111111.00000000
                            └──────┘
                           8 bits host
```

Si utilizamos algunos de estos bits para crear subredes, podemos calcular el número de subredes mediante:

```text
Número de subredes = 2^n
```

donde:

```text
n = número de bits tomados para crear subredes
```

---

### Ejemplo 1. Tomamos un bit

Partimos de:

```text
/24
```

y tomamos un bit de la parte de host:

```text
/25
```

Por tanto:

```text
n = 1
```

Aplicamos:

```text
2^1 = 2
```

Podemos crear:

```text
2 subredes
```

---

### Ejemplo 2. Tomamos dos bits

Ahora pasamos de:

```text
/24
```

a:

```text
/26
```

Hemos utilizado:

```text
26 - 24 = 2 bits
```

Por tanto:

```text
2^2 = 4
```

Podemos crear:

```text
4 subredes
```

---

### Ejemplo 3. Tomamos tres bits

Si utilizamos `/27`:

```text
27 - 24 = 3 bits
```

Aplicamos:

```text
2^3 = 8
```

Podemos crear:

```text
8 subredes
```

Ya podemos observar un patrón:

| Prefijo | Bits tomados desde `/24` | Número de subredes |
|:-------:|:-------------------------:|:------------------:|
| `/24` | 0 | 1 |
| `/25` | 1 | 2 |
| `/26` | 2 | 4 |
| `/27` | 3 | 8 |
| `/28` | 4 | 16 |
| `/29` | 5 | 32 |
| `/30` | 6 | 64 |

Cada bit adicional permite **duplicar el número de subredes**.

---

### ¿Cuántos hosts caben en cada subred?

Ahora necesitamos responder a la segunda pregunta.

¿Cuántos dispositivos podemos colocar dentro de cada una de esas subredes?

Utilizaremos:

```text
Hosts utilizables = 2^h - 2
```

donde:

```text
h = número de bits disponibles para hosts
```

Pero ¿por qué restamos 2?

Porque en cada subred existen dos direcciones que no podemos asignar a los dispositivos:

1. La **dirección de red**.
2. La **dirección de difusión o broadcast**.

Por tanto:

```text
Direcciones totales = 2^h

Hosts utilizables = 2^h - 2
```

---

### Ejemplo con una red /24

Una red `/24` dispone de:

```text
32 - 24 = 8 bits de host
```

Por tanto:

```text
2^8 = 256 direcciones
```

Pero debemos reservar:

```text
1 dirección de red
1 dirección de broadcast
```

Así que:

```text
256 - 2 = 254
```

Una red `/24` permite utilizar:

```text
254 hosts
```

---

### Ejemplo con una subred /25

Una `/25` dispone de:

```text
32 - 25 = 7 bits de host
```

Calculamos:

```text
2^7 = 128
```

Restamos las dos direcciones reservadas:

```text
128 - 2 = 126
```

Por tanto:

```text
/25 → 126 hosts utilizables
```

---

### Ejemplo con una subred /26

Una `/26` dispone de:

```text
32 - 26 = 6 bits de host
```

Entonces:

```text
2^6 = 64
```

y:

```text
64 - 2 = 62
```

Por tanto:

```text
/26 → 62 hosts utilizables
```

---

### Ejemplo con una subred /27

Tenemos:

```text
32 - 27 = 5 bits de host
```

Calculamos:

```text
2^5 = 32
```

y restamos las direcciones de red y broadcast:

```text
32 - 2 = 30
```

Por tanto:

```text
/27 → 30 hosts utilizables
```

---

### La tabla fundamental del capítulo

Reunamos ahora toda la información.

| Prefijo | Máscara | Subredes obtenidas desde `/24` | Direcciones por subred | Hosts utilizables |
|:-------:|---------|:-------------------------------:|:-----------------------:|:-----------------:|
| `/24` | `255.255.255.0` | 1 | 256 | 254 |
| `/25` | `255.255.255.128` | 2 | 128 | 126 |
| `/26` | `255.255.255.192` | 4 | 64 | 62 |
| `/27` | `255.255.255.224` | 8 | 32 | 30 |
| `/28` | `255.255.255.240` | 16 | 16 | 14 |
| `/29` | `255.255.255.248` | 32 | 8 | 6 |
| `/30` | `255.255.255.252` | 64 | 4 | 2 |

Esta tabla será una de nuestras principales herramientas durante el resto del capítulo.

<figure class="figura-libro">
  <img
    src="../../assets/images/parte3/capitulo11/figura11_7_8.png"
    alt="Cálculo del número de subredes y hosts y relación entre el prefijo CIDR y la capacidad de cada subred"
  >
  <figcaption>
    <strong>Figuras 11.7 y 11.8.</strong> Procedimiento para calcular el número de subredes y de hosts utilizables al dividir una red /24. Cada bit tomado de la parte de host duplica el número de subredes disponibles, pero reduce el número de hosts que puede contener cada una.
  </figcaption>
</figure>

---

### Observa la relación

Si partimos de una `/24`:

```text
/24 → 1 subred  → 254 hosts
/25 → 2 subredes → 126 hosts
/26 → 4 subredes → 62 hosts
/27 → 8 subredes → 30 hosts
/28 → 16 subredes → 14 hosts
/29 → 32 subredes → 6 hosts
/30 → 64 subredes → 2 hosts
```

Cada vez que tomamos un bit adicional:

```text
SUBREDES
1 → 2 → 4 → 8 → 16 → 32 → 64
```

mientras que el número de direcciones de cada subred se reduce:

```text
DIRECCIONES
256 → 128 → 64 → 32 → 16 → 8 → 4
```

Por tanto, existe una relación muy importante:

> **Cuantas más subredes creamos, menos hosts puede contener cada una.**

---

### ¿Qué máscara necesitamos?

Ahora ya podemos resolver problemas sencillos.

Supongamos que necesitamos dividir:

```text
192.168.10.0/24
```

en **4 subredes iguales**.

Buscamos en la tabla:

```text
4 subredes → /26
```

Por tanto, utilizaremos:

```text
/26
```

que corresponde a:

```text
255.255.255.192
```

Cada una de las cuatro subredes podrá contener:

```text
62 hosts utilizables
```

Todavía nos falta descubrir algo muy importante:

> ¿Cuáles son exactamente esas cuatro subredes?

Eso lo aprenderemos en el siguiente apartado.

---

### Otro ejemplo

Queremos obtener al menos **8 subredes** a partir de:

```text
192.168.20.0/24
```

Necesitamos tomar tres bits:

```text
2^3 = 8
```

Por tanto:

```text
/24 + 3 bits = /27
```

La máscara será:

```text
255.255.255.224
```

Y cada subred tendrá:

```text
32 - 27 = 5 bits de host
```

```text
2^5 - 2 = 30 hosts utilizables
```

Resultado:

```text
8 subredes
30 hosts utilizables por subred
```

---

### ¿Y si nos piden un número de hosts?

También podemos resolver el problema al revés.

Supongamos que cada subred necesita alojar **50 equipos**.

Buscamos la máscara más pequeña que permita al menos 50 hosts.

Una `/27` permite:

```text
30 hosts
```

No es suficiente.

Una `/26` permite:

```text
62 hosts
```

Sí es suficiente.

Por tanto:

```text
50 hosts → necesitamos /26
```

No debemos elegir una `/25`, aunque permitiría 126 hosts, porque estaríamos reservando muchas más direcciones de las necesarias.

---

!!! note "Dos fórmulas fundamentales"

    Para trabajar con subnetting utilizaremos principalmente:

    ```text
    Número de subredes = 2^n
    ```

    donde `n` es el número de bits tomados para crear subredes.

    Y:

    ```text
    Hosts utilizables = 2^h - 2
    ```

    donde `h` es el número de bits disponibles para hosts.

!!! tip "No empieces siempre por las fórmulas"

    Con la práctica acabarás reconociendo directamente valores como:

    ```text
    /26 → 62 hosts
    /27 → 30 hosts
    /28 → 14 hosts
    ```

    La tabla de máscaras puede utilizarse como apoyo hasta que estas relaciones resulten familiares.

!!! warning "No olvides el -2"

    En cada subred debemos reservar una dirección para identificar la propia red y otra para el broadcast.

    Por eso, si existen 64 direcciones:

    ```text
    64 - 2 = 62 hosts utilizables
    ```

!!! question "Comprueba que lo has entendido"

    Queremos dividir la red:

    ```text
    192.168.30.0/24
    ```

    en **8 subredes iguales**.

    Responde:

    1. ¿Cuántos bits debemos tomar?
    2. ¿Qué prefijo utilizaremos?
    3. ¿Cuál será la máscara decimal?
    4. ¿Cuántos hosts utilizables tendrá cada subred?

!!! abstract "🛠️ En el siguiente apartado..."

    Ya sabemos determinar cuántas subredes y hosts obtenemos. Ahora aprenderemos a localizar exactamente dónde empieza y termina cada subred utilizando un procedimiento muy sencillo: el **método del salto o incremento**.

## 11.5 El método del salto o incremento

Ya sabemos que si dividimos una red `/24` utilizando una máscara `/26` obtenemos:

```text
4 subredes
62 hosts utilizables por subred
```

Pero todavía debemos responder una pregunta fundamental:

> **¿Cuáles son exactamente esas cuatro subredes?**

Para descubrirlo utilizaremos un procedimiento muy sencillo denominado **método del salto** o **método del incremento**.

---

### ¿Qué es el salto?

El **salto** indica cada cuántas direcciones comienza una nueva subred.

Para calcularlo utilizaremos:

```text
Salto = 256 - valor del octeto de la máscara donde se realiza el subnetting
```

Como en este capítulo partimos de redes `/24`, trabajaremos con el **último octeto**.

---

### Ejemplo con una máscara /26

Queremos dividir:

```text
192.168.10.0/24
```

en cuatro subredes iguales.

Ya sabemos que necesitamos:

```text
/26
```

Su máscara decimal es:

```text
255.255.255.192
```

Nos fijamos en el último octeto:

```text
192
```

Calculamos:

```text
Salto = 256 - 192
```

Por tanto:

```text
Salto = 64
```

Esto significa que cada nueva subred comienza **64 direcciones después de la anterior**.

---

### Localizamos las subredes

Comenzamos por `0` y vamos sumando 64:

```text
0
0 + 64   = 64
64 + 64  = 128
128 + 64 = 192
```

Por tanto, las cuatro subredes comienzan en:

```text
192.168.10.0
192.168.10.64
192.168.10.128
192.168.10.192
```

Podemos escribirlas utilizando CIDR:

```text
192.168.10.0/26
192.168.10.64/26
192.168.10.128/26
192.168.10.192/26
```

---

### ¿Dónde termina cada subred?

Una vez conocida la dirección de red, localizar el final del bloque es muy sencillo.

La siguiente subred comienza en:

```text
192.168.10.64
```

Por tanto, la primera termina justo antes:

```text
192.168.10.63
```

Esa última dirección es el **broadcast** de la primera subred.

Así obtenemos:

```text
Red:          192.168.10.0
Primer host:  192.168.10.1
Último host:  192.168.10.62
Broadcast:    192.168.10.63
```

La siguiente subred empieza en `.64`.

Su broadcast será justo anterior al comienzo de la tercera:

```text
192.168.10.127
```

Por tanto:

```text
Red:          192.168.10.64
Primer host:  192.168.10.65
Último host:  192.168.10.126
Broadcast:    192.168.10.127
```

---

### Las cuatro subredes completas

Ya podemos construir la tabla completa:

| Subred | Dirección de red | Primer host | Último host | Broadcast |
|:------:|------------------|-------------|-------------|-----------|
| 1 | `192.168.10.0/26` | `192.168.10.1` | `192.168.10.62` | `192.168.10.63` |
| 2 | `192.168.10.64/26` | `192.168.10.65` | `192.168.10.126` | `192.168.10.127` |
| 3 | `192.168.10.128/26` | `192.168.10.129` | `192.168.10.190` | `192.168.10.191` |
| 4 | `192.168.10.192/26` | `192.168.10.193` | `192.168.10.254` | `192.168.10.255` |

Observa que cada subred contiene:

```text
64 direcciones totales
```

de las cuales:

```text
1 → dirección de red
62 → hosts utilizables
1 → broadcast
```

---

### El procedimiento completo

Cuando conozcamos la máscara, podemos seguir siempre estos pasos.

#### Paso 1. Convertir el prefijo en máscara

Por ejemplo:

```text
/26 = 255.255.255.192
```

#### Paso 2. Calcular el salto

```text
256 - 192 = 64
```

#### Paso 3. Obtener las direcciones de red

Comenzamos en cero y sumamos el salto:

```text
0
64
128
192
```

#### Paso 4. Obtener el broadcast

El broadcast es la dirección inmediatamente anterior al comienzo de la siguiente subred:

```text
0   → broadcast 63
64  → broadcast 127
128 → broadcast 191
192 → broadcast 255
```

#### Paso 5. Obtener los hosts

El primer host es:

```text
Dirección de red + 1
```

y el último host:

```text
Broadcast - 1
```

---

### Una forma rápida de visualizarlo

Podemos imaginar la red `/24` como una línea de 256 direcciones:

```text
0                                                     255
|-------------------------------------------------------|
```

Con `/26` la dividimos en bloques de 64:

```text
0          64         128         192             255
|-----------|-----------|-----------|----------------|
   /26          /26         /26          /26
```

Cada punto de inicio corresponde a una nueva subred.

<figure class="figura-libro">
  <img
    src="../../assets/images/parte3/capitulo11/figura11_9_10.png"
    alt="Método del salto para calcular subredes IPv4 y procedimiento para determinar a qué subred pertenece una dirección IP"
  >
  <figcaption>
    <strong>Figuras 11.9 y 11.10.</strong> Aplicación del método del salto para localizar las subredes obtenidas al dividir una red /24 y procedimiento para determinar a qué subred pertenece una dirección IPv4 concreta. En el ejemplo, una máscara /26 produce un salto de 64 direcciones y permite identificar que 192.168.10.150 pertenece a la subred 192.168.10.128/26.
  </figcaption>
</figure>

---

## Otro ejemplo: una máscara /27

Supongamos ahora:

```text
192.168.20.0/24
```

y queremos dividirla utilizando:

```text
/27
```

La máscara es:

```text
255.255.255.224
```

Calculamos:

```text
Salto = 256 - 224
```

Resultado:

```text
Salto = 32
```

Por tanto, las subredes comienzan en:

```text
0
32
64
96
128
160
192
224
```

Es decir:

```text
192.168.20.0/27
192.168.20.32/27
192.168.20.64/27
192.168.20.96/27
192.168.20.128/27
192.168.20.160/27
192.168.20.192/27
192.168.20.224/27
```

---

### Calculemos una de ellas

Tomemos:

```text
192.168.20.96/27
```

La siguiente subred comienza en:

```text
192.168.20.128
```

Por tanto:

```text
Red:          192.168.20.96
Primer host:  192.168.20.97
Último host:  192.168.20.126
Broadcast:    192.168.20.127
```

No ha sido necesario convertir toda la dirección a binario.

---

### Tabla rápida de saltos

Para las máscaras que utilizaremos en este capítulo:

| CIDR | Máscara | Cálculo | Salto |
|:----:|---------|---------|------:|
| `/25` | `255.255.255.128` | `256 - 128` | **128** |
| `/26` | `255.255.255.192` | `256 - 192` | **64** |
| `/27` | `255.255.255.224` | `256 - 224` | **32** |
| `/28` | `255.255.255.240` | `256 - 240` | **16** |
| `/29` | `255.255.255.248` | `256 - 248` | **8** |
| `/30` | `255.255.255.252` | `256 - 252` | **4** |

Observa otra vez el patrón:

```text
/25 → 128
/26 →  64
/27 →  32
/28 →  16
/29 →   8
/30 →   4
```

Estos valores coinciden con el **número total de direcciones que contiene cada subred**.

---

### Un truco muy útil

Si conocemos el salto, podemos encontrar rápidamente la subred a la que pertenece una dirección.

Supongamos:

```text
192.168.10.150/26
```

Sabemos que:

```text
/26 → salto 64
```

Las subredes comienzan en:

```text
0
64
128
192
```

El valor `150` está comprendido entre:

```text
128 y 191
```

Por tanto:

```text
192.168.10.150
```

pertenece a:

```text
192.168.10.128/26
```

Y podemos determinar inmediatamente:

```text
Red:          192.168.10.128
Primer host:  192.168.10.129
IP analizada: 192.168.10.150
Último host:  192.168.10.190
Broadcast:    192.168.10.191
```

---

!!! note "Recuerda"

    Para las redes `/24` utilizadas en este capítulo podemos calcular el salto mediante:

    ```text
    Salto = 256 - último octeto de la máscara
    ```

    Después comenzamos en `0` y vamos sumando el salto para localizar las diferentes subredes.

!!! tip "El método rápido"

    Si tienes:

    ```text
    /27
    ```

    recuerda:

    ```text
    /27 = 255.255.255.224

    256 - 224 = 32
    ```

    Por tanto:

    ```text
    0 - 32 - 64 - 96 - 128 - 160 - 192 - 224
    ```

    son los comienzos de las ocho subredes.

!!! warning "No confundas red y broadcast"

    Si una subred comienza en `.64` y la siguiente comienza en `.128`:

    ```text
    Red       → .64
    Primer host → .65
    Último host → .126
    Broadcast → .127
    ```

    La dirección inmediatamente anterior a la siguiente subred es siempre el broadcast de la subred actual.

!!! question "Comprueba que lo has entendido"

    Dada la red:

    ```text
    192.168.50.0/24
    ```

    queremos utilizar subredes `/28`.

    Calcula:

    1. La máscara decimal.
    2. El salto.
    3. Las cuatro primeras direcciones de subred.
    4. El broadcast de la segunda subred.
    5. El primer y último host de la segunda subred.

!!! abstract "🛠️ En el siguiente apartado..."

    Ya disponemos de todas las herramientas necesarias para diseñar nuestras primeras redes reales. En el siguiente apartado utilizaremos **FLSM (Fixed Length Subnet Mask)** para dividir una red `/24` en varias subredes del mismo tamaño.

## 11.6 Subnetting con máscara fija: FLSM

Ya disponemos de las herramientas necesarias para dividir una red IPv4 en subredes:

- sabemos interpretar la notación CIDR;
- podemos calcular el número de subredes;
- podemos determinar el número de hosts disponibles;
- conocemos el método del salto;
- sabemos obtener la dirección de red, el primer host, el último host y el broadcast.

Ahora combinaremos todos estos conocimientos para diseñar nuestras primeras subredes.

Comenzaremos utilizando **FLSM**.

---

### ¿Qué significa FLSM?

Las siglas **FLSM** proceden de:

```text
Fixed Length Subnet Mask
```

que podemos traducir como:

> **Máscara de subred de longitud fija.**

La característica fundamental de FLSM es muy sencilla:

> **Todas las subredes utilizan la misma máscara y, por tanto, tienen el mismo tamaño.**

Si dividimos una red `/24` utilizando `/26`, todas las subredes resultantes serán `/26`.

No podemos utilizar:

```text
Subred 1 → /26
Subred 2 → /27
Subred 3 → /28
```

porque estaríamos utilizando máscaras diferentes.

Eso será precisamente lo que aprenderemos más adelante con **VLSM**.

---

## Un problema real de diseño

Una pequeña empresa dispone de la red:

```text
192.168.10.0/24
```

La empresa quiere separar sus equipos en cuatro departamentos:

| Departamento | Número de equipos |
|-------------|------------------:|
| Administración | 40 |
| Ventas | 35 |
| Informática | 25 |
| Dirección | 10 |

Queremos crear una subred independiente para cada departamento utilizando **FLSM**.

Necesitamos responder a dos preguntas:

1. ¿Cuántas subredes necesitamos?
2. ¿Cuántos hosts debe admitir cada subred?

---

### Paso 1. Determinar el número de subredes

Tenemos cuatro departamentos:

```text
Administración
Ventas
Informática
Dirección
```

Por tanto:

```text
Necesitamos 4 subredes
```

Recordemos:

```text
Número de subredes = 2^n
```

Buscamos el número de bits necesarios:

```text
2^1 = 2
2^2 = 4
```

Necesitamos tomar:

```text
2 bits
```

Como partimos de `/24`:

```text
/24 + 2 = /26
```

Nuestra nueva máscara será:

```text
/26
```

---

### Paso 2. Comprobar el número de hosts

Antes de continuar debemos asegurarnos de que una `/26` tiene suficiente capacidad para todos los departamentos.

Una `/26` dispone de:

```text
32 - 26 = 6 bits de host
```

Por tanto:

```text
2^6 = 64 direcciones
```

Restamos la dirección de red y la de broadcast:

```text
64 - 2 = 62 hosts utilizables
```

Cada subred puede contener:

```text
62 hosts
```

El departamento más grande es Administración:

```text
40 equipos
```

Como:

```text
62 ≥ 40
```

la máscara `/26` es válida.

---

!!! warning "Una comprobación imprescindible"

    En FLSM no basta con obtener el número de subredes necesario.

    También debemos comprobar que **todas las subredes tienen capacidad suficiente para el grupo de mayor tamaño**.

    Si el departamento más grande necesitara 70 hosts, una `/26` no sería válida, aunque produjera exactamente cuatro subredes.

---

### Paso 3. Convertir el prefijo en máscara decimal

Sabemos que:

```text
/26 = 255.255.255.192
```

Por tanto, utilizaremos:

```text
Máscara: 255.255.255.192
```

en todas las subredes.

Esta es precisamente la característica que define FLSM:

```text
Administración → /26
Ventas         → /26
Informática    → /26
Dirección      → /26
```

---

### Paso 4. Calcular el salto

Aplicamos el método aprendido:

```text
Salto = 256 - 192
```

Por tanto:

```text
Salto = 64
```

Las subredes comenzarán en:

```text
0
64
128
192
```

Obtenemos:

```text
192.168.10.0/26
192.168.10.64/26
192.168.10.128/26
192.168.10.192/26
```

---

### Paso 5. Asignar una subred a cada departamento

Podemos realizar la siguiente asignación:

| Departamento | Subred |
|-------------|--------|
| Administración | `192.168.10.0/26` |
| Ventas | `192.168.10.64/26` |
| Informática | `192.168.10.128/26` |
| Dirección | `192.168.10.192/26` |

Todas utilizan:

```text
255.255.255.192
```

y todas disponen de:

```text
62 hosts utilizables
```

---

### Paso 6. Obtener todos los datos de cada subred

Ahora completamos el plan de direccionamiento.

| Departamento | Red | Primer host | Último host | Broadcast |
|-------------|-----|-------------|-------------|-----------|
| Administración | `192.168.10.0/26` | `192.168.10.1` | `192.168.10.62` | `192.168.10.63` |
| Ventas | `192.168.10.64/26` | `192.168.10.65` | `192.168.10.126` | `192.168.10.127` |
| Informática | `192.168.10.128/26` | `192.168.10.129` | `192.168.10.190` | `192.168.10.191` |
| Dirección | `192.168.10.192/26` | `192.168.10.193` | `192.168.10.254` | `192.168.10.255` |

Ya tenemos completamente planificado el direccionamiento de la empresa.

---

## ¿Cuántas direcciones estamos utilizando realmente?

Aquí aparece una de las características importantes de FLSM.

Administración necesita:

```text
40 hosts
```

pero dispone de:

```text
62
```

Quedan sin utilizar:

```text
62 - 40 = 22
```

Ventas necesita 35:

```text
62 - 35 = 27
```

Informática necesita 25:

```text
62 - 25 = 37
```

Dirección solo necesita 10:

```text
62 - 10 = 52
```

Podemos resumirlo:

| Departamento | Hosts necesarios | Hosts disponibles | Hosts no utilizados |
|-------------|------------------:|------------------:|--------------------:|
| Administración | 40 | 62 | 22 |
| Ventas | 35 | 62 | 27 |
| Informática | 25 | 62 | 37 |
| Dirección | 10 | 62 | 52 |
| **Total** | **110** | **248** | **138** |

La solución funciona perfectamente.

Pero hemos reservado capacidad para **248 hosts** cuando realmente solo necesitamos **110**.

<figure class="figura-libro">
  <img
    src="../../assets/images/parte3/capitulo11/figura11_11_12.png"
    alt="Diseño de una red mediante FLSM y análisis del aprovechamiento del espacio de direccionamiento"
  >
  <figcaption>
    <strong>Figuras 11.11 y 11.12.</strong> Diseño mediante FLSM de cuatro subredes /26 a partir de la red 192.168.10.0/24 y análisis del aprovechamiento del espacio de direccionamiento. Todas las subredes utilizan la misma máscara y ofrecen 62 direcciones de host utilizables, aunque las necesidades reales de cada departamento sean diferentes.
  </figcaption>
</figure>

---

### ¿Significa esto que FLSM es incorrecto?

No.

FLSM es perfectamente válido y tiene una ventaja importante:

> **Es sencillo de calcular, organizar y administrar.**

Todas las subredes tienen exactamente el mismo tamaño.

Podemos representarlas así:

```text
192.168.10.0/24

0              64             128            192            255
|---------------|---------------|---------------|---------------|
 Administración      Ventas        Informática       Dirección
     /26               /26             /26              /26
```

El problema aparece cuando los grupos tienen tamaños muy diferentes.

---

## El principal inconveniente de FLSM

Observemos Dirección.

Necesita:

```text
10 hosts
```

pero hemos reservado:

```text
62 hosts
```

Esto significa que gran parte de esa subred queda sin utilizar.

¿Por qué no podemos darle una subred más pequeña?

Por ejemplo:

```text
Dirección → /28 → 14 hosts
```

Sería suficiente.

Pero entonces tendríamos:

```text
Administración → /26
Ventas         → /26
Informática    → /26
Dirección      → /28
```

y ya no estaríamos utilizando **FLSM**, porque las máscaras serían diferentes.

Estaríamos comenzando a utilizar **VLSM**.

---

### La regla fundamental de FLSM

Cuando utilizamos FLSM:

> **La necesidad del grupo más grande determina el tamaño de todas las subredes.**

En nuestro ejemplo:

```text
Administración → 40 hosts
```

necesita como mínimo una `/26`.

Por tanto:

```text
TODOS → /26
```

aunque algunos departamentos necesiten muchos menos equipos.

---

## Procedimiento para resolver un ejercicio FLSM

Podemos utilizar siempre este procedimiento:

### 1. Identificar la red original

```text
192.168.10.0/24
```

### 2. Determinar cuántas subredes necesitamos

```text
4 departamentos → 4 subredes
```

### 3. Calcular los bits necesarios

```text
2^2 = 4
```

Tomamos:

```text
2 bits
```

### 4. Obtener el nuevo prefijo

```text
/24 + 2 = /26
```

### 5. Comprobar los hosts

```text
/26 → 62 hosts
```

¿Es suficiente para el departamento más grande?

```text
62 ≥ 40 → Sí
```

### 6. Calcular el salto

```text
/26 = 255.255.255.192

256 - 192 = 64
```

### 7. Localizar las subredes

```text
0
64
128
192
```

### 8. Calcular red, hosts y broadcast

Finalmente construimos nuestra tabla de direccionamiento.

---

!!! note "Recuerda"

    En **FLSM todas las subredes utilizan exactamente la misma máscara**.

    Si una empresa necesita cuatro subredes `/26`:

    ```text
    Subred 1 → /26
    Subred 2 → /26
    Subred 3 → /26
    Subred 4 → /26
    ```

!!! tip "Empieza por el grupo más grande"

    Además de comprobar cuántas subredes necesitas, identifica siempre el grupo con mayor número de hosts.

    Todas las subredes FLSM deberán tener capacidad suficiente para ese grupo.

!!! warning "No desperdiciar no significa que esté mal"

    Una subred puede disponer de más direcciones de las que realmente necesita.

    Esto no produce ningún error de funcionamiento, pero puede suponer un uso poco eficiente del espacio de direccionamiento.

!!! question "Comprueba que lo has entendido"

    Disponemos de:

    ```text
    192.168.50.0/24
    ```

    y necesitamos crear cuatro subredes para:

    ```text
    Departamento A → 50 hosts
    Departamento B → 45 hosts
    Departamento C → 30 hosts
    Departamento D → 20 hosts
    ```

    Responde:

    1. ¿Qué prefijo utilizarías?
    2. ¿Cuál sería la máscara decimal?
    3. ¿Cuál sería el salto?
    4. ¿Cuáles serían las cuatro direcciones de red?
    5. ¿Cuántos hosts utilizables tendría cada subred?
    6. ¿Cuántas direcciones de host quedarían sin utilizar en el Departamento D?

!!! abstract "🛠️ A continuación..."

    Resolveremos otro diseño FLSM y aprenderemos a detectar una situación muy importante: **qué ocurre cuando la red original no dispone de espacio suficiente para satisfacer simultáneamente el número de subredes y de hosts solicitados**.

## 11.7 Validación de un diseño FLSM

En el apartado anterior hemos diseñado correctamente cuatro subredes utilizando FLSM.

Sin embargo, al resolver un problema de subnetting no debemos dar por supuesto que siempre existe una solución.

Antes de comenzar a asignar direcciones debemos comprobar dos condiciones:

1. Que podemos obtener el **número de subredes solicitado**.
2. Que cada subred dispone de **suficientes direcciones para los hosts necesarios**.

En ocasiones ambas condiciones no pueden cumplirse simultáneamente.

Veamos un ejemplo.

---

### Un nuevo problema

Una empresa dispone de:

```text
192.168.20.0/24
```

y quiere crear cuatro subredes para los siguientes departamentos:

| Departamento | Hosts necesarios |
|-------------|------------------:|
| Administración | 70 |
| Comercial | 60 |
| Soporte | 40 |
| Dirección | 20 |

La empresa quiere utilizar **FLSM**, por lo que todas las subredes deberán tener el mismo tamaño.

¿Podemos realizar este diseño utilizando únicamente `192.168.20.0/24`?

Vamos a comprobarlo.

---

### Paso 1. ¿Cuántas subredes necesitamos?

Tenemos cuatro departamentos:

```text
4 departamentos → 4 subredes
```

Para obtener cuatro subredes necesitamos:

```text
2² = 4
```

Por tanto, debemos tomar dos bits de la parte de host.

Partiendo de `/24`:

```text
/24 + 2 = /26
```

La primera opción sería utilizar:

```text
/26
```

---

### Paso 2. ¿Cuántos hosts permite una /26?

Una `/26` deja:

```text
32 - 26 = 6 bits para hosts
```

Por tanto:

```text
2⁶ - 2 = 62
```

Cada subred dispone de:

```text
62 hosts utilizables
```

Ahora comparamos este valor con las necesidades:

| Departamento | Necesita | Capacidad `/26` | ¿Cabe? |
|-------------|---------:|----------------:|:------:|
| Administración | 70 | 62 | ❌ |
| Comercial | 60 | 62 | ✅ |
| Soporte | 40 | 62 | ✅ |
| Dirección | 20 | 62 | ✅ |

Tenemos un problema.

Administración necesita:

```text
70 hosts
```

pero una `/26` solamente permite:

```text
62 hosts
```

Por tanto:

> **Una máscara /26 no sirve para este diseño FLSM.**

---

### ¿Podemos utilizar /25?

Probemos una subred más grande.

Una `/25` dispone de:

```text
32 - 25 = 7 bits de host
```

Por tanto:

```text
2⁷ - 2 = 126 hosts utilizables
```

Ahora Administración sí cabría:

```text
70 ≤ 126
```

Pero aparece otro problema.

Si partimos de una `/24` y utilizamos `/25`:

```text
25 - 24 = 1 bit tomado
```

Podemos crear:

```text
2¹ = 2 subredes
```

Y nosotros necesitamos:

```text
4 subredes
```

Por tanto:

> **Una máscara /25 tampoco resuelve el problema.**

---

## El conflicto

Veamos las dos posibilidades juntas:

| Máscara | Subredes obtenidas | Hosts por subred | ¿Sirve? |
|:-------:|-------------------:|-----------------:|:--------:|
| `/25` | 2 | 126 | ❌ Faltan subredes |
| `/26` | 4 | 62 | ❌ Faltan hosts en Administración |

Aquí aparece una situación fundamental:

```text
/25
↓
Tenemos suficientes hosts
pero no suficientes subredes
```

mientras que:

```text
/26
↓
Tenemos suficientes subredes
pero una de ellas es demasiado pequeña
```

Por tanto:

> **No existe una solución FLSM que permita cumplir estos requisitos utilizando únicamente la red 192.168.20.0/24.**

---

### ¿Qué hemos aprendido?

Un ejercicio de subnetting no consiste únicamente en buscar una máscara que proporcione el número de subredes solicitado.

También debemos comprobar la capacidad de cada subred.

Las dos condiciones deben cumplirse simultáneamente:

```text
SUBREDES SUFICIENTES
        +
HOSTS SUFICIENTES
        ↓
DISEÑO VÁLIDO
```

Si falla cualquiera de ellas:

```text
DISEÑO NO VÁLIDO
```

---

## Una comprobación rápida antes de calcular

En FLSM resulta útil identificar dos datos antes de empezar:

```text
Número de subredes necesarias
```

y:

```text
Número de hosts del grupo más grande
```

En nuestro ejemplo:

```text
Subredes necesarias = 4
Mayor número de hosts = 70
```

Después podemos consultar nuestra tabla:

| Prefijo | Subredes desde `/24` | Hosts por subred |
|:-------:|---------------------:|-----------------:|
| `/25` | 2 | 126 |
| `/26` | 4 | 62 |
| `/27` | 8 | 30 |
| `/28` | 16 | 14 |

Buscamos una fila que cumpla simultáneamente:

```text
Subredes ≥ 4
```

y:

```text
Hosts ≥ 70
```

No existe ninguna.

Podemos detectar así rápidamente que el problema no tiene solución FLSM dentro de una `/24`.

---

## No fuerces una solución

Este punto es muy importante en el trabajo real.

Si los requisitos no caben en el espacio de direccionamiento disponible, **no debemos inventar direcciones ni crear subredes que se solapen**.

Por ejemplo, sería incorrecto intentar hacer algo como:

```text
Administración → 192.168.20.0/25
Comercial      → 192.168.20.64/26
```

¿Por qué?

Porque la primera subred `/25` ocupa:

```text
192.168.20.0 - 192.168.20.127
```

y la supuesta segunda subred comienza en:

```text
192.168.20.64
```

que ya está dentro de ese intervalo.

Las dos subredes se **solaparían**.

---

### ¿Qué es el solapamiento?

Dos subredes se solapan cuando comparten parte de su espacio de direcciones.

Por ejemplo:

```text
192.168.20.0/25
```

ocupa:

```text
192.168.20.0 - 192.168.20.127
```

Por tanto, no podemos crear dentro del mismo diseño independiente:

```text
192.168.20.64/26
```

porque esta ocupa:

```text
192.168.20.64 - 192.168.20.127
```

Esas direcciones ya pertenecen al primer bloque.

> **En un plan de direccionamiento, las subredes asignadas a redes diferentes no deben solaparse.**

<figure class="figura-libro">
  <img
    src="../../assets/images/parte3/capitulo11/figura11_13_14.png"
    alt="Validación de un diseño FLSM y ejemplo de solapamiento entre subredes IPv4"
  >
  <figcaption>
    <strong>Figuras 11.13 y 11.14.</strong> Validación de los requisitos de un diseño FLSM y ejemplo de solapamiento entre subredes. Una máscara /25 proporciona suficientes hosts pero solamente dos subredes, mientras que una /26 proporciona las cuatro subredes necesarias pero solo 62 hosts utilizables en cada una. Además, las subredes de un plan de direccionamiento deben ocupar intervalos independientes y no pueden solaparse.
  </figcaption>
</figure>

---

## ¿Qué podríamos hacer entonces?

Si los requisitos no pueden satisfacerse con la red disponible, tendremos que modificar alguna condición del diseño.

Por ejemplo:

- disponer de un espacio de direccionamiento mayor;
- reducir el número de hosts necesarios;
- reorganizar los grupos;
- utilizar otro esquema de direccionamiento si los requisitos lo permiten.

Lo importante es reconocer que:

> **No todos los problemas tienen una solución válida con la red que nos han proporcionado.**

Detectarlo correctamente también forma parte del trabajo de planificación.

---

## Un segundo caso

Supongamos ahora que disponemos de:

```text
192.168.30.0/24
```

y necesitamos cuatro subredes:

| Departamento | Hosts |
|-------------|------:|
| Administración | 50 |
| Comercial | 45 |
| Soporte | 30 |
| Dirección | 15 |

Necesitamos:

```text
4 subredes
```

Por tanto:

```text
/26
```

Una `/26` permite:

```text
62 hosts
```

El grupo más grande necesita:

```text
50 hosts
```

Comprobamos:

```text
4 subredes disponibles ≥ 4 necesarias
```

y:

```text
62 hosts disponibles ≥ 50 necesarios
```

Se cumplen las dos condiciones.

Por tanto:

> **Este diseño sí puede realizarse mediante FLSM utilizando una red /24.**

---

### La decisión antes del cálculo

A partir de ahora, cuando recibas un problema FLSM, realiza primero esta comprobación:

```text
1. ¿Cuántas subredes necesito?

2. ¿Cuántos hosts necesita
   el grupo más grande?

3. ¿Existe una máscara que
   cumpla ambas condiciones?

          ↓

      SÍ → continuar

      NO → detener el diseño
           y revisar requisitos
```

Este pequeño análisis puede evitar muchos errores posteriores.

---

!!! note "Regla de validación FLSM"

    Una solución FLSM solo es válida cuando la máscara elegida proporciona simultáneamente:

    - suficientes subredes;
    - suficientes hosts en cada subred.

!!! warning "Nunca solapes subredes"

    No intentes resolver una falta de espacio utilizando bloques de direcciones que ya pertenecen a otra subred.

    Las subredes de un plan de direccionamiento deben ocupar espacios independientes.

!!! tip "Comprueba antes de calcular"

    Antes de construir tablas completas de direcciones, busca siempre:

    ```text
    Subredes necesarias
    +
    Hosts del grupo más grande
    ```

    Si ninguna máscara cumple ambas condiciones, puedes detener el cálculo inmediatamente.

!!! question "¿Tiene solución?"

    Dispones de:

    ```text
    192.168.40.0/24
    ```

    y necesitas crear mediante FLSM:

    ```text
    8 subredes
    40 hosts como mínimo en cada subred
    ```

    Responde:

    1. ¿Qué prefijo necesitarías para obtener 8 subredes?
    2. ¿Cuántos hosts permitiría cada una?
    3. ¿Cumple los requisitos?
    4. ¿Existe otra máscara dentro de esta `/24` que permita obtener simultáneamente 8 subredes y 40 hosts por subred?
    5. ¿Qué conclusión comunicarías al responsable de la red?

!!! abstract "🛠️ A continuación..."

    FLSM funciona muy bien cuando las diferentes redes necesitan un número parecido de hosts. Sin embargo, puede desperdiciar muchas direcciones cuando sus tamaños son muy diferentes.

    En el siguiente apartado aprenderemos a resolver este problema utilizando **VLSM (Variable Length Subnet Mask)**, que nos permitirá asignar una máscara diferente a cada subred.

## 11.8 Subnetting con máscara variable: VLSM

En los apartados anteriores hemos utilizado **FLSM** para dividir una red en subredes del mismo tamaño.

Su funcionamiento es sencillo:

```text
Red original
      ↓
Subred 1 → misma máscara
Subred 2 → misma máscara
Subred 3 → misma máscara
Subred 4 → misma máscara
```

Este sistema resulta fácil de planificar, pero hemos descubierto un problema importante.

Si los grupos tienen tamaños muy diferentes, podemos desperdiciar una gran cantidad de direcciones.

Para solucionar este problema podemos utilizar **VLSM**.

---

### ¿Qué significa VLSM?

Las siglas **VLSM** proceden de:

```text
Variable Length Subnet Mask
```

que podemos traducir como:

> **Máscara de subred de longitud variable.**

A diferencia de FLSM, VLSM permite utilizar **máscaras diferentes dentro del mismo plan de direccionamiento**.

Por ejemplo:

```text
Departamento A → /26
Departamento B → /27
Departamento C → /28
Departamento D → /29
```

Cada departamento recibe así una subred adaptada a sus necesidades.

---

### FLSM frente a VLSM

La diferencia fundamental puede resumirse así:

```text
FLSM
Todas las subredes tienen
el mismo tamaño.

VLSM
Cada subred puede tener
un tamaño diferente.
```

Esto permite aprovechar mucho mejor el espacio de direccionamiento disponible.

---

## Un problema de diseño

Una empresa dispone de:

```text
192.168.50.0/24
```

y necesita crear cuatro subredes:

| Departamento | Hosts necesarios |
|-------------|------------------:|
| Administración | 50 |
| Ventas | 25 |
| Informática | 12 |
| Dirección | 6 |

Queremos diseñar el direccionamiento utilizando **VLSM**.

---

## Paso 1. Ordenar las necesidades de mayor a menor

Esta es la primera regla fundamental de VLSM:

> **Las subredes deben asignarse comenzando por la que necesita mayor número de hosts.**

En nuestro ejemplo ya están ordenadas:

```text
Administración → 50 hosts
Ventas         → 25 hosts
Informática    → 12 hosts
Dirección      →  6 hosts
```

¿Por qué comenzamos por la mayor?

Porque las subredes grandes son las más difíciles de colocar dentro del espacio disponible.

Una vez reservados los bloques grandes, podremos utilizar los espacios restantes para colocar subredes más pequeñas.

---

!!! warning "Regla fundamental de VLSM"

    Antes de comenzar a asignar direcciones:

    ```text
    ORDENA LAS SUBREDES
    DE MAYOR A MENOR
    ```

    Esta regla simplifica enormemente el diseño y ayuda a evitar errores y solapamientos.

---

## Paso 2. Elegir la máscara para Administración

Administración necesita:

```text
50 hosts
```

Buscamos la subred más pequeña que permita alojarlos.

Recordemos:

```text
/27 → 30 hosts
```

No es suficiente.

Probamos:

```text
/26 → 62 hosts
```

Como:

```text
62 ≥ 50
```

Administración necesita una:

```text
/26
```

La primera subred disponible comienza en:

```text
192.168.50.0
```

Por tanto:

```text
Administración
192.168.50.0/26
```

Una `/26` contiene 64 direcciones:

```text
Red:          192.168.50.0
Primer host:  192.168.50.1
Último host:  192.168.50.62
Broadcast:    192.168.50.63
```

El bloque utilizado es:

```text
0 - 63
```

La siguiente dirección disponible será:

```text
192.168.50.64
```

---

## Paso 3. Elegir la máscara para Ventas

Ventas necesita:

```text
25 hosts
```

Probamos:

```text
/28 → 14 hosts
```

No es suficiente.

Una `/27` permite:

```text
30 hosts
```

Por tanto:

```text
Ventas → /27
```

La siguiente dirección disponible era:

```text
192.168.50.64
```

Así que asignamos:

```text
Ventas
192.168.50.64/27
```

Una `/27` contiene:

```text
32 direcciones
```

Por tanto, ocupa:

```text
64 - 95
```

Tenemos:

```text
Red:          192.168.50.64
Primer host:  192.168.50.65
Último host:  192.168.50.94
Broadcast:    192.168.50.95
```

La siguiente dirección disponible será:

```text
192.168.50.96
```

---

## Paso 4. Elegir la máscara para Informática

Informática necesita:

```text
12 hosts
```

Una `/29` permite:

```text
6 hosts
```

No es suficiente.

Una `/28` permite:

```text
14 hosts
```

Por tanto:

```text
Informática → /28
```

La siguiente dirección disponible es:

```text
192.168.50.96
```

Asignamos:

```text
192.168.50.96/28
```

Una `/28` contiene:

```text
16 direcciones
```

Por tanto:

```text
Red:          192.168.50.96
Primer host:  192.168.50.97
Último host:  192.168.50.110
Broadcast:    192.168.50.111
```

El bloque ocupado es:

```text
96 - 111
```

La siguiente dirección disponible será:

```text
192.168.50.112
```

---

## Paso 5. Elegir la máscara para Dirección

Dirección necesita:

```text
6 hosts
```

Una `/29` dispone de:

```text
2³ - 2 = 6 hosts utilizables
```

Por tanto:

```text
Dirección → /29
```

La siguiente dirección disponible es:

```text
192.168.50.112
```

Asignamos:

```text
192.168.50.112/29
```

Una `/29` contiene:

```text
8 direcciones
```

Así obtenemos:

```text
Red:          192.168.50.112
Primer host:  192.168.50.113
Último host:  192.168.50.118
Broadcast:    192.168.50.119
```

El bloque utilizado es:

```text
112 - 119
```

La siguiente dirección disponible será:

```text
192.168.50.120
```

---

## El diseño VLSM completo

Ya podemos construir nuestra tabla de direccionamiento:

| Departamento | Hosts necesarios | Prefijo | Máscara | Red | Primer host | Último host | Broadcast |
|-------------|------------------:|:-------:|---------|-----|-------------|-------------|-----------|
| Administración | 50 | `/26` | `255.255.255.192` | `192.168.50.0` | `192.168.50.1` | `192.168.50.62` | `192.168.50.63` |
| Ventas | 25 | `/27` | `255.255.255.224` | `192.168.50.64` | `192.168.50.65` | `192.168.50.94` | `192.168.50.95` |
| Informática | 12 | `/28` | `255.255.255.240` | `192.168.50.96` | `192.168.50.97` | `192.168.50.110` | `192.168.50.111` |
| Dirección | 6 | `/29` | `255.255.255.248` | `192.168.50.112` | `192.168.50.113` | `192.168.50.118` | `192.168.50.119` |

Observa que ahora utilizamos máscaras diferentes:

```text
Administración → /26
Ventas         → /27
Informática    → /28
Dirección      → /29
```

Eso es precisamente **VLSM**.

<figure class="figura-libro">
  <img
    src="../../assets/images/parte3/capitulo11/figura11_16.png"
    alt="Distribución mediante VLSM de la red 192.168.50.0/24"
  >
  <figcaption>
    <strong>Figura 11.16.</strong> Distribución mediante VLSM de la red 192.168.50.0/24. Cada departamento recibe una subred adaptada a sus necesidades: /26 para Administración, /27 para Ventas, /28 para Informática y /29 para Dirección. Las direcciones situadas a partir de 192.168.50.120 permanecen disponibles para futuras asignaciones.
  </figcaption>
</figure>

---

## Visualizando el espacio utilizado

Nuestra red original contiene las direcciones:

```text
192.168.50.0 - 192.168.50.255
```

Las hemos distribuido así:

```text
0                  63
|-------------------|
   Administración
        /26

64        95
|----------|
   Ventas
    /27

96   111
|------|
Informática
   /28

112 119
|---|
Dirección
  /29
```

Hasta ahora hemos utilizado:

```text
0 - 119
```

Por tanto, todavía queda disponible:

```text
120 - 255
```

para futuras subredes.

---

### Atención: el espacio restante no es automáticamente una única subred

Es importante no confundir **direcciones todavía no asignadas** con una nueva subred ya definida.

Después de utilizar:

```text
192.168.50.112/29
```

la siguiente dirección disponible es:

```text
192.168.50.120
```

y todas las direcciones comprendidas entre:

```text
192.168.50.120 - 192.168.50.255
```

siguen sin asignar.

Sin embargo, ese intervalo no constituye necesariamente una única subred.

Podremos dividirlo posteriormente en bloques válidos según las necesidades que aparezcan.

---

## ¿Cuántas direcciones hemos reservado?

Calculemos el tamaño de cada bloque:

```text
Administración /26 → 64 direcciones
Ventas         /27 → 32 direcciones
Informática    /28 → 16 direcciones
Dirección      /29 →  8 direcciones
```

En total:

```text
64 + 32 + 16 + 8 = 120 direcciones
```

La red `/24` dispone de:

```text
256 direcciones
```

Por tanto quedan sin asignar:

```text
256 - 120 = 136 direcciones
```

Esto nos proporciona espacio para ampliar la red en el futuro.

---

## Comparación con FLSM

¿Qué habría ocurrido si hubiéramos intentado utilizar FLSM?

El departamento más grande necesita:

```text
50 hosts
```

Por tanto, todas las subredes deberían ser como mínimo:

```text
/26
```

Necesitaríamos:

```text
4 × 64 = 256 direcciones
```

Es decir, utilizaríamos **toda la red `/24`**.

Con VLSM hemos reservado:

```text
120 direcciones
```

y todavía quedan:

```text
136 direcciones sin asignar
```

La diferencia es muy importante.

---

### FLSM

```text
Administración → /26 → 64 direcciones
Ventas         → /26 → 64 direcciones
Informática    → /26 → 64 direcciones
Dirección      → /26 → 64 direcciones

TOTAL → 256 direcciones
```

No queda espacio disponible.

---

### VLSM

```text
Administración → /26 → 64 direcciones
Ventas         → /27 → 32 direcciones
Informática    → /28 → 16 direcciones
Dirección      → /29 →  8 direcciones

TOTAL → 120 direcciones
```

Quedan:

```text
136 direcciones sin asignar
```

<figure class="figura-libro">
  <img
    src="../../assets/images/parte3/capitulo11/figura11_17.png"
    alt="Comparación del aprovechamiento del direccionamiento IPv4 utilizando FLSM y VLSM"
  >
  <figcaption>
    <strong>Figura 11.17.</strong> Comparación del mismo problema utilizando FLSM y VLSM. Con FLSM las cuatro subredes deben tener el tamaño exigido por el departamento más grande y ocupan las 256 direcciones de la red /24. Con VLSM cada subred se adapta a sus necesidades y solamente se reservan 120 direcciones, quedando 136 disponibles para futuras asignaciones.
  </figcaption>
</figure>

---

## La segunda regla fundamental de VLSM

Además de ordenar las necesidades de mayor a menor, debemos recordar:

> **Cada nueva subred debe comenzar en una dirección válida para su máscara y nunca puede solaparse con una subred ya asignada.**

En nuestro ejemplo:

```text
192.168.50.0/26
```

termina en:

```text
192.168.50.63
```

Por tanto, comenzamos la siguiente en:

```text
192.168.50.64
```

Después:

```text
192.168.50.64/27
```

termina en `.95`.

La siguiente empieza en `.96`.

Y continuamos de esta forma.

---

## Procedimiento completo para resolver VLSM

Cuando tengamos que realizar un diseño VLSM podemos seguir estos pasos.

### 1. Anotar la red disponible

```text
192.168.50.0/24
```

### 2. Anotar las necesidades de hosts

```text
50
25
12
6
```

### 3. Ordenarlas de mayor a menor

```text
50 → 25 → 12 → 6
```

### 4. Buscar la máscara más pequeña que permita cada cantidad

```text
50 → /26 → 62 hosts
25 → /27 → 30 hosts
12 → /28 → 14 hosts
 6 → /29 →  6 hosts
```

### 5. Asignar primero la subred más grande

```text
192.168.50.0/26
```

### 6. Continuar desde la siguiente dirección disponible

```text
192.168.50.64/27
192.168.50.96/28
192.168.50.112/29
```

### 7. Comprobar que no existen solapamientos

Cada bloque debe ocupar un intervalo independiente.

### 8. Elaborar la tabla de direccionamiento

Incluiremos:

- departamento;
- hosts necesarios;
- prefijo;
- máscara;
- dirección de red;
- primer host;
- último host;
- broadcast.

<figure class="figura-libro">
  <img
    src="../../assets/images/parte3/capitulo11/figura11_15.png"
    alt="Procedimiento paso a paso para diseñar una red IPv4 utilizando VLSM"
  >
  <figcaption>
    <strong>Figura 11.15.</strong> Procedimiento para diseñar una red mediante VLSM. Las necesidades de hosts se ordenan de mayor a menor, se selecciona para cada grupo la máscara más pequeña que proporcione capacidad suficiente y las subredes se asignan progresivamente comprobando que sus intervalos no se solapen.
  </figcaption>
</figure>

---

## Una tabla muy útil para VLSM

Durante los ejercicios podemos utilizar esta referencia:

| Hosts necesarios | Prefijo mínimo | Hosts disponibles |
|-----------------:|:--------------:|------------------:|
| 1–2 | `/30` | 2 |
| 3–6 | `/29` | 6 |
| 7–14 | `/28` | 14 |
| 15–30 | `/27` | 30 |
| 31–62 | `/26` | 62 |
| 63–126 | `/25` | 126 |
| 127–254 | `/24` | 254 |

Por ejemplo:

```text
Necesito 20 hosts
```

Buscamos el intervalo:

```text
15 - 30
```

Por tanto:

```text
20 hosts → /27
```

Otro ejemplo:

```text
Necesito 8 hosts
```

Tenemos:

```text
/29 → 6 hosts   ❌
/28 → 14 hosts  ✅
```

Por tanto:

```text
8 hosts → /28
```

---

!!! note "Recuerda"

    **VLSM permite utilizar máscaras diferentes dentro de un mismo plan de direccionamiento.**

    Esto permite adaptar el tamaño de cada subred al número de hosts que realmente necesita.

!!! tip "La regla más importante"

    En VLSM:

    ```text
    1.º Ordena de mayor a menor.
    2.º Asigna primero la subred más grande.
    3.º Continúa con las más pequeñas.
    ```

    Seguir este orden facilita enormemente el diseño.

!!! warning "No confundas direcciones libres con una subred"

    Que las direcciones `192.168.50.120` a `192.168.50.255` estén todavía disponibles no significa que formen automáticamente una única subred.

    Las futuras subredes deberán crearse respetando los límites correspondientes a cada máscara.

!!! question "Comprueba que lo has entendido"

    Dispones de:

    ```text
    192.168.100.0/24
    ```

    y necesitas crear subredes para:

    ```text
    Aula A         → 60 hosts
    Aula B         → 28 hosts
    Profesores     → 12 hosts
    Administración → 5 hosts
    ```

    Responde:

    1. ¿En qué orden debes asignar las subredes?
    2. ¿Qué prefijo necesita cada grupo?
    3. ¿Cuál será la dirección de red de cada subred?
    4. ¿Cuál será su broadcast?
    5. ¿Qué rango de hosts tendrá cada una?
    6. ¿Cuál será la primera dirección que quedará disponible después de realizar las cuatro asignaciones?

!!! abstract "🛠️ A continuación..."

    Ya sabemos realizar subnetting utilizando máscaras fijas y variables. En el siguiente apartado compararemos **FLSM y VLSM** sobre un mismo problema para aprender a decidir qué método resulta más adecuado en cada situación.

## 11.9 FLSM frente a VLSM

En los apartados anteriores hemos aprendido dos formas diferentes de dividir una red IPv4 en subredes:

- **FLSM**, donde todas las subredes utilizan la misma máscara.
- **VLSM**, donde cada subred puede utilizar una máscara diferente.

Ambos métodos son correctos.

La elección dependerá de las necesidades de la red que queremos diseñar.

---

### La idea principal

Podemos resumir la diferencia de una forma muy sencilla:

```text
FLSM
→ Todas las subredes tienen el mismo tamaño.

VLSM
→ Cada subred puede tener un tamaño diferente.
```

Esto tiene consecuencias importantes sobre la simplicidad del diseño y el aprovechamiento del espacio de direccionamiento.

---

### Comparación general

| Característica | FLSM | VLSM |
|---------------|------|------|
| Máscara utilizada | La misma en todas las subredes | Puede ser diferente en cada subred |
| Tamaño de las subredes | Igual | Variable |
| Facilidad de cálculo | Mayor | Menor |
| Aprovechamiento de direcciones | Menor cuando los grupos tienen tamaños diferentes | Mayor |
| Riesgo de desperdiciar direcciones | Alto | Bajo |
| Orden de asignación | No es especialmente relevante | Debe realizarse de mayor a menor |
| Posibilidad de crecimiento | Menos flexible | Más flexible |
| Dificultad de planificación | Baja | Media |

---

### Cuándo resulta útil FLSM

FLSM funciona especialmente bien cuando todas las redes necesitan un número parecido de hosts.

Por ejemplo:

```text
Departamento A → 45 hosts
Departamento B → 42 hosts
Departamento C → 40 hosts
Departamento D → 38 hosts
```

En este caso podemos utilizar cuatro subredes `/26`:

```text
/26 → 62 hosts utilizables
```

El desperdicio de direcciones será relativamente pequeño y el diseño resultará muy sencillo.

Podemos pensar en FLSM como una solución basada en:

> **simplicidad y uniformidad.**

---

### Cuándo resulta útil VLSM

VLSM resulta especialmente útil cuando las necesidades son muy diferentes.

Por ejemplo:

```text
Departamento A → 50 hosts
Departamento B → 25 hosts
Departamento C → 12 hosts
Departamento D → 6 hosts
```

Si utilizamos FLSM, todas las redes necesitarían `/26`.

Sin embargo, con VLSM podemos asignar:

```text
50 hosts → /26
25 hosts → /27
12 hosts → /28
 6 hosts → /29
```

El direccionamiento se adapta mucho mejor a la realidad de la organización.

Podemos considerar VLSM como una solución basada en:

> **eficiencia y flexibilidad.**

---

## Un mismo problema, dos soluciones

Volvamos al ejemplo:

```text
Red disponible: 192.168.50.0/24
```

Necesidades:

| Departamento | Hosts |
|-------------|------:|
| Administración | 50 |
| Ventas | 25 |
| Informática | 12 |
| Dirección | 6 |

---

### Solución FLSM

El grupo más grande necesita:

```text
50 hosts
```

Por tanto, la máscara mínima es:

```text
/26 → 62 hosts
```

Como FLSM obliga a utilizar la misma máscara:

```text
Administración → /26
Ventas         → /26
Informática    → /26
Dirección      → /26
```

Tenemos:

```text
4 × 64 = 256 direcciones reservadas
```

Se utiliza toda la red `/24`.

---

### Solución VLSM

Con VLSM utilizamos:

```text
Administración → /26 → 64 direcciones
Ventas         → /27 → 32 direcciones
Informática    → /28 → 16 direcciones
Dirección      → /29 →  8 direcciones
```

En total:

```text
64 + 32 + 16 + 8 = 120 direcciones reservadas
```

Quedan todavía:

```text
256 - 120 = 136 direcciones
```

sin asignar.

---

### La diferencia

Podemos resumir:

| Método | Direcciones reservadas | Direcciones sin asignar |
|--------|-----------------------:|-------------------------:|
| FLSM | 256 | 0 |
| VLSM | 120 | 136 |

En este ejemplo VLSM permite conservar una parte muy importante del espacio de direccionamiento para futuras ampliaciones.

---

## ¿Significa esto que VLSM siempre es mejor?

No necesariamente.

VLSM aprovecha mejor las direcciones, pero requiere:

- más planificación;
- más atención durante los cálculos;
- comprobar cuidadosamente los límites de cada bloque;
- evitar solapamientos;
- documentar correctamente el plan de direccionamiento.

FLSM, en cambio, es más sencillo de entender, calcular y mantener.

Por tanto, la elección debe realizarse según las necesidades concretas de la red.

---

### Un criterio sencillo para decidir

Podemos utilizar esta regla:

```text
¿Los grupos tienen tamaños parecidos?

        ↓

       SÍ
        ↓
      FLSM
```

Si ocurre lo contrario:

```text
¿Los grupos tienen tamaños muy diferentes?

        ↓

       SÍ
        ↓
      VLSM
```

No es una regla absoluta, pero resulta muy útil para comenzar a tomar decisiones.

---

## Ejemplo 1. ¿FLSM o VLSM?

Una empresa necesita cuatro redes:

```text
Red A → 55 hosts
Red B → 50 hosts
Red C → 48 hosts
Red D → 45 hosts
```

Las necesidades son bastante similares.

Una `/26` proporciona:

```text
62 hosts
```

Por tanto, utilizar:

```text
4 × /26
```

es una solución sencilla y razonable.

En este caso:

> **FLSM puede ser una buena elección.**

---

## Ejemplo 2. ¿FLSM o VLSM?

Otra empresa necesita:

```text
Red A → 60 hosts
Red B → 28 hosts
Red C → 13 hosts
Red D → 5 hosts
```

Los tamaños son muy diferentes.

Con FLSM todas necesitarían `/26`.

Sin embargo, VLSM permite:

```text
60 → /26
28 → /27
13 → /28
 5 → /29
```

Aquí:

> **VLSM aprovecha mucho mejor el direccionamiento.**

---

## Un aspecto fundamental: documentar el diseño

Independientemente de utilizar FLSM o VLSM, un técnico debe documentar correctamente las subredes creadas.

Una tabla de direccionamiento debería incluir al menos:

| Red o departamento | Hosts necesarios | Dirección de red | Prefijo | Máscara | Primer host | Último host | Broadcast |
|--------------------|------------------:|------------------|:-------:|---------|-------------|-------------|-----------|

Esta documentación será fundamental para:

- configurar los dispositivos;
- detectar errores;
- realizar ampliaciones;
- evitar direcciones duplicadas;
- comprobar posibles solapamientos.

---

!!! note "Recuerda"

    **FLSM** utiliza una única máscara para todas las subredes.

    **VLSM** permite utilizar máscaras diferentes para adaptar el tamaño de cada subred a sus necesidades reales.

!!! tip "Criterio rápido"

    Si las necesidades de hosts son parecidas:

    ```text
    FLSM
    ```

    puede ser suficiente.

    Si son muy diferentes:

    ```text
    VLSM
    ```

    suele aprovechar mejor las direcciones disponibles.

!!! warning "La eficiencia no es el único criterio"

    Un diseño más eficiente también puede ser más complejo de administrar.

    El objetivo no es utilizar siempre la subred más pequeña posible, sino diseñar una red clara, válida y adaptada a las necesidades de la organización.

!!! question "Elige el método"

    Dispones de:

    ```text
    192.168.80.0/24
    ```

    y debes diseñar redes para:

    ```text
    Producción     → 55 hosts
    Administración → 52 hosts
    Almacén        → 50 hosts
    Dirección      → 48 hosts
    ```

    1. ¿Utilizarías FLSM o VLSM?
    2. ¿Qué máscara utilizarías?
    3. ¿Por qué?

    Ahora compara con:

    ```text
    Producción     → 55 hosts
    Administración → 25 hosts
    Almacén        → 12 hosts
    Dirección      → 5 hosts
    ```

    ¿Cambiarías de método? Justifica tu respuesta.

!!! abstract "🛠️ En el siguiente apartado..."

    Ya conocemos FLSM y VLSM. A continuación utilizaremos todo lo aprendido para elaborar un **plan completo de direccionamiento IPv4**, desde los requisitos iniciales hasta la tabla final de subredes.

## 11.10 Planificación completa del direccionamiento IPv4

Hasta ahora hemos aprendido a realizar los cálculos necesarios para dividir una red:

- interpretar máscaras y prefijos CIDR;
- calcular el número de subredes;
- determinar el número de hosts;
- utilizar el método del salto;
- calcular direcciones de red y broadcast;
- diseñar redes mediante FLSM;
- optimizar el direccionamiento mediante VLSM.

Sin embargo, en una instalación real normalmente no recibiremos un ejercicio que diga:

> Calcula cuatro subredes `/26`.

Lo habitual será recibir una serie de **necesidades** y tener que transformarlas en un plan de direccionamiento.

Ese será nuestro trabajo en este apartado.

---

## Del problema al plan de direccionamiento

Supongamos que debemos diseñar la red de una pequeña empresa.

Disponemos de:

```text
192.168.100.0/24
```

La empresa tiene las siguientes necesidades:

| Área | Hosts necesarios |
|------|-----------------:|
| Oficina | 50 |
| Taller | 25 |
| Administración | 12 |
| Dirección | 6 |

Además, queremos dejar espacio disponible para futuras ampliaciones.

Nuestra misión será convertir estos requisitos en un **plan completo de direccionamiento IPv4**.

---

## Paso 1. Analizar los requisitos

Antes de calcular nada debemos responder algunas preguntas:

```text
¿Qué red tenemos disponible?

¿Cuántas redes diferentes necesitamos?

¿Cuántos hosts necesita cada una?

¿Las necesidades son similares o muy diferentes?

¿Necesitamos reservar espacio para futuras ampliaciones?
```

En nuestro caso:

```text
Red disponible:
192.168.100.0/24

Subredes necesarias:
4

Hosts:
50
25
12
6
```

Las necesidades son muy diferentes.

Por tanto, utilizar una única máscara para todas las subredes desperdiciaría muchas direcciones.

Elegiremos:

```text
VLSM
```

---

## Paso 2. Ordenar las necesidades

En VLSM debemos comenzar siempre por la red de mayor tamaño.

Ordenamos:

```text
Oficina        → 50 hosts
Taller         → 25 hosts
Administración → 12 hosts
Dirección      →  6 hosts
```

En este caso ya estaban ordenadas.

---

## Paso 3. Determinar el prefijo de cada red

Buscamos la máscara más pequeña que pueda satisfacer cada necesidad.

### Oficina

Necesitamos:

```text
50 hosts
```

Sabemos que:

```text
/27 → 30 hosts  ❌
/26 → 62 hosts  ✅
```

Por tanto:

```text
Oficina → /26
```

---

### Taller

Necesitamos:

```text
25 hosts
```

Tenemos:

```text
/28 → 14 hosts  ❌
/27 → 30 hosts  ✅
```

Por tanto:

```text
Taller → /27
```

---

### Administración

Necesitamos:

```text
12 hosts
```

Tenemos:

```text
/29 → 6 hosts   ❌
/28 → 14 hosts  ✅
```

Por tanto:

```text
Administración → /28
```

---

### Dirección

Necesitamos:

```text
6 hosts
```

Una `/29` proporciona:

```text
6 hosts utilizables
```

Por tanto:

```text
Dirección → /29
```

Nuestro diseño necesita:

```text
Oficina        → /26
Taller         → /27
Administración → /28
Dirección      → /29
```

---

## Paso 4. Asignar las subredes

Comenzamos por la primera dirección disponible:

```text
192.168.100.0
```

### Oficina

Asignamos:

```text
192.168.100.0/26
```

Una `/26` contiene 64 direcciones.

Por tanto:

```text
Red:          192.168.100.0
Primer host:  192.168.100.1
Último host:  192.168.100.62
Broadcast:    192.168.100.63
```

La siguiente dirección disponible es:

```text
192.168.100.64
```

---

### Taller

Necesita una `/27`.

Asignamos:

```text
192.168.100.64/27
```

Una `/27` contiene 32 direcciones:

```text
Red:          192.168.100.64
Primer host:  192.168.100.65
Último host:  192.168.100.94
Broadcast:    192.168.100.95
```

La siguiente dirección disponible es:

```text
192.168.100.96
```

---

### Administración

Necesita una `/28`.

Asignamos:

```text
192.168.100.96/28
```

Una `/28` contiene 16 direcciones:

```text
Red:          192.168.100.96
Primer host:  192.168.100.97
Último host:  192.168.100.110
Broadcast:    192.168.100.111
```

La siguiente dirección disponible es:

```text
192.168.100.112
```

---

### Dirección

Necesita una `/29`.

Asignamos:

```text
192.168.100.112/29
```

Una `/29` contiene 8 direcciones:

```text
Red:          192.168.100.112
Primer host:  192.168.100.113
Último host:  192.168.100.118
Broadcast:    192.168.100.119
```

La siguiente dirección disponible será:

```text
192.168.100.120
```

---

## Paso 5. Construir la tabla de direccionamiento

Ahora reunimos toda la información en una única tabla.

| Área | Hosts necesarios | Red | Prefijo | Máscara | Primer host | Último host | Broadcast |
|------|-----------------:|-----|:-------:|---------|-------------|-------------|-----------|
| Oficina | 50 | `192.168.100.0` | `/26` | `255.255.255.192` | `192.168.100.1` | `192.168.100.62` | `192.168.100.63` |
| Taller | 25 | `192.168.100.64` | `/27` | `255.255.255.224` | `192.168.100.65` | `192.168.100.94` | `192.168.100.95` |
| Administración | 12 | `192.168.100.96` | `/28` | `255.255.255.240` | `192.168.100.97` | `192.168.100.110` | `192.168.100.111` |
| Dirección | 6 | `192.168.100.112` | `/29` | `255.255.255.248` | `192.168.100.113` | `192.168.100.118` | `192.168.100.119` |

Esta tabla constituye la base de nuestro **plan de direccionamiento**.

---

## Paso 6. Reservar direcciones para los dispositivos de red

Hasta ahora hemos calculado los rangos disponibles, pero todavía debemos decidir qué direcciones asignaremos a los dispositivos.

Una práctica habitual consiste en utilizar una dirección fácilmente identificable para la puerta de enlace.

Por ejemplo, podemos reservar el **primer host disponible de cada subred** para la interfaz del router o dispositivo de capa 3 que actúe como gateway.

Nuestro plan podría quedar:

| Área | Red | Gateway | Hosts disponibles para equipos | Broadcast |
|------|-----|---------|-------------------------------|-----------|
| Oficina | `192.168.100.0/26` | `192.168.100.1` | `192.168.100.2 - 192.168.100.62` | `192.168.100.63` |
| Taller | `192.168.100.64/27` | `192.168.100.65` | `192.168.100.66 - 192.168.100.94` | `192.168.100.95` |
| Administración | `192.168.100.96/28` | `192.168.100.97` | `192.168.100.98 - 192.168.100.110` | `192.168.100.111` |
| Dirección | `192.168.100.112/29` | `192.168.100.113` | `192.168.100.114 - 192.168.100.118` | `192.168.100.119` |

<figure class="figura-libro">
  <img
    src="../../assets/images/parte3/capitulo11/figura11_19.png"
    alt="Plan completo de direccionamiento VLSM de la red 192.168.100.0/24"
  >
  <figcaption>
    <strong>Figura 11.19.</strong> Plan de direccionamiento de la red 192.168.100.0/24 mediante VLSM. Las subredes se dimensionan según las necesidades de Oficina, Taller, Administración y Dirección, reservando el primer host de cada una como gateway y manteniendo parte del espacio disponible para futuras ampliaciones.
  </figcaption>
</figure>

!!! note "La dirección del gateway no es obligatoriamente la primera"

    Utilizar el primer host como puerta de enlace es una **convención de diseño**, no una obligación del protocolo IPv4.

    También podríamos utilizar otra dirección válida de la subred.

    Lo importante es establecer un criterio y documentarlo.

---

## Paso 7. Identificar el espacio todavía disponible

Hemos utilizado los siguientes bloques:

```text
0   - 63
64  - 95
96  - 111
112 - 119
```

Por tanto, las direcciones desde:

```text
192.168.100.120
```

hasta:

```text
192.168.100.255
```

todavía no han sido asignadas.

Tenemos:

```text
256 - 120 = 136 direcciones
```

sin asignar.

Esto permitirá crear nuevas subredes en el futuro.

---

### Pero recuerda: espacio libre no significa una única subred

No debemos escribir:

```text
192.168.100.120 - 192.168.100.255
= nueva subred
```

El intervalo está **disponible**, pero las futuras subredes deberán respetar los límites correspondientes a sus máscaras.

Por ejemplo, si posteriormente necesitamos una red para 20 hosts, necesitaremos:

```text
/27
```

Una `/27` utiliza bloques de 32 direcciones cuyos comienzos válidos en el último octeto son:

```text
0, 32, 64, 96, 128, 160, 192 y 224
```

Por tanto, aunque `.120` sea la primera dirección actualmente libre, **no podemos comenzar una `/27` en `.120`**.

El primer comienzo `/27` válido que no invade ninguna subred existente sería:

```text
192.168.100.128/27
```

Este detalle es fundamental cuando ampliamos un diseño VLSM.

---

## Paso 8. Comprobar el plan

Antes de considerar terminado el diseño debemos realizar varias comprobaciones.

### ¿Cada red tiene suficientes hosts?

```text
Oficina        → necesita 50 → dispone de 62  ✅
Taller         → necesita 25 → dispone de 30  ✅
Administración → necesita 12 → dispone de 14  ✅
Dirección      → necesita  6 → dispone de  6  ✅
```

---

### ¿Las direcciones de red son válidas?

```text
192.168.100.0/26    ✅
192.168.100.64/27   ✅
192.168.100.96/28   ✅
192.168.100.112/29  ✅
```

---

### ¿Existe algún solapamiento?

Los bloques utilizados son:

```text
0   - 63
64  - 95
96  - 111
112 - 119
```

No existe ninguna dirección compartida.

```text
Sin solapamientos ✅
```

---

### ¿Se han reservado red y broadcast?

Sí.

Ninguna dirección de red ni de broadcast será asignada a un dispositivo.

```text
Direcciones reservadas correctamente ✅
```

---

## Paso 9. Documentar antes de configurar

Una buena práctica consiste en completar el plan de direccionamiento **antes de comenzar a configurar los equipos**.

El orden debería ser:

```text
Analizar requisitos
        ↓
Diseñar subredes
        ↓
Calcular rangos
        ↓
Asignar gateways
        ↓
Comprobar el diseño
        ↓
Documentar
        ↓
Configurar dispositivos
        ↓
Comprobar conectividad
```

Configurar primero y documentar después suele aumentar la posibilidad de cometer errores.

<figure class="figura-libro">
  <img
    src="../../assets/images/parte3/capitulo11/figura11_18.png"
    alt="Proceso completo para elaborar un plan de direccionamiento IPv4"
  >
  <figcaption>
    <strong>Figura 11.18.</strong> Proceso completo para elaborar un plan de direccionamiento IPv4, desde el análisis inicial de los requisitos hasta la configuración de la red. Antes de configurar los dispositivos deben calcularse, asignarse, comprobarse y documentarse todas las subredes.
  </figcaption>
</figure>

---

## Del plan a los dispositivos

Una vez terminado el direccionamiento podremos configurar cada equipo.

Por ejemplo, un ordenador de Oficina podría utilizar:

```text
Dirección IP:      192.168.100.10
Máscara:           255.255.255.192
Gateway:           192.168.100.1
```

Un equipo del Taller podría utilizar:

```text
Dirección IP:      192.168.100.70
Máscara:           255.255.255.224
Gateway:           192.168.100.65
```

Aunque ambas direcciones comienzan por:

```text
192.168.100
```

pertenecen a **subredes diferentes**.

Este es precisamente uno de los efectos fundamentales del subnetting.

---

## Errores que debemos comprobar

Antes de aplicar nuestro plan debemos buscar especialmente estos errores:

### Dirección de red asignada a un host

Incorrecto:

```text
IP: 192.168.100.64
Máscara: /27
```

`.64` identifica la propia subred.

---

### Broadcast asignado a un host

Incorrecto:

```text
IP: 192.168.100.95
Máscara: /27
```

`.95` es el broadcast de esa subred.

---

### Máscara incorrecta

Un equipo de Taller debería utilizar:

```text
/27
```

No debemos configurarlo accidentalmente como:

```text
/24
```

porque interpretaría de forma diferente qué direcciones considera locales.

---

### Gateway fuera de la subred

Si tenemos:

```text
IP:      192.168.100.70
Máscara: /27
```

pertenecemos al bloque:

```text
192.168.100.64 - 192.168.100.95
```

Por tanto, un gateway como:

```text
192.168.100.1
```

no pertenece a esta subred.

El gateway debe tener una dirección válida dentro de la misma subred del host.

---

## Lista de comprobación

Antes de dar por terminado un plan de direccionamiento podemos utilizar esta lista:

```text
☐ He identificado todas las redes necesarias.

☐ He anotado los hosts necesarios en cada red.

☐ He seleccionado FLSM o VLSM.

☐ Las máscaras proporcionan suficientes hosts.

☐ Todas las direcciones de red son válidas.

☐ He calculado el primer y último host.

☐ He calculado correctamente el broadcast.

☐ No existen subredes solapadas.

☐ He reservado una dirección para cada gateway.

☐ Los gateways pertenecen a sus respectivas subredes.

☐ He documentado las direcciones disponibles.

☐ He reservado espacio para futuras ampliaciones cuando sea necesario.
```

Si todas las comprobaciones son correctas, el plan está preparado para ser implementado.

---

!!! note "Un plan de direccionamiento es documentación técnica"

    El resultado del subnetting no debe quedarse únicamente en una serie de cálculos.

    La tabla final será un documento de referencia para configurar, mantener y ampliar la red.

!!! tip "Diseña antes de configurar"

    Sigue siempre este orden:

    ```text
    REQUISITOS
        ↓
    CÁLCULOS
        ↓
    TABLA DE DIRECCIONAMIENTO
        ↓
    COMPROBACIÓN
        ↓
    CONFIGURACIÓN
    ```

    Evitarás muchos errores durante la instalación.

!!! warning "Primera dirección libre ≠ comienzo de cualquier subred"

    En VLSM una nueva subred debe comenzar en una dirección válida para su máscara.

    Aunque `192.168.100.120` esté libre, no podemos crear:

    ```text
    192.168.100.120/27
    ```

    porque `.120` no es un comienzo válido para una `/27`.

!!! question "Diseña tu propio plan"

    Dispones de:

    ```text
    192.168.200.0/24
    ```

    y necesitas:

    ```text
    Alumnos        → 60 hosts
    Profesores     → 25 hosts
    Administración → 10 hosts
    Impresoras     → 5 hosts
    ```

    Diseña un plan completo indicando:

    1. El método que utilizarías: FLSM o VLSM.
    2. El prefijo de cada subred.
    3. La dirección de red.
    4. La máscara decimal.
    5. El primer host.
    6. El último host.
    7. El broadcast.
    8. Una dirección para el gateway.
    9. El espacio que quedaría disponible para futuras ampliaciones.

!!! abstract "🛠️ A continuación..."

    Ya sabemos diseñar y documentar un plan completo de direccionamiento IPv4. En el siguiente apartado llevaremos estos cálculos a una **topología de red**, asignando las subredes a routers, switches y equipos finales antes de comprobar su funcionamiento.

## 11.11 Aplicación del direccionamiento a una topología de red

Hasta ahora hemos trabajado principalmente con tablas y rangos de direcciones.

Sin embargo, las direcciones IP no existen de forma aislada.

Finalmente tendremos que asignarlas a:

- routers;
- switches, cuando necesiten una dirección de gestión;
- servidores;
- ordenadores;
- impresoras;
- puntos de acceso;
- cámaras IP;
- y cualquier otro dispositivo conectado a la red.

Vamos a trasladar nuestro plan de direccionamiento a una topología real.

---

## Partimos del plan anterior

En el apartado anterior diseñamos las siguientes subredes:

| Área | Subred | Máscara | Gateway |
|------|--------|---------|---------|
| Oficina | `192.168.100.0/26` | `255.255.255.192` | `192.168.100.1` |
| Taller | `192.168.100.64/27` | `255.255.255.224` | `192.168.100.65` |
| Administración | `192.168.100.96/28` | `255.255.255.240` | `192.168.100.97` |
| Dirección | `192.168.100.112/29` | `255.255.255.248` | `192.168.100.113` |

Ahora debemos aplicar estas direcciones a los dispositivos de nuestra red.

---

## Una topología con cuatro redes

Podemos imaginar una empresa organizada de la siguiente forma:

```text
                       ROUTER
                         │
          ┌──────────────┼──────────────┐
          │              │              │
          │              │              │
       OFICINA         TALLER     ADMINISTRACIÓN
          │              │              │
        Switch          Switch         Switch
          │              │              │
       Equipos         Equipos        Equipos

                         │
                     DIRECCIÓN
                         │
                       Switch
                         │
                       Equipos
```

Cada área constituye una **subred IP diferente**.

Por tanto, aunque todos los equipos formen parte de la misma organización, no todos pertenecen a la misma red lógica.

---

## El router conecta las subredes

Los equipos pertenecientes a una misma subred pueden comunicarse directamente entre ellos.

Por ejemplo:

```text
PC1 → 192.168.100.10/26
PC2 → 192.168.100.20/26
```

Ambos pertenecen a:

```text
192.168.100.0/26
```

Por tanto, forman parte de la misma subred.

Pero observemos:

```text
PC Oficina → 192.168.100.10/26
PC Taller  → 192.168.100.70/27
```

El primero pertenece a:

```text
192.168.100.0/26
```

y el segundo a:

```text
192.168.100.64/27
```

Son subredes diferentes.

Para comunicarse necesitarán un dispositivo capaz de **encaminar tráfico entre ambas redes**.

En nuestra topología esa función corresponde al router.

---

## La puerta de enlace

Cada subred dispone de una dirección que utilizaremos como **puerta de enlace predeterminada** o *default gateway*.

En nuestro diseño hemos reservado el primer host de cada subred:

```text
Oficina        → 192.168.100.1
Taller         → 192.168.100.65
Administración → 192.168.100.97
Dirección      → 192.168.100.113
```

Estas direcciones estarán configuradas en las interfaces del dispositivo encargado del encaminamiento.

Podemos representarlo así:

```text
                         ROUTER
                            │
       ┌────────────────────┼────────────────────┐
       │                    │                    │
192.168.100.1        192.168.100.65       192.168.100.97
     /26                   /27                   /28
       │                    │                    │
   OFICINA               TALLER          ADMINISTRACIÓN

                            │
                    192.168.100.113
                          /29
                            │
                       DIRECCIÓN
```

Cada interfaz debe pertenecer a la misma subred que los equipos que utilizarán esa dirección como gateway.

<figure class="figura-libro">
  <img
    src="../../assets/images/parte3/capitulo11/figura11_20.png"
    alt="Aplicación del plan de direccionamiento IPv4 a una topología formada por cuatro subredes conectadas mediante un router"
  >
  <figcaption>
    <strong>Figura 11.20.</strong> Aplicación del plan de direccionamiento a una topología de red. El router conecta las subredes de Oficina, Taller, Administración y Dirección, utilizando en cada una una interfaz perteneciente a la propia subred que actúa como puerta de enlace de sus equipos.
  </figcaption>
</figure>

---

## Configuración de un equipo de Oficina

Supongamos que queremos configurar el primer ordenador de Oficina.

Podríamos utilizar:

```text
Dirección IP:  192.168.100.10
Máscara:       255.255.255.192
Gateway:       192.168.100.1
```

La máscara `/26` indica que el equipo pertenece a:

```text
192.168.100.0/26
```

Su rango válido es:

```text
192.168.100.1 - 192.168.100.62
```

y su broadcast:

```text
192.168.100.63
```

La configuración es válida.

---

## Configuración de un equipo del Taller

Ahora configuramos un equipo del Taller:

```text
Dirección IP:  192.168.100.70
Máscara:       255.255.255.224
Gateway:       192.168.100.65
```

La máscara `/27` sitúa al equipo dentro de:

```text
192.168.100.64/27
```

cuyo rango de hosts es:

```text
192.168.100.65 - 192.168.100.94
```

y cuyo broadcast es:

```text
192.168.100.95
```

También es una configuración válida.

---

## ¿Qué ocurre cuando PC1 quiere comunicarse con otro equipo?

Supongamos:

```text
PC1
192.168.100.10/26
```

quiere comunicarse con:

```text
PC2
192.168.100.20/26
```

Ambos pertenecen a la misma subred:

```text
192.168.100.0/26
```

Por tanto, PC1 determina que el destino es **local**.

De forma simplificada:

```text
PC1
 │
 │ destino en mi subred
 ↓
Switch
 │
 ↓
PC2
```

No necesita enviar ese tráfico al gateway para alcanzar a PC2.

---

## ¿Y si el destino pertenece a otra subred?

Ahora PC1 quiere comunicarse con:

```text
PC Taller
192.168.100.70/27
```

PC1 utiliza su propia máscara `/26` para comprobar si `192.168.100.70` pertenece a su red local.

Su red es:

```text
192.168.100.0/26
```

que comprende:

```text
192.168.100.0 - 192.168.100.63
```

La dirección:

```text
192.168.100.70
```

queda fuera de ese intervalo.

Por tanto, PC1 sabe que el destino **no pertenece a su subred**.

Enviará el tráfico a su gateway:

```text
192.168.100.1
```

De forma simplificada:

```text
PC Oficina
192.168.100.10
       │
       ↓
192.168.100.1
    GATEWAY
       │
       ↓
     ROUTER
       │
       ↓
192.168.100.65
       │
       ↓
PC Taller
192.168.100.70
```

El router será el encargado de hacer llegar el paquete a la red correspondiente.

<figure class="figura-libro">
  <img
    src="../../assets/images/parte3/capitulo11/figura11_21.png"
    alt="Comparación entre la comunicación de equipos de una misma subred y la comunicación entre subredes diferentes"
  >
  <figcaption>
    <strong>Figura 11.21.</strong> Comunicación dentro y fuera de una subred. Cuando origen y destino pertenecen a la misma subred, el tráfico puede enviarse directamente a través del switch. Cuando el destino pertenece a otra subred, el host entrega el tráfico a su gateway para que el router lo encamine hacia la red de destino.
  </figcaption>
</figure>

---

## La máscara es imprescindible

Observa que no basta con conocer la dirección IP.

Un dispositivo necesita su máscara para determinar qué parte de la dirección identifica la red.

Por ejemplo:

```text
192.168.100.70/27
```

pertenece a:

```text
192.168.100.64/27
```

Pero si configurásemos incorrectamente:

```text
192.168.100.70/24
```

el equipo interpretaría que pertenece a:

```text
192.168.100.0/24
```

Estaría interpretando la topología lógica de forma diferente a como la hemos diseñado.

Por eso:

> **Una dirección IP y su máscara deben considerarse conjuntamente.**

---

## El gateway debe pertenecer a la misma subred

Supongamos:

```text
IP:      192.168.100.70
Máscara: 255.255.255.224
```

El equipo pertenece a:

```text
192.168.100.64/27
```

Por tanto, el gateway debe utilizar una dirección válida dentro de esa misma subred.

Nuestro gateway:

```text
192.168.100.65
```

es correcto.

En cambio:

```text
Gateway: 192.168.100.1
```

sería incorrecto para este host, porque pertenece a otra subred.

---

## ¿Qué papel desempeña el switch?

Es importante no confundir las funciones del switch y del router.

De forma simplificada:

```text
SWITCH
↓
Conecta dispositivos dentro
de una red local.

ROUTER
↓
Permite comunicar
redes IP diferentes.
```

Por ejemplo:

```text
PC1 ─┐
PC2 ─┼── SWITCH ─── ROUTER ─── otras subredes
PC3 ─┘
```

Los equipos de una misma subred pueden estar conectados al mismo switch.

Cuando necesitan alcanzar otra subred, utilizarán el gateway.

---

## Una dirección para gestionar el switch

Un switch gestionable puede disponer también de una dirección IP.

Esa dirección permite realizar tareas de administración, por ejemplo:

- acceder a su interfaz de configuración;
- realizar pruebas de conectividad;
- supervisarlo;
- administrarlo remotamente.

Esta dirección debe formar parte del plan de direccionamiento.

Por ejemplo, en Oficina podríamos reservar:

```text
Gateway → 192.168.100.1
Switch  → 192.168.100.2
```

y comenzar a asignar los equipos desde:

```text
192.168.100.10
```

Esto demuestra por qué conviene **planificar las direcciones antes de configurar los dispositivos**.

---

## Ejemplo de tabla de dispositivos

Nuestro plan puede ampliarse incorporando direcciones concretas:

| Dispositivo | Área | Dirección IP | Máscara | Gateway |
|-------------|------|--------------|---------|---------|
| Router - Oficina | Oficina | `192.168.100.1` | `/26` | — |
| SW-Oficina | Oficina | `192.168.100.2` | `/26` | `192.168.100.1` |
| PC-OF-01 | Oficina | `192.168.100.10` | `/26` | `192.168.100.1` |
| PC-OF-02 | Oficina | `192.168.100.11` | `/26` | `192.168.100.1` |
| Router - Taller | Taller | `192.168.100.65` | `/27` | — |
| SW-Taller | Taller | `192.168.100.66` | `/27` | `192.168.100.65` |
| PC-TA-01 | Taller | `192.168.100.70` | `/27` | `192.168.100.65` |

La documentación puede crecer a medida que añadimos dispositivos.

---

## De la planificación a la configuración

Ahora podemos ver claramente la relación entre todos los conceptos estudiados:

```text
RED ORIGINAL
192.168.100.0/24
        ↓
SUBNETTING
        ↓
SUBREDES
        ↓
RANGOS DE DIRECCIONES
        ↓
GATEWAYS
        ↓
DISPOSITIVOS
        ↓
CONFIGURACIÓN IP
        ↓
COMUNICACIÓN
```

El subnetting no es simplemente un ejercicio matemático.

Su objetivo es proporcionar una estructura lógica que podamos aplicar posteriormente a una red real.

---

!!! note "Recuerda"

    Para configurar correctamente un host necesitamos conocer, como mínimo:

    ```text
    Dirección IP
    Máscara de subred
    ```

    Y si debe comunicarse con otras redes:

    ```text
    Gateway
    ```

!!! tip "Documenta también los dispositivos"

    Una vez diseñado el direccionamiento de las subredes, crea una segunda tabla para las direcciones concretas de routers, switches, servidores y otros dispositivos importantes.

    Esto facilitará enormemente la administración posterior.

!!! warning "Misma dirección inicial no significa misma red"

    Dos equipos pueden tener direcciones aparentemente muy parecidas y pertenecer a subredes diferentes.

    Por ejemplo:

    ```text
    192.168.100.60/26
    192.168.100.70/27
    ```

    pertenecen respectivamente a:

    ```text
    192.168.100.0/26
    192.168.100.64/27
    ```

    La máscara es imprescindible para interpretar correctamente una dirección IPv4.

!!! question "Analiza la topología"

    Un equipo tiene:

    ```text
    IP:      192.168.100.100
    Máscara: /28
    Gateway: 192.168.100.97
    ```

    Responde:

    1. ¿Cuál es su dirección de red?
    2. ¿Cuál es su broadcast?
    3. ¿Cuál es el rango de hosts?
    4. ¿Es válido el gateway?
    5. ¿Puede utilizar `192.168.100.113` como gateway?
    6. Si quiere comunicarse con `192.168.100.105`, ¿necesitará utilizar el router?
    7. ¿Y para comunicarse con `192.168.100.70`?

!!! abstract "🛠️ En el siguiente apartado..."

    Ya sabemos trasladar un plan de direccionamiento a los dispositivos de una topología. A continuación aprenderemos a **comprobar si dos direcciones IPv4 pertenecen a la misma subred**, una operación fundamental tanto para diseñar redes como para diagnosticar problemas de conectividad.

## 11.12 ¿Pertenecen dos direcciones IP a la misma subred?

Una de las preguntas más habituales al configurar o diagnosticar una red es:

> **¿Estos dos equipos pertenecen a la misma subred?**

Saber responderla es fundamental.

Si dos equipos pertenecen a la misma subred, pueden comunicarse directamente a través de la red local.

Si pertenecen a subredes diferentes, necesitarán un dispositivo que realice el encaminamiento entre ellas.

Para determinarlo no basta con observar las direcciones IP.

También debemos conocer la **máscara de subred**.

---

## Un primer ejemplo

Tenemos dos equipos:

```text
PC1 → 192.168.10.20/26
PC2 → 192.168.10.50/26
```

Sabemos que:

```text
/26 = 255.255.255.192
```

y que una `/26` tiene un salto de:

```text
256 - 192 = 64
```

Por tanto, dentro de `192.168.10.0/24` las subredes `/26` comienzan en:

```text
0
64
128
192
```

Los bloques son:

```text
0   - 63
64  - 127
128 - 191
192 - 255
```

Observamos ahora las dos direcciones:

```text
192.168.10.20
192.168.10.50
```

Los valores `20` y `50` se encuentran dentro del mismo bloque:

```text
0 - 63
```

Por tanto:

```text
PC1 → 192.168.10.0/26
PC2 → 192.168.10.0/26
```

Los dos equipos pertenecen a la **misma subred**.

---

## Segundo ejemplo

Tenemos ahora:

```text
PC1 → 192.168.10.20/26
PC2 → 192.168.10.70/26
```

Seguimos utilizando bloques de 64:

```text
0   - 63
64  - 127
128 - 191
192 - 255
```

La primera dirección:

```text
192.168.10.20
```

pertenece al bloque:

```text
0 - 63
```

Por tanto:

```text
Red de PC1 = 192.168.10.0/26
```

La segunda:

```text
192.168.10.70
```

pertenece al bloque:

```text
64 - 127
```

Por tanto:

```text
Red de PC2 = 192.168.10.64/26
```

Las direcciones de red son diferentes:

```text
192.168.10.0/26
192.168.10.64/26
```

Por tanto:

> **Los equipos pertenecen a subredes diferentes.**

Para comunicarse necesitarán encaminamiento entre ambas redes.

---

## El procedimiento

Para comprobar si dos direcciones pertenecen a la misma subred podemos seguir cuatro pasos.

### Paso 1. Anotar las direcciones y máscaras

Por ejemplo:

```text
192.168.10.25/27
192.168.10.50/27
```

### Paso 2. Calcular el salto

Sabemos:

```text
/27 = 255.255.255.224
```

Por tanto:

```text
256 - 224 = 32
```

El salto es:

```text
32
```

### Paso 3. Localizar cada dirección

Los bloques `/27` son:

```text
0   - 31
32  - 63
64  - 95
96  - 127
128 - 159
160 - 191
192 - 223
224 - 255
```

La dirección:

```text
192.168.10.25
```

pertenece a:

```text
192.168.10.0/27
```

Mientras que:

```text
192.168.10.50
```

pertenece a:

```text
192.168.10.32/27
```

### Paso 4. Comparar las direcciones de red

Tenemos:

```text
192.168.10.0/27
192.168.10.32/27
```

Son diferentes.

Por tanto:

```text
SUBREDES DIFERENTES
```

---

## La regla fundamental

Podemos resumir todo el procedimiento mediante una regla:

> **Dos direcciones pertenecen a la misma subred cuando, al aplicar la máscara correspondiente, obtenemos la misma dirección de red.**

De forma conceptual:

```text
IP A + máscara
      ↓
Dirección de red A

IP B + máscara
      ↓
Dirección de red B

¿Red A = Red B?

      │
   ┌──┴──┐
   │     │
  SÍ     NO
   │     │
Misma   Subredes
subred  diferentes
```
<figure class="figura-libro">
  <img
    src="../../assets/images/parte3/capitulo11/figura11_22.png"
    alt="Procedimiento para determinar si dos direcciones IPv4 pertenecen a la misma subred"
  >
  <figcaption>
    <strong>Figura 11.22.</strong> Procedimiento para determinar si dos direcciones IPv4 pertenecen a la misma subred. Se obtiene la dirección de red de cada equipo utilizando su dirección IP y su máscara y, posteriormente, se comparan ambos resultados.
  </figcaption>
</figure>

---

## La máscara puede cambiar completamente la respuesta

Observemos estas direcciones:

```text
192.168.10.50
192.168.10.70
```

A simple vista parecen muy próximas.

Pero no podemos saber si pertenecen a la misma subred sin conocer la máscara.

### Con /24

Tenemos:

```text
192.168.10.50/24
192.168.10.70/24
```

Ambas pertenecen a:

```text
192.168.10.0/24
```

Por tanto:

```text
MISMA SUBRED
```

### Con /26

Ahora:

```text
192.168.10.50/26
192.168.10.70/26
```

La primera pertenece a:

```text
192.168.10.0/26
```

y la segunda:

```text
192.168.10.64/26
```

Por tanto:

```text
SUBREDES DIFERENTES
```

Las direcciones IP no han cambiado.

Lo único que hemos cambiado es:

```text
LA MÁSCARA
```

y eso ha modificado completamente la interpretación de las direcciones.

<figure class="figura-libro">
  <img
    src="../../assets/images/parte3/capitulo11/figura11_23.png"
    alt="Comparación de dos direcciones IPv4 utilizando máscaras /24 y /26"
  >
  <figcaption>
    <strong>Figura 11.23.</strong> La máscara modifica la interpretación de una dirección IPv4. Las direcciones 192.168.10.50 y 192.168.10.70 pertenecen a la misma subred cuando se utiliza /24, pero quedan situadas en subredes diferentes cuando se utiliza /26.
  </figcaption>
</figure>

---

## No te fíes de los primeros octetos

Un error frecuente consiste en pensar:

```text
192.168.10.20
192.168.10.200
```

empiezan por:

```text
192.168.10
```

y por tanto pertenecen a la misma red.

Esto solo sería necesariamente cierto si estuviéramos utilizando una `/24`.

Con:

```text
/26
```

tenemos:

```text
192.168.10.20  → 192.168.10.0/26

192.168.10.200 → 192.168.10.192/26
```

Por tanto pertenecen a subredes diferentes.

> **Nunca determines la subred observando únicamente qué octetos parecen iguales.**

---

## ¿Y si las máscaras configuradas son diferentes?

Consideremos:

```text
PC1 → 192.168.10.50/26
PC2 → 192.168.10.70/24
```

Aquí debemos tener especial cuidado.

PC1 utiliza `/26`.

Desde su punto de vista:

```text
192.168.10.50 → red 192.168.10.0/26
```

y considera que `192.168.10.70` está fuera de su red local.

Por tanto, PC1 intentará utilizar su gateway para llegar a PC2.

PC2 utiliza `/24`.

Desde su punto de vista:

```text
192.168.10.70 → red 192.168.10.0/24
```

y considera que `192.168.10.50` está dentro de su propia red local.

Los dos equipos están interpretando la red de manera diferente.

Esto constituye una **configuración inconsistente** y puede provocar problemas de conectividad.

---

!!! warning "Las máscaras deben formar parte del diseño"

    No basta con asignar direcciones IP aparentemente correctas.

    Los dispositivos de una misma subred deben estar configurados de acuerdo con el plan de direccionamiento establecido.

    Una máscara incorrecta puede hacer que un equipo considere local una dirección que debería alcanzar mediante el router.

---

## Método mediante operación AND

Hasta ahora hemos utilizado el método del salto porque resulta muy rápido para las redes que estamos estudiando.

Sin embargo, existe un procedimiento general para determinar la dirección de red:

```text
Dirección IP
AND
Máscara de subred
=
Dirección de red
```

La operación **AND** se realiza bit a bit.

Su funcionamiento es:

| Bit A | Bit B | Resultado AND |
|:-----:|:-----:|:-------------:|
| 0 | 0 | 0 |
| 0 | 1 | 0 |
| 1 | 0 | 0 |
| 1 | 1 | 1 |

Solamente obtenemos:

```text
1
```

cuando los dos bits son `1`.

---

## Ejemplo de AND

Queremos determinar la red de:

```text
192.168.10.70/26
```

La máscara `/26` es:

```text
255.255.255.192
```

Como los tres primeros octetos de la máscara son `255`, podemos centrarnos en el último.

La dirección `70` en binario es:

```text
01000110
```

La máscara `192` es:

```text
11000000
```

Aplicamos AND:

```text
  01000110
AND
  11000000
-----------
  01000000
```

El resultado:

```text
01000000
```

en decimal es:

```text
64
```

Por tanto:

```text
192.168.10.70/26
```

pertenece a:

```text
192.168.10.64/26
```

Obtenemos exactamente el mismo resultado que mediante el método del salto.

<figure class="figura-libro">
  <img
    src="../../assets/images/parte3/capitulo11/figura11_24.png"
    alt="Obtención de una dirección de red IPv4 mediante la operación AND binaria"
  >
  <figcaption>
    <strong>Figura 11.24.</strong> Obtención de la dirección de red mediante una operación AND bit a bit. Al aplicar la máscara /26 al último octeto de 192.168.10.70 obtenemos el valor 64, por lo que la dirección pertenece a la subred 192.168.10.64/26.
  </figcaption>
</figure>

---

## ¿Qué método debemos utilizar?

Para los ejercicios de este capítulo, basados principalmente en redes `/24`, el método del salto suele ser más rápido:

```text
/26
↓
255.255.255.192
↓
256 - 192 = 64
↓
0 - 64 - 128 - 192
```

La operación AND, sin embargo, nos ayuda a comprender qué está haciendo realmente un dispositivo cuando utiliza una dirección IP y una máscara.

Ambos métodos conducen al mismo resultado.

---

## Ejemplo completo

Tenemos:

```text
Equipo A → 192.168.50.100/27
Equipo B → 192.168.50.120/27
```

Calculamos:

```text
/27 = 255.255.255.224
```

Salto:

```text
256 - 224 = 32
```

Subredes:

```text
0
32
64
96
128
160
192
224
```

El bloque que comienza en `.96` ocupa:

```text
96 - 127
```

Tanto:

```text
100
```

como:

```text
120
```

están dentro de ese intervalo.

Por tanto:

```text
Equipo A → 192.168.50.96/27
Equipo B → 192.168.50.96/27
```

Conclusión:

```text
MISMA SUBRED
```

Los dos equipos pueden comunicarse localmente sin utilizar el router para alcanzar al otro.

---

## Otro ejemplo

Tenemos:

```text
Equipo A → 192.168.50.120/27
Equipo B → 192.168.50.130/27
```

El primero pertenece al bloque:

```text
96 - 127
```

Por tanto:

```text
192.168.50.96/27
```

El segundo pertenece:

```text
128 - 159
```

Por tanto:

```text
192.168.50.128/27
```

Las direcciones de red son diferentes.

Conclusión:

```text
SUBREDES DIFERENTES
```

Para comunicarse necesitarán un dispositivo de encaminamiento.

---

## Procedimiento rápido para el examen

Cuando tengas dos direcciones y debas determinar si pertenecen a la misma subred:

```text
1. Mira el prefijo.

2. Obtén la máscara.

3. Calcula el salto.

4. Localiza la subred de la primera IP.

5. Localiza la subred de la segunda IP.

6. Compara las direcciones de red.
```

Finalmente:

```text
MISMA RED
    ↓
Comunicación local
```

o:

```text
RED DIFERENTE
    ↓
Necesita encaminamiento
```

---

!!! note "Recuerda"

    Dos equipos pertenecen a la misma subred cuando sus direcciones, interpretadas con la máscara correspondiente, producen la **misma dirección de red**.

!!! tip "No necesitas escribir todas las subredes"

    Con práctica podrás localizar directamente el bloque.

    Por ejemplo:

    ```text
    192.168.10.142/26
    ```

    `/26` tiene salto `64`.

    Los comienzos son:

    ```text
    0, 64, 128, 192
    ```

    `142` está entre `128` y `191`.

    Por tanto:

    ```text
    Red = 192.168.10.128/26
    ```

!!! warning "IP sin máscara = información incompleta"

    En subnetting, escribir únicamente:

    ```text
    192.168.10.70
    ```

    no permite determinar con precisión a qué subred pertenece.

    Necesitamos conocer también su máscara o prefijo.

!!! question "¿Misma subred o subred diferente?"

    Determina si cada pareja pertenece a la misma subred:

    **A**

    ```text
    192.168.1.10/26
    192.168.1.50/26
    ```

    **B**

    ```text
    192.168.1.60/26
    192.168.1.70/26
    ```

    **C**

    ```text
    192.168.1.100/27
    192.168.1.120/27
    ```

    **D**

    ```text
    192.168.1.125/27
    192.168.1.130/27
    ```

    Para cada caso indica:

    1. La dirección de red del primer equipo.
    2. La dirección de red del segundo equipo.
    3. Si pertenecen a la misma subred.
    4. Si necesitarían un router para comunicarse entre ellos.

!!! abstract "🛠️ A continuación..."

    Ya podemos diseñar subredes, asignarlas a una topología y determinar si dos equipos pertenecen a la misma red.

    En el siguiente apartado aplicaremos todo lo aprendido a una **práctica guiada de subnetting**, en la que diseñaremos el direccionamiento de una pequeña organización y comprobaremos su funcionamiento en **Cisco Packet Tracer**.

## 11.13 Práctica guiada: diseño y configuración de una red con VLSM

Ha llegado el momento de aplicar todo lo aprendido.

En esta práctica diseñaremos el direccionamiento de una pequeña organización, construiremos su topología en **Cisco Packet Tracer**, configuraremos los dispositivos y comprobaremos la comunicación entre las diferentes subredes.

Partiremos únicamente de:

- una red IPv4 disponible;
- el número de hosts necesario en cada área.

Tendremos que obtener nosotros mismos todo el plan de direccionamiento.

---

## Objetivos de la práctica

Al finalizar serás capaz de:

- analizar las necesidades de direccionamiento de una organización;
- seleccionar las máscaras adecuadas mediante VLSM;
- calcular direcciones de red y broadcast;
- determinar los rangos de hosts;
- asignar gateways;
- configurar direcciones IPv4 en los equipos;
- configurar las interfaces del router;
- comprobar la conectividad;
- identificar errores básicos de direccionamiento.

---

## Situación de partida

Una empresa dispone de la red:

```text
192.168.10.0/24
```

Necesita crear redes independientes para cuatro áreas:

| Área | Hosts necesarios |
|------|-----------------:|
| Oficina | 50 |
| Taller | 25 |
| Administración | 12 |
| Dirección | 6 |

Utilizaremos **VLSM** para aprovechar eficientemente el espacio disponible.

---

## Paso 1. Ordenar las necesidades

En VLSM comenzamos siempre por la red que necesita mayor número de hosts.

En nuestro caso:

```text
Oficina        → 50
Taller         → 25
Administración → 12
Dirección      →  6
```

Ya están ordenadas de mayor a menor.

---

## Paso 2. Seleccionar las máscaras

Buscamos para cada área la subred más pequeña que proporcione suficientes hosts.

### Oficina

```text
Necesita: 50 hosts

/27 → 30 hosts  ❌
/26 → 62 hosts  ✅
```

Por tanto:

```text
Oficina → /26
```

### Taller

```text
Necesita: 25 hosts

/28 → 14 hosts  ❌
/27 → 30 hosts  ✅
```

Por tanto:

```text
Taller → /27
```

### Administración

```text
Necesita: 12 hosts

/29 → 6 hosts   ❌
/28 → 14 hosts  ✅
```

Por tanto:

```text
Administración → /28
```

### Dirección

```text
Necesita: 6 hosts

/29 → 6 hosts  ✅
```

Por tanto:

```text
Dirección → /29
```

Nuestro diseño utilizará:

```text
Oficina        → /26
Taller         → /27
Administración → /28
Dirección      → /29
```

---

## Paso 3. Asignar los bloques

Comenzamos en:

```text
192.168.10.0
```

### Oficina

```text
192.168.10.0/26
```

Una `/26` contiene 64 direcciones:

```text
Red:          192.168.10.0
Primer host:  192.168.10.1
Último host:  192.168.10.62
Broadcast:    192.168.10.63
```

La siguiente dirección disponible es:

```text
192.168.10.64
```

### Taller

Asignamos:

```text
192.168.10.64/27
```

Obtenemos:

```text
Red:          192.168.10.64
Primer host:  192.168.10.65
Último host:  192.168.10.94
Broadcast:    192.168.10.95
```

La siguiente dirección disponible es:

```text
192.168.10.96
```

### Administración

Asignamos:

```text
192.168.10.96/28
```

Obtenemos:

```text
Red:          192.168.10.96
Primer host:  192.168.10.97
Último host:  192.168.10.110
Broadcast:    192.168.10.111
```

La siguiente dirección disponible es:

```text
192.168.10.112
```

### Dirección

Asignamos:

```text
192.168.10.112/29
```

Obtenemos:

```text
Red:          192.168.10.112
Primer host:  192.168.10.113
Último host:  192.168.10.118
Broadcast:    192.168.10.119
```

---

## Paso 4. Elaborar el plan de direccionamiento

Utilizaremos el primer host de cada subred como gateway.

| Área | Subred | Máscara | Gateway | Broadcast |
|------|--------|---------|---------|-----------|
| Oficina | `192.168.10.0/26` | `255.255.255.192` | `192.168.10.1` | `192.168.10.63` |
| Taller | `192.168.10.64/27` | `255.255.255.224` | `192.168.10.65` | `192.168.10.95` |
| Administración | `192.168.10.96/28` | `255.255.255.240` | `192.168.10.97` | `192.168.10.111` |
| Dirección | `192.168.10.112/29` | `255.255.255.248` | `192.168.10.113` | `192.168.10.119` |

Antes de abrir Packet Tracer ya tenemos completamente diseñado el direccionamiento.

---

## Paso 5. Crear la topología en Cisco Packet Tracer

Abre **Cisco Packet Tracer** y crea una nueva topología.

Necesitaremos:

```text
1 router
4 switches
8 ordenadores
```

Utilizaremos dos ordenadores para representar cada área.

La estructura será:

```text
                       ROUTER
                         │
          ┌──────────────┼──────────────┐
          │              │              │
       SW-OFICINA     SW-TALLER      SW-ADMIN
          │              │              │
       PC-OF1          PC-TA1         PC-AD1
       PC-OF2          PC-TA2         PC-AD2

                         │
                     SW-DIRECCION
                         │
                      PC-DIR1
                      PC-DIR2
```

!!! note "La topología es una representación"

    En una instalación real cada área podría contener decenas de equipos.

    Para comprobar el direccionamiento no necesitamos representar físicamente todos ellos. Dos hosts por subred serán suficientes.

<figure class="figura-libro">
  <img
    src="../../assets/images/parte3/capitulo11/figura11_25.png"
    alt="Topología de la práctica guiada de subnetting VLSM en Cisco Packet Tracer"
  >
  <figcaption>
    <strong>Figura 11.25.</strong> Topología de la práctica guiada VLSM. El router R1 conecta las cuatro subredes de Oficina, Taller, Administración y Dirección, cada una formada por un switch y dos equipos finales.
  </figcaption>
</figure>

---

## Paso 6. Conectar los dispositivos

Conecta cada pareja de ordenadores a su switch.

Después conecta cada switch al dispositivo encargado del encaminamiento.

El objetivo lógico es disponer de cuatro interfaces de capa 3:

```text
Oficina        → 192.168.10.1/26
Taller         → 192.168.10.65/27
Administración → 192.168.10.97/28
Dirección      → 192.168.10.113/29
```

!!! warning "Comprueba las interfaces disponibles"

    El modelo de router utilizado debe disponer de suficientes interfaces para implementar la topología propuesta.

    Si el dispositivo elegido no dispone de cuatro interfaces Ethernet utilizables, selecciona un modelo adecuado o adapta la topología según las posibilidades del equipo utilizado en Packet Tracer.

---

## Paso 7. Configurar los hosts

Asignaremos algunas direcciones de ejemplo.

### Oficina

PC-OF1:

```text
IP Address:      192.168.10.10
Subnet Mask:     255.255.255.192
Default Gateway: 192.168.10.1
```

PC-OF2:

```text
IP Address:      192.168.10.11
Subnet Mask:     255.255.255.192
Default Gateway: 192.168.10.1
```

### Taller

PC-TA1:

```text
IP Address:      192.168.10.70
Subnet Mask:     255.255.255.224
Default Gateway: 192.168.10.65
```

PC-TA2:

```text
IP Address:      192.168.10.71
Subnet Mask:     255.255.255.224
Default Gateway: 192.168.10.65
```

### Administración

PC-AD1:

```text
IP Address:      192.168.10.100
Subnet Mask:     255.255.255.240
Default Gateway: 192.168.10.97
```

PC-AD2:

```text
IP Address:      192.168.10.101
Subnet Mask:     255.255.255.240
Default Gateway: 192.168.10.97
```

### Dirección

PC-DIR1:

```text
IP Address:      192.168.10.114
Subnet Mask:     255.255.255.248
Default Gateway: 192.168.10.113
```

PC-DIR2:

```text
IP Address:      192.168.10.115
Subnet Mask:     255.255.255.248
Default Gateway: 192.168.10.113
```

---

## Paso 8. Configurar las interfaces del router

En cada interfaz configuraremos la dirección que hemos reservado como gateway.

La sintaxis general en Cisco IOS es:

```text
enable
configure terminal

interface <interfaz>

ip address <dirección> <máscara>

no shutdown
```

Por ejemplo, para Oficina:

```text
ip address 192.168.10.1 255.255.255.192
```

Para Taller:

```text
ip address 192.168.10.65 255.255.255.224
```

Para Administración:

```text
ip address 192.168.10.97 255.255.255.240
```

Y para Dirección:

```text
ip address 192.168.10.113 255.255.255.248
```

<figure class="figura-libro">
  <img
    src="../../assets/images/parte3/capitulo11/figura11_26.png"
    alt="Configuración IPv4 de los equipos y las interfaces del router utilizadas como gateways"
  >
  <figcaption>
    <strong>Figura 11.26.</strong> Configuración IPv4 de los equipos y gateways de la práctica. Cada host utiliza una dirección y una máscara correspondientes a su subred, mientras que la interfaz del router conectada a esa red actúa como puerta de enlace predeterminada.
  </figcaption>
</figure>

!!! warning "El nombre de las interfaces puede variar"

    Dependiendo del router utilizado en Packet Tracer puedes encontrar nombres como:

    ```text
    GigabitEthernet0/0
    GigabitEthernet0/1
    FastEthernet0/0
    ```

    Comprueba el nombre real de cada interfaz antes de introducir los comandos.

---

## Paso 9. Comprobar las interfaces

En el router podemos utilizar:

```text
show ip interface brief
```

Debemos comprobar que las interfaces utilizadas aparecen activas.

Buscaremos estados similares a:

```text
Status     up
Protocol   up
```

Si una interfaz aparece administrativamente desactivada, comprueba que has ejecutado:

```text
no shutdown
```

---

## Paso 10. Primera prueba: comunicación dentro de una subred

Desde:

```text
PC-OF1
```

abre:

```text
Desktop → Command Prompt
```

y ejecuta:

```text
ping 192.168.10.11
```

Estamos comprobando la comunicación entre:

```text
192.168.10.10/26
```

y:

```text
192.168.10.11/26
```

Los dos equipos pertenecen a:

```text
192.168.10.0/26
```

Por tanto, deberían poder comunicarse localmente.

---

## Paso 11. Comprobar el gateway

Desde PC-OF1 ejecuta:

```text
ping 192.168.10.1
```

Estamos comprobando la comunicación entre el host y su puerta de enlace.

Si funciona:

```text
PC
 ↓
Switch
 ↓
Gateway
```

está correctamente configurado.

---

## Paso 12. Comunicación entre subredes

Ahora probaremos:

```text
PC-OF1
192.168.10.10
```

contra:

```text
PC-TA1
192.168.10.70
```

Ejecuta desde PC-OF1:

```text
ping 192.168.10.70
```

Los equipos pertenecen a redes diferentes:

```text
192.168.10.0/26
```

y:

```text
192.168.10.64/27
```

Por tanto, la comunicación necesita pasar por el router.

El recorrido lógico será:

```text
PC-OF1
   ↓
SW-OFICINA
   ↓
Gateway 192.168.10.1
   ↓
ROUTER
   ↓
Red 192.168.10.64/27
   ↓
SW-TALLER
   ↓
PC-TA1
```

<figure class="figura-libro">
  <img
    src="../../assets/images/parte3/capitulo11/figura11_27.png"
    alt="Recorrido de un ping entre equipos pertenecientes a subredes IPv4 diferentes"
  >
  <figcaption>
    <strong>Figura 11.27.</strong> Comprobación de conectividad entre subredes. PC-OF1 detecta que PC-TA1 no pertenece a su red local y entrega el paquete a su gateway; el router consulta su tabla de rutas y lo reenvía hacia la subred del Taller hasta alcanzar el equipo de destino.
  </figcaption>
</figure>

Como las cuatro redes están directamente conectadas al router, este conoce sus rutas directamente conectadas y puede encaminar el tráfico entre ellas.

---

## Paso 13. Comprobar todas las redes

Realiza ahora las siguientes pruebas:

```text
PC-OF1 → PC-TA1
PC-OF1 → PC-AD1
PC-OF1 → PC-DIR1
PC-TA1 → PC-AD1
PC-TA1 → PC-DIR1
PC-AD1 → PC-DIR1
```

Todas deberían funcionar si el direccionamiento y las interfaces están correctamente configurados.

---

## Paso 14. Comprobar las rutas del router

En el router ejecuta:

```text
show ip route
```

Deberías encontrar las cuatro redes directamente conectadas:

```text
192.168.10.0/26
192.168.10.64/27
192.168.10.96/28
192.168.10.112/29
```

Estas redes aparecerán como rutas conectadas a las interfaces correspondientes.

---

## Paso 15. Provocar un error

Una buena forma de aprender a diagnosticar una red consiste en provocar intencionadamente un fallo.

En PC-TA1 cambia temporalmente:

```text
255.255.255.224
```

por:

```text
255.255.255.0
```

Es decir:

```text
/27 → /24
```

Ahora el equipo interpretará de forma diferente qué direcciones considera locales.

Realiza varias pruebas de `ping` y observa el resultado.

Después devuelve la máscara correcta:

```text
255.255.255.224
```

!!! warning "Recupera siempre la configuración"

    Después de realizar una prueba de diagnóstico, vuelve a colocar los valores correctos antes de continuar.

---

## Paso 16. Guardar el proyecto

Guarda el archivo de Packet Tracer con un nombre descriptivo:

```text
capitulo11_vlsm.pkt
```

Este archivo permitirá volver posteriormente a la práctica para realizar nuevas pruebas.

---

## Resultado final

Al terminar tendremos:

```text
192.168.10.0/24
        ↓
       VLSM
        ↓
┌───────────────────────────────────────┐
│ Oficina        192.168.10.0/26       │
│ Taller         192.168.10.64/27      │
│ Administración 192.168.10.96/28      │
│ Dirección      192.168.10.112/29     │
└───────────────────────────────────────┘
        ↓
      ROUTER
        ↓
Comunicación entre las cuatro subredes
```

Hemos pasado de unos requisitos expresados únicamente como:

```text
50
25
12
6
```

a una red completamente planificada y configurable.

---

!!! tip "Orden recomendado para diagnosticar"

    Si un `ping` no funciona, comprueba en este orden:

    ```text
    1. Dirección IP
    2. Máscara
    3. Gateway
    4. Cableado
    5. Estado de las interfaces
    6. Dirección del equipo de destino
    7. Tabla de rutas
    ```

    Comenzar por las comprobaciones más sencillas suele ahorrar mucho tiempo.

!!! question "Antes de terminar"

    Sin consultar la tabla anterior, intenta responder:

    1. ¿A qué subred pertenece `192.168.10.80/27`?
    2. ¿Cuál es su broadcast?
    3. ¿A qué subred pertenece `192.168.10.105/28`?
    4. ¿Puede utilizar `192.168.10.111` un PC de Administración?
    5. ¿Por qué?
    6. ¿Qué gateway utilizaría `192.168.10.116/29`?

!!! abstract "🛠️ Reto"

    Ya has realizado el diseño siguiendo todos los pasos.

    Ahora crea desde cero un nuevo proyecto de Packet Tracer utilizando:

    ```text
    192.168.20.0/24
    ```

    para las siguientes necesidades:

    ```text
    Alumnos        → 60 hosts
    Profesores     → 28 hosts
    Administración → 13 hosts
    Impresoras     → 5 hosts
    ```

    Esta vez deberás realizar tú mismo:

    - el cálculo VLSM;
    - la tabla de direccionamiento;
    - la elección de gateways;
    - la construcción de la topología;
    - la configuración;
    - y las pruebas de conectividad.

## 11.14 Reto práctico: diseña una red desde cero

En la práctica anterior hemos realizado juntos todo el proceso:

```text
REQUISITOS
    ↓
CÁLCULO VLSM
    ↓
PLAN DE DIRECCIONAMIENTO
    ↓
TOPOLOGÍA
    ↓
CONFIGURACIÓN
    ↓
COMPROBACIÓN
```

Ahora tendrás que repetir el proceso con una nueva red, pero esta vez tomarás tú las decisiones.

---

## El escenario

Un centro educativo quiere reorganizar su red informática.

Dispone del bloque:

```text
192.168.20.0/24
```

y necesita separar los dispositivos en cuatro redes independientes:

| Área | Hosts necesarios |
|------|-----------------:|
| Alumnos | 60 |
| Profesores | 28 |
| Administración | 13 |
| Impresoras | 5 |

Además, el centro quiere conservar el mayor espacio posible para futuras ampliaciones.

Tu trabajo consiste en diseñar el direccionamiento, construir la topología en Cisco Packet Tracer y comprobar que todas las redes pueden comunicarse correctamente.

---

## Primera fase: analiza el problema

Antes de realizar ningún cálculo, responde:

```text
¿Cuántas subredes necesitamos?

¿Cuántos hosts necesita cada una?

¿Tienen todas necesidades similares?

¿Utilizarías FLSM o VLSM?

¿Por qué?
```

No empieces a configurar Packet Tracer todavía.

Primero debemos diseñar la red.

---

## Segunda fase: determina las máscaras

Completa la siguiente tabla:

| Área | Hosts necesarios | Prefijo necesario | Máscara decimal | Hosts disponibles |
|------|-----------------:|:-----------------:|-----------------|-------------------:|
| Alumnos | 60 |  |  |  |
| Profesores | 28 |  |  |  |
| Administración | 13 |  |  |  |
| Impresoras | 5 |  |  |  |

Recuerda buscar siempre:

> **La subred más pequeña que pueda alojar todos los hosts necesarios.**

---

## Tercera fase: asigna las subredes

Una vez determinadas las máscaras, asigna los bloques comenzando por la red de mayor tamaño.

Completa:

| Área | Dirección de red | Prefijo | Primer host | Último host | Broadcast |
|------|------------------|:-------:|-------------|-------------|-----------|
| Alumnos |  |  |  |  |  |
| Profesores |  |  |  |  |  |
| Administración |  |  |  |  |  |
| Impresoras |  |  |  |  |  |

Comprueba especialmente que:

```text
☐ Las direcciones de red son válidas.

☐ Los bloques no se solapan.

☐ Cada subred dispone de suficientes hosts.

☐ Ninguna dirección de broadcast se utiliza como host.
```

---

## Cuarta fase: selecciona los gateways

Utilizaremos la misma convención de la práctica anterior:

> **El primer host disponible de cada subred será el gateway.**

Completa:

| Área | Subred | Gateway |
|------|--------|---------|
| Alumnos |  |  |
| Profesores |  |  |
| Administración |  |  |
| Impresoras |  |  |

Una vez terminado este paso tendrás preparado el **plan de direccionamiento**.

---

## Quinta fase: determina el espacio disponible

Una característica importante de un buen diseño VLSM es conservar espacio para futuras ampliaciones.

Responde:

```text
¿Cuántas direcciones ha reservado el diseño?

¿Cuál es la primera dirección todavía sin asignar?

¿Cuántas direcciones permanecen disponibles?
```

Pero recuerda:

> Que una dirección sea la primera que todavía no hemos utilizado no significa que pueda ser el comienzo de una subred de cualquier tamaño.

Si posteriormente necesitamos crear otra subred, tendremos que comprobar los límites válidos de la máscara que vayamos a utilizar.

---

## Sexta fase: construye la topología

Abre Cisco Packet Tracer.

Construye una topología que represente las cuatro redes:

```text
                     ROUTER
                        │
        ┌───────────────┼───────────────┐
        │               │               │
     ALUMNOS       PROFESORES     ADMINISTRACIÓN
        │               │               │
      Switch           Switch          Switch
        │               │               │
      2 PC             2 PC            2 PC

                        │
                   IMPRESORAS
                        │
                      Switch
                        │
                    2 dispositivos
```
<figure class="figura-libro">
  <img
    src="../../assets/images/parte3/capitulo11/figura11_28.png"
    alt="Topología propuesta para el reto práctico de subnetting"
  >
  <figcaption>
    <strong>Figura 11.28.</strong> Topología propuesta para el reto de subnetting. El router conecta cuatro redes independientes correspondientes a Alumnos, Profesores, Administración e Impresoras. En la simulación se utilizan únicamente dos dispositivos por subred para comprobar el funcionamiento del direccionamiento.
  </figcaption>
</figure>

No necesitamos representar los 60 equipos de Alumnos.

Dos dispositivos por subred serán suficientes para comprobar el funcionamiento del direccionamiento.

---

## Séptima fase: asigna direcciones a los dispositivos

Selecciona dos direcciones válidas de cada subred.

Completa primero esta tabla:

| Dispositivo | Dirección IP | Máscara | Gateway |
|-------------|--------------|---------|---------|
| PC-ALU-01 |  |  |  |
| PC-ALU-02 |  |  |  |
| PC-PRO-01 |  |  |  |
| PC-PRO-02 |  |  |  |
| PC-ADM-01 |  |  |  |
| PC-ADM-02 |  |  |  |
| IMP-01 |  |  |  |
| IMP-02 |  |  |  |

Antes de configurar los dispositivos comprueba que ninguna de las direcciones seleccionadas corresponde a:

```text
Dirección de red
Gateway
Broadcast
```

ni está repetida.

---

## Octava fase: configura el router

Configura una interfaz de capa 3 para cada subred.

En cada una utilizarás la dirección que hayas reservado como gateway.

La estructura general será:

```text
enable
configure terminal

interface <interfaz>
 ip address <gateway> <máscara>
 no shutdown
exit
```

Repite el procedimiento para las cuatro redes.

Después ejecuta:

```text
show ip interface brief
```

Comprueba que las interfaces utilizadas se encuentran correctamente configuradas y activas.

---

## Novena fase: comprueba primero cada red local

No empieces probando la comunicación entre redes diferentes.

Comprueba primero cada subred por separado.

Por ejemplo:

```text
PC-ALU-01
      ↓
PC-ALU-02
```

Después:

```text
PC-PRO-01
      ↓
PC-PRO-02
```

y continúa con las demás.

Si dos equipos de una misma subred no pueden comunicarse, revisa:

```text
Dirección IP
Máscara
Cableado
Puerto del switch
```

---

## Décima fase: comprueba los gateways

Desde cada red realiza un `ping` a su correspondiente gateway.

Por ejemplo:

```text
PC-ALU-01
     ↓
   ping
     ↓
Gateway de Alumnos
```

Repite la prueba desde las cuatro subredes.

Si un equipo puede comunicarse con otro host de su propia red pero no con el gateway, revisa especialmente:

```text
Gateway configurado en el PC
Dirección de la interfaz del router
Máscara
Cableado
Estado de la interfaz
```

---

## Undécima fase: comprueba la comunicación entre subredes

Realiza al menos estas pruebas:

```text
Alumnos → Profesores

Alumnos → Administración

Alumnos → Impresoras

Profesores → Administración

Profesores → Impresoras

Administración → Impresoras
```

Anota los resultados:

| Origen | Destino | Resultado |
|--------|---------|-----------|
| Alumnos | Profesores | |
| Alumnos | Administración | |
| Alumnos | Impresoras | |
| Profesores | Administración | |
| Profesores | Impresoras | |
| Administración | Impresoras | |

Si todo está correctamente configurado:

```text
Todos los ping → CORRECTOS
```

---

## Duodécima fase: comprueba el router

Ejecuta:

```text
show ip interface brief
```

y:

```text
show ip route
```

Identifica en la tabla de rutas las cuatro redes que has creado.

Responde:

```text
¿Qué redes aparecen como directamente conectadas?

¿A través de qué interfaz se alcanza cada una?

¿Por qué no hemos tenido que configurar rutas estáticas entre estas cuatro redes?
```

---

## Decimotercera fase: diagnóstico de errores

Ahora vamos a provocar varios errores.

Realiza **uno cada vez**, comprueba sus consecuencias y vuelve después a la configuración correcta.

### Error 1. Máscara incorrecta

Cambia la máscara de uno de los equipos.

Por ejemplo, sustituye su máscara correcta por:

```text
255.255.255.0
```

Realiza varios `ping`.

¿Qué ocurre?

---

### Error 2. Gateway incorrecto

Configura temporalmente como gateway una dirección perteneciente a otra subred.

Comprueba:

```text
ping a un equipo local
ping al gateway correcto
ping a un equipo de otra subred
```

¿Qué comunicaciones funcionan?

¿Cuáles dejan de funcionar?

---

### Error 3. Interfaz del router desactivada

Selecciona una interfaz del router y ejecuta:

```text
shutdown
```

Comprueba qué dispositivos dejan de comunicarse.

Después reactívala:

```text
no shutdown
```

---

### Error 4. Dirección duplicada

Configura temporalmente dos equipos con la misma dirección IP.

Observa qué ocurre.

Después recupera inmediatamente las direcciones correctas.

---

## Diagnosticar antes de cambiar

Cuando una red falla, evita modificar varias cosas simultáneamente.

Utiliza un procedimiento ordenado:

```text
¿El enlace está activo?
        ↓
¿La IP es correcta?
        ↓
¿La máscara es correcta?
        ↓
¿El gateway es correcto?
        ↓
¿Responde un host local?
        ↓
¿Responde el gateway?
        ↓
¿Responde otra subred?
        ↓
¿Qué indica la tabla de rutas?
```
<figure class="figura-libro">
  <img
    src="../../assets/images/parte3/capitulo11/figura11_29.png"
    alt="Procedimiento sistemático para diagnosticar problemas de conectividad en una red IPv4"
  >
  <figcaption>
    <strong>Figura 11.29.</strong> Procedimiento sistemático para diagnosticar un problema de conectividad. Las comprobaciones deben realizarse de forma ordenada, comenzando por el enlace físico y continuando con la dirección IP, la máscara, el gateway, la conectividad local, el acceso a otras subredes y, finalmente, la tabla de rutas.
  </figcaption>
</figure>

Modificar varios parámetros a la vez puede solucionar accidentalmente el problema sin que sepamos cuál era realmente la causa.

---

## Entrega de la actividad

Entrega:

```text
1. Tabla de cálculo VLSM.

2. Plan completo de direccionamiento.

3. Tabla de direcciones de los dispositivos.

4. Archivo de Cisco Packet Tracer.

5. Capturas de las pruebas de conectividad.

6. Resultado de show ip interface brief.

7. Resultado de show ip route.

8. Explicación de los errores provocados y sus efectos.
```

Guarda el proyecto con un nombre similar a:

```text
reto_subnetting_nombre_apellido.pkt
```

---

## Criterios de evaluación

| Criterio | Puntuación |
|----------|-----------:|
| Cálculo correcto de las subredes | 2 puntos |
| Plan de direccionamiento | 2 puntos |
| Configuración de los hosts | 1 punto |
| Configuración del router | 1,5 puntos |
| Conectividad entre las redes | 1,5 puntos |
| Diagnóstico de errores | 1 punto |
| Documentación y presentación | 1 punto |
| **Total** | **10 puntos** |

---

!!! tip "No trabajes por ensayo y error"

    Packet Tracer debe utilizarse para **implementar y comprobar** el diseño.

    No para descubrir las subredes probando direcciones al azar.

    Primero:

    ```text
    PAPEL → DISEÑO
    ```

    Después:

    ```text
    PACKET TRACER → IMPLEMENTACIÓN
    ```

!!! warning "No cambies varias cosas a la vez"

    Durante el diagnóstico modifica únicamente un parámetro.

    Comprueba el resultado.

    Después recupera la configuración correcta antes de provocar el siguiente error.

!!! question "Pregunta final"

    Supón que después de terminar el reto el centro necesita una nueva red para:

    ```text
    Cámaras IP → 20 dispositivos
    ```

    Sin modificar las cuatro subredes existentes:

    1. ¿Qué prefijo necesitarías?
    2. ¿Qué máscara decimal corresponde a ese prefijo?
    3. ¿Cuál sería una dirección de red válida dentro del espacio todavía disponible?
    4. ¿Cuál sería su rango de hosts?
    5. ¿Cuál sería su broadcast?
    6. ¿Qué dirección utilizarías como gateway?

    Justifica los cálculos.

!!! abstract "🎯 Objetivo conseguido"

    Si has completado correctamente el reto, ya eres capaz de transformar unos requisitos de hosts en un **plan de direccionamiento IPv4**, implementarlo en una topología y comprobar su funcionamiento.

    Estas habilidades serán fundamentales en los próximos capítulos cuando configuremos redes cada vez más completas.

## 11.15 Errores frecuentes en subnetting

El subnetting combina varios conceptos:

```text
Dirección IP
Máscara
Prefijo CIDR
Dirección de red
Hosts
Broadcast
Saltos
FLSM
VLSM
```

Por eso es fácil cometer pequeños errores que terminan produciendo un plan de direccionamiento incorrecto.

Vamos a repasar los más habituales.

---

## Error 1. Confundir número de direcciones con número de hosts

Supongamos una subred:

```text
/26
```

Tiene:

```text
2^(32-26) = 64 direcciones
```

Pero esto **no significa que podamos conectar 64 hosts**.

Debemos reservar:

```text
1 dirección de red
1 dirección de broadcast
```

Por tanto:

```text
64 - 2 = 62 hosts utilizables
```

Así:

```text
/26 → 64 direcciones totales
/26 → 62 hosts utilizables
```

!!! warning "No olvides el −2"

    En las subredes IPv4 convencionales estudiadas en este capítulo:

    ```text
    Hosts utilizables = 2^h - 2
    ```

    donde `h` representa el número de bits disponibles para hosts.

---

## Error 2. Utilizar la dirección de red como host

Consideremos:

```text
192.168.1.64/26
```

El bloque comprende:

```text
192.168.1.64 - 192.168.1.127
```

Pero:

```text
192.168.1.64
```

es la **dirección de red**.

Por tanto, no debemos asignarla a un ordenador.

El primer host será:

```text
192.168.1.65
```

---

## Error 3. Utilizar el broadcast como host

En la misma subred:

```text
192.168.1.64/26
```

el broadcast es:

```text
192.168.1.127
```

Por tanto:

```text
192.168.1.127
```

tampoco puede utilizarse como dirección de un host.

El último host válido será:

```text
192.168.1.126
```

Podemos resumir:

```text
192.168.1.64      → RED
192.168.1.65      → primer host
...
192.168.1.126     → último host
192.168.1.127     → BROADCAST
```

---

## Error 4. Calcular incorrectamente el salto

Recordemos:

```text
Salto = 256 - valor de la máscara
```

Por ejemplo:

```text
/27
```

equivale a:

```text
255.255.255.224
```

Por tanto:

```text
256 - 224 = 32
```

Los comienzos válidos son:

```text
0
32
64
96
128
160
192
224
```

Un error en el salto provoca que todas las direcciones de red calculadas posteriormente sean incorrectas.

---

## Error 5. Pensar que cualquier dirección puede iniciar una subred

Supongamos que tenemos libre:

```text
192.168.1.120
```

y queremos crear una:

```text
/27
```

No podemos escribir automáticamente:

```text
192.168.1.120/27
```

Una `/27` tiene salto:

```text
32
```

y sus comienzos válidos son:

```text
0, 32, 64, 96, 128, 160, 192, 224
```

Por tanto:

```text
192.168.1.120/27
```

no representa una dirección de red `/27` válida.

Debemos localizar un límite correcto que además esté disponible.

---

## Error 6. Elegir una máscara demasiado pequeña

Necesitamos:

```text
30 hosts
```

Una `/28` dispone de:

```text
14 hosts utilizables
```

Por tanto:

```text
/28 ❌
```

Necesitamos:

```text
/27 → 30 hosts utilizables
```

La regla es:

> **La subred seleccionada debe proporcionar como mínimo el número de hosts necesarios.**

---

## Error 7. Elegir una máscara innecesariamente grande

También podemos cometer el error contrario.

Supongamos:

```text
10 hosts
```

Una `/26` permitiría:

```text
62 hosts
```

Funcionaría, pero desperdiciaría muchas direcciones.

Una:

```text
/28
```

proporciona:

```text
14 hosts
```

y resulta mucho más adecuada.

Esto es especialmente importante cuando trabajamos con VLSM.

---

## Error 8. No ordenar las subredes en VLSM

Tenemos:

```text
Red A → 10 hosts
Red B → 50 hosts
Red C → 25 hosts
Red D → 5 hosts
```

No deberíamos comenzar asignándolas en ese orden.

Primero las ordenamos:

```text
50
25
10
5
```

y después calculamos y asignamos los bloques.

La regla práctica es:

> **En VLSM, comienza por la necesidad de hosts más grande.**

Esto facilita la colocación de los bloques y reduce la posibilidad de errores.

---

## Error 9. Solapar subredes

Consideremos:

```text
192.168.1.0/25
```

Esta subred ocupa:

```text
192.168.1.0 - 192.168.1.127
```

Ahora intentamos utilizar:

```text
192.168.1.64/26
```

que ocupa:

```text
192.168.1.64 - 192.168.1.127
```

El segundo bloque está contenido dentro del primero.

Por tanto:

```text
SOLAPAMIENTO
```

El diseño es incorrecto.

Las subredes utilizadas para redes diferentes deben ocupar **intervalos independientes**.

---

## Error 10. Pensar que dos IP pertenecen a la misma subred porque se parecen

Tenemos:

```text
192.168.1.50
192.168.1.70
```

A simple vista parecen pertenecer a la misma red.

Pero con:

```text
/26
```

obtenemos:

```text
192.168.1.50/26
→ 192.168.1.0/26

192.168.1.70/26
→ 192.168.1.64/26
```

Por tanto:

```text
SUBREDES DIFERENTES
```

La máscara es imprescindible.

---

## Error 11. Configurar una máscara distinta de la planificada

Supongamos que el plan indica:

```text
IP:      192.168.1.70
Máscara: /27
```

pero configuramos accidentalmente:

```text
Máscara: /24
```

La dirección IP parece correcta, pero el equipo interpretará de forma diferente qué direcciones pertenecen a su red local.

Un error de máscara puede provocar problemas de comunicación difíciles de detectar si únicamente revisamos la dirección IP.

---

## Error 12. Configurar un gateway fuera de la subred

Tenemos:

```text
IP:      192.168.1.70
Máscara: /27
```

El equipo pertenece a:

```text
192.168.1.64/27
```

Su rango de hosts es:

```text
192.168.1.65 - 192.168.1.94
```

Por tanto, un gateway como:

```text
192.168.1.1
```

no pertenece a la subred del host.

En cambio:

```text
192.168.1.65
```

sí podría utilizarse como gateway.

---

## Error 13. Confundir primera dirección libre con siguiente subred

En un diseño VLSM hemos utilizado hasta:

```text
192.168.1.119
```

La primera dirección todavía sin asignar es:

```text
192.168.1.120
```

Pero esto **no significa** que la siguiente subred deba comenzar necesariamente en `.120`.

Si necesitamos una `/29`, `.120` sí es un comienzo válido porque el salto es 8:

```text
...
104
112
120
128
...
```

Pero si necesitamos una `/27`, sus límites son:

```text
...
96
128
160
...
```

y tendremos que comenzar en:

```text
192.168.1.128/27
```

si ese bloque está disponible.

---

## Error 14. Empezar a configurar antes de terminar el diseño

Un error muy habitual consiste en abrir Packet Tracer y comenzar inmediatamente a introducir direcciones.

El procedimiento correcto es:

```text
REQUISITOS
    ↓
CÁLCULOS
    ↓
PLAN DE DIRECCIONAMIENTO
    ↓
COMPROBACIÓN
    ↓
CONFIGURACIÓN
```

No:

```text
REQUISITOS
    ↓
PACKET TRACER
    ↓
PROBAR DIRECCIONES
    ↓
CAMBIAR COSAS
    ↓
SEGUIR PROBANDO
```

La simulación debe servir para **implementar y comprobar un diseño**, no para sustituir la planificación.

---

## Error 15. Cambiar varias configuraciones durante el diagnóstico

Si una comunicación falla y modificamos simultáneamente:

```text
IP
Máscara
Gateway
Interfaz del router
```

puede que consigamos solucionar el problema.

Pero no sabremos cuál era el error.

Es mejor seguir:

```text
Modificar una cosa
       ↓
Probar
       ↓
Observar
       ↓
Continuar
```

De esta manera podremos identificar realmente la causa.

<figure class="figura-libro">
  <img
    src="../../assets/images/parte3/capitulo11/figura11_30.png"
    alt="Resumen visual de los errores más frecuentes al realizar subnetting IPv4"
  >
  <figcaption>
    <strong>Figura 11.30.</strong> Errores frecuentes en subnetting. Un diseño correcto exige mantener la coherencia entre la dirección IP, la máscara, la dirección de red, el rango de hosts y el broadcast, además de evitar solapamientos, gateways incorrectos y bloques que no comiencen en límites válidos.
  </figcaption>
</figure>

---

## Una comprobación rápida antes de configurar

Antes de llevar un plan de subnetting a los dispositivos, revisa:

```text
☐ ¿La red original es correcta?

☐ ¿He calculado correctamente los hosts necesarios?

☐ ¿La máscara proporciona suficientes hosts?

☐ ¿El salto es correcto?

☐ ¿Las direcciones de red son límites válidos?

☐ ¿He reservado red y broadcast?

☐ ¿Existen solapamientos?

☐ ¿Los gateways pertenecen a sus subredes?

☐ ¿He documentado el diseño?

☐ ¿Queda espacio para ampliaciones si es necesario?
```

Si todo es correcto, podemos comenzar la configuración.

---

!!! note "Los errores suelen propagarse"

    Si calculas incorrectamente el salto al principio de un ejercicio, probablemente también serán incorrectos:

    ```text
    las direcciones de red,
    los rangos de hosts
    y los broadcast.
    ```

    Por eso merece la pena comprobar cada cálculo antes de continuar.

!!! tip "Comprueba desde lo general hasta lo concreto"

    Cuando revises un ejercicio de subnetting:

    ```text
    1. Red original
    2. Prefijo
    3. Máscara
    4. Salto
    5. Dirección de red
    6. Rango de hosts
    7. Broadcast
    8. Gateway
    ```

    Este orden permite detectar rápidamente dónde se ha producido el error.

!!! question "Encuentra los errores"

    Un técnico ha realizado el siguiente plan:

    ```text
    Red disponible:
    192.168.30.0/24

    Ventas:
    192.168.30.0/26
    Hosts: 192.168.30.0 - 192.168.30.63
    Gateway: 192.168.30.1

    Administración:
    192.168.30.64/27
    Hosts: 192.168.30.65 - 192.168.30.95
    Gateway: 192.168.30.64

    Dirección:
    192.168.30.90/28
    Hosts: 192.168.30.91 - 192.168.30.105
    Gateway: 192.168.30.91
    ```

    Localiza todos los errores.

    Para cada uno:

    1. Explica qué está mal.
    2. Indica por qué.
    3. Propón una corrección.