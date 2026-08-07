# Capítulo 10. Direccionamiento IPv4

## Objetivos del capítulo

Al finalizar este capítulo serás capaz de:

- Comprender por qué todos los dispositivos de una red necesitan una dirección IP.
- Identificar la estructura de una dirección IPv4.
- Diferenciar la parte de red y la parte de host de una dirección IP.
- Comprender la función de la máscara de subred.
- Identificar las direcciones de red, de difusión (*broadcast*) y de host.
- Distinguir entre direcciones IP públicas y privadas.
- Reconocer las direcciones IPv4 especiales más habituales.
- Configurar correctamente una dirección IPv4 en un equipo Windows y en un equipo Linux.
- Comprobar la configuración IP utilizando las herramientas básicas del sistema operativo.

---

## Introducción

En el capítulo anterior hemos aprendido cómo viaja la información entre dos dispositivos conectados a una red.

También hemos visto cómo los protocolos colaboran entre sí mediante el modelo TCP/IP y cómo la información se encapsula, atraviesa la red y llega finalmente al equipo destinatario.

Sin embargo, todavía queda una pregunta muy importante por responder.

> **¿Cómo sabe la red cuál es el equipo al que debe entregar la información?**

Imagina que Ana desea guardar un documento en el servidor de la empresa.

La red no puede limitarse a enviar la información "a cualquier ordenador".

Debe conocer exactamente cuál es el destinatario para que el documento llegue al servidor correcto y no a otro equipo de la red.

Para conseguirlo, todos los dispositivos conectados a una red utilizan un identificador denominado **dirección IP**.

Podemos comparar una dirección IP con la dirección postal de una vivienda.

Cuando enviamos una carta no basta con indicar el nombre del destinatario.

También debemos escribir una dirección completa que permita localizar su domicilio entre millones de viviendas.

En una red informática ocurre exactamente lo mismo.

Cada dispositivo necesita una dirección única que permita localizarlo y enviar correctamente la información.

A lo largo de este capítulo aprenderemos cómo están formadas las direcciones IPv4, qué información contienen y cómo permiten identificar de forma precisa cada uno de los equipos conectados a una red.

Estos conocimientos serán fundamentales para comprender, en los siguientes capítulos, cómo funcionan protocolos como **ARP**, **DHCP** o **DNS**, que utilizan las direcciones IP para hacer posible la comunicación entre dispositivos.

---

!!! note "Recuerda"

    En el capítulo anterior aprendimos **cómo viajan los datos** por la red. En este capítulo descubriremos **cómo encuentran el camino hasta el equipo de destino** mediante las direcciones IPv4.

!!! tip "¿Sabías que...?"

    Cada vez que visitas una página web, envías un correo electrónico o reproduces un vídeo en Internet, tu dispositivo utiliza una dirección IP para que la información pueda llegar correctamente hasta su destino.

!!! abstract "🛠️ En este capítulo..."

    Aprenderás cómo se estructura una dirección IPv4, cómo se interpreta y cómo configurar correctamente una dirección IP en un equipo conectado a una red.

!!! question "Piensa un momento..."

    Si dos ordenadores de una misma red utilizaran exactamente la misma dirección IP, ¿crees que la red podría distinguir correctamente cuál de los dos debe recibir la información? ¿Qué problemas podrían aparecer?

## 10.1 ¿Qué es una dirección IP?

En una red informática pueden coexistir desde unos pocos dispositivos hasta millones de ellos conectados entre sí.

Para que la información llegue correctamente a su destino, cada equipo debe poder identificarse de forma única.

Esta identificación se realiza mediante una **dirección IP (Internet Protocol)**.

Una dirección IP es un identificador lógico asignado a un dispositivo conectado a una red que permite localizarlo y enviar información hasta él.

Gracias a esta dirección, los equipos pueden distinguir unos dispositivos de otros y determinar cuál es el destinatario de cada comunicación.

Sin una dirección IP sería imposible saber a qué ordenador, servidor, impresora o teléfono debe entregarse la información.

---

### Una comparación con una dirección postal

Podemos comprender mejor este concepto utilizando un ejemplo cotidiano.

Cuando enviamos una carta por correo necesitamos indicar la dirección completa del destinatario.

No basta con escribir únicamente su nombre.

Es necesario especificar datos como:

- la calle;
- el número;
- la localidad;
- el código postal;
- el país.

Solo así el servicio postal puede localizar correctamente el domicilio.

En una red informática ocurre algo muy parecido.

Cada dispositivo necesita una dirección única que permita identificarlo entre todos los equipos conectados.

Cuando un ordenador desea enviar información, indica la dirección IP del dispositivo destinatario para que la red pueda hacer llegar los datos al lugar correcto.

---

### ¿Quién necesita una dirección IP?

Prácticamente todos los dispositivos que se conectan a una red utilizan una dirección IP.

Por ejemplo:

- ordenadores;
- servidores;
- teléfonos móviles;
- impresoras de red;
- tabletas;
- cámaras IP;
- televisores inteligentes;
- puntos de acceso Wi-Fi;
- routers;
- dispositivos IoT.

Todos ellos deben disponer de una dirección IP para poder enviar y recibir información.

<figure class="figura-libro">
  <img
    src="../../assets/images/parte3/capitulo10/figura10_1_2.png"
    alt="Comparación entre una dirección postal y una dirección IP, y ejemplos de dispositivos identificados mediante direcciones IPv4"
  >
  <figcaption>
    <strong>Figuras 10.1 y 10.2.</strong> Comparación entre una dirección postal y una dirección IP como sistemas de identificación del destinatario, junto con un ejemplo de una red local en la que distintos dispositivos disponen de direcciones IPv4 únicas para poder comunicarse correctamente.
  </figcaption>
</figure>

---

### ¿Todas las direcciones IP son diferentes?

Dentro de una misma red no pueden existir dos dispositivos utilizando simultáneamente la misma dirección IP.

Si esto ocurre, se produce un **conflicto de direcciones IP**.

Como consecuencia, los dispositivos afectados pueden perder la conectividad o experimentar fallos de comunicación.

Por este motivo, una de las tareas más importantes del administrador de red consiste en garantizar que cada equipo disponga de una dirección IP única.

Más adelante estudiaremos cómo pueden asignarse estas direcciones de forma manual o automática.

---

### Una dirección lógica, no física

Es importante no confundir la dirección IP con la dirección MAC.

La **dirección IP** identifica lógicamente un dispositivo dentro de una red y puede modificarse cuando sea necesario.

La **dirección MAC**, por el contrario, identifica físicamente la interfaz de red y suele venir asignada por el fabricante.

En este capítulo nos centraremos exclusivamente en las direcciones IP.

Más adelante estudiaremos cómo ambos tipos de direcciones colaboran para hacer posible la comunicación entre dispositivos.

---

!!! note "Recuerda"

    Una dirección IP es un identificador lógico que permite localizar un dispositivo dentro de una red y enviar correctamente la información hasta él.

!!! tip "¿Sabías que...?"

    Cuando conectas tu ordenador a una red doméstica, al instituto o a Internet, siempre utiliza una dirección IP para poder comunicarse con el resto de dispositivos.

!!! abstract "🛠️ En el siguiente apartado..."

    Ahora que ya sabemos qué es una dirección IP, aprenderemos cómo está formada una dirección IPv4 y qué significado tienen cada uno de sus elementos.

!!! question "Piensa un momento..."

    Imagina una red con cincuenta ordenadores. ¿Qué problemas podrían aparecer si dos de ellos utilizaran exactamente la misma dirección IP?

## 10.2 Estructura de una dirección IPv4

En el apartado anterior hemos aprendido que todos los dispositivos conectados a una red necesitan una dirección IP para poder comunicarse.

Ahora veremos cómo está formada una dirección IPv4 y qué información contiene.

---

### Una dirección IPv4 a simple vista

Observa la siguiente dirección:

```text
192.168.1.20
```

A primera vista puede parecer simplemente una sucesión de números separados por puntos.

Sin embargo, cada uno de esos números forma parte de una estructura perfectamente organizada que permite identificar de manera única un dispositivo dentro de una red.

Todas las direcciones IPv4 siguen este mismo formato.

---

### Los cuatro octetos

Una dirección IPv4 está formada por **cuatro grupos de números**, denominados **octetos**, separados entre sí por puntos.

Por ejemplo:

```text
192 . 168 . 1 . 20
```

Cada uno de estos grupos puede tomar valores comprendidos entre **0 y 255**.

Esto significa que direcciones como las siguientes son válidas:

```text
10.0.0.1

172.16.25.8

192.168.1.120
```

Mientras que otras como:

```text
350.25.10.1

192.168.500.12
```

no son válidas, ya que algunos de sus octetos superan el valor máximo permitido.

---

### ¿Por qué entre 0 y 255?

Cada octeto está formado por **8 bits**.

Como un bit únicamente puede tomar los valores **0** o **1**, cada grupo dispone de **256 combinaciones posibles**, que corresponden a los valores comprendidos entre **0 y 255**.

Por este motivo, ningún octeto puede contener un número superior a **255**.

No es necesario memorizar ahora cómo se obtienen estos valores.

Lo importante es comprender que cada grupo tiene un tamaño fijo y unos límites bien definidos.

Más adelante estudiaremos con mayor detalle la representación binaria de las direcciones IPv4.

---

### Una estructura fácil de leer

Aunque internamente las direcciones IP se almacenan en formato binario, los seres humanos utilizamos la denominada **notación decimal con puntos**.

Esta representación facilita enormemente la lectura y la configuración de los dispositivos de red.

Por ejemplo, resulta mucho más sencillo escribir:

```text
192.168.1.20
```

que su equivalente en binario:

```text
11000000.10101000.00000001.00010100
```

Ambas expresiones representan exactamente la misma dirección IP.

La diferencia es únicamente la forma de escribirla.

<figure class="figura-libro">
  <img
    src="../../assets/images/parte3/capitulo10/figura10_3_4.png"
    alt="Anatomía de una dirección IPv4 y comparación entre su representación decimal y binaria"
  >
  <figcaption>
    <strong>Figuras 10.3 y 10.4.</strong> Anatomía de una dirección IPv4, mostrando su división en cuatro octetos y el rango de valores permitido para cada uno de ellos, junto con la equivalencia entre la representación decimal con puntos utilizada habitualmente por las personas y la representación binaria empleada internamente por los dispositivos de red.
  </figcaption>
</figure>

---

### El siguiente paso

Hasta ahora hemos aprendido que una dirección IPv4 está formada por cuatro octetos y que cada uno puede tomar valores comprendidos entre **0 y 255**.

Sin embargo, todavía queda una cuestión fundamental.

> **¿Qué significado tiene cada uno de esos números?**

En el siguiente apartado descubriremos que una dirección IPv4 se divide en dos partes:

- la **red**, que identifica la red a la que pertenece el dispositivo;
- el **host**, que identifica el equipo concreto dentro de esa red.

Esta división será la base para comprender la máscara de subred y el direccionamiento IPv4.

---

!!! note "Recuerda"

    Una dirección IPv4 está formada por cuatro octetos separados por puntos. Cada octeto puede tomar valores comprendidos entre **0 y 255**.

!!! tip "¿Sabías que...?"

    Aunque normalmente escribimos las direcciones IPv4 en formato decimal, todos los dispositivos las procesan internamente utilizando números binarios.

!!! abstract "🛠️ En el siguiente apartado..."

    Aprenderemos que una dirección IPv4 no es una simple secuencia de números. Cada parte tiene un significado concreto que permite identificar tanto la red como el dispositivo conectado a ella.

!!! question "Piensa un momento..."

    Si dos direcciones IPv4 únicamente se diferencian en el último octeto, ¿crees que podrían pertenecer a la misma red? ¿Por qué?

## 10.3 La parte de red y la parte de host

En el apartado anterior hemos aprendido que una dirección IPv4 está formada por cuatro octetos.

Sin embargo, esos números no se utilizan únicamente para identificar un dispositivo.

Cada dirección IPv4 contiene realmente **dos informaciones diferentes**:

- la red a la que pertenece el dispositivo;
- el propio dispositivo dentro de esa red.

Comprender esta división resulta fundamental para entender cómo funcionan las redes informáticas.

---

### Una ciudad y sus viviendas

Podemos volver a utilizar una comparación con el mundo real.

Imagina una ciudad formada por numerosas calles.

Para localizar una vivienda necesitamos conocer dos datos:

- el nombre de la calle;
- el número de la vivienda.

Muchas personas pueden vivir en la misma calle, pero cada vivienda tiene un número diferente.

En una red informática ocurre algo muy parecido.

Muchos dispositivos pueden pertenecer a la misma red, pero cada uno debe disponer de un identificador diferente dentro de ella.

Por este motivo, una dirección IPv4 se divide en dos partes:

- **Red (Network)**: identifica la red.
- **Host**: identifica el dispositivo dentro de esa red.

---

### Un ejemplo sencillo

Supongamos que varios equipos utilizan las siguientes direcciones:

```text
192.168.1.10

192.168.1.15

192.168.1.20

192.168.1.35
```

A simple vista observamos que todas comienzan por:

```text
192.168.1
```

Esto significa que todos esos equipos pertenecen a la misma red.

Lo único que cambia es el último número, que identifica a cada dispositivo concreto.

Gracias a esta organización pueden existir muchos equipos dentro de una misma red sin que se produzcan conflictos de direcciones.

<figure class="figura-libro">
  <img
    src="../../assets/images/parte3/capitulo10/figura10_5_6.png"
    alt="División de una dirección IPv4 en parte de red y parte de host, y ejemplo de varios dispositivos pertenecientes a la misma red"
  >
  <figcaption>
    <strong>Figuras 10.5 y 10.6.</strong> División conceptual de una dirección IPv4 en parte de red y parte de host, junto con un ejemplo de varios dispositivos que pertenecen a la misma red porque comparten la misma parte de red, diferenciándose únicamente por el identificador de host.
  </figcaption>
</figure>

---

### ¿Cómo sabe el ordenador dónde termina la red?

Hasta ahora hemos supuesto que la red corresponde a los tres primeros octetos y que el último identifica al dispositivo.

Sin embargo, esto **no siempre es así**.

En unas redes la parte correspondiente a la red puede ser mayor y en otras menor.

Por tanto, surge una pregunta muy importante.

> **¿Cómo sabe un ordenador qué parte de la dirección identifica la red y cuál identifica el host?**

La respuesta la estudiaremos en el siguiente apartado mediante la **máscara de subred**.

La máscara indica exactamente dónde termina la parte de red y dónde comienza la parte correspondiente al dispositivo.

---

### ¿Por qué es tan importante esta división?

Distinguir correctamente entre la red y el host permite que los dispositivos respondan a preguntas fundamentales como:

- ¿El destinatario pertenece a mi misma red?
- ¿Puedo comunicarme directamente con él?
- ¿Debo enviar la información a otro dispositivo para que continúe el recorrido?

Estas decisiones se toman continuamente durante el funcionamiento de una red y constituyen la base del direccionamiento IPv4.

En los próximos capítulos veremos cómo utilizan esta información los routers para reenviar los paquetes hacia otras redes.

---

!!! note "Recuerda"

    Una dirección IPv4 identifica simultáneamente la red a la que pertenece un dispositivo y el propio dispositivo dentro de esa red.

!!! tip "¿Sabías que...?"

    Miles de ordenadores pueden compartir la misma red. Lo que nunca puede repetirse es la parte correspondiente al host dentro de esa misma red.

!!! abstract "🛠️ En el siguiente apartado..."

    Estudiaremos la máscara de subred, el elemento que permite distinguir exactamente qué parte de una dirección IPv4 corresponde a la red y cuál identifica al dispositivo.

!!! question "Piensa un momento..."

    Observa estas dos direcciones:

    - 192.168.1.25
    - 192.168.1.80

    Sin conocer todavía la máscara de subred, ¿qué parte crees que tienen en común? ¿Qué parte parece identificar a cada equipo?

## 10.4 La máscara de subred

En el apartado anterior hemos aprendido que una dirección IPv4 se divide en dos partes:

- la **red**, que identifica la red a la que pertenece el dispositivo;
- el **host**, que identifica al equipo dentro de esa red.

Sin embargo, todavía queda una cuestión sin resolver.

> **¿Cómo sabe un ordenador dónde termina la parte de red y dónde comienza la parte de host?**

La respuesta es sencilla.

Para ello utiliza un dato adicional denominado **máscara de subred**.

---

### ¿Qué es una máscara de subred?

La **máscara de subred** es un valor asociado a una dirección IPv4 que indica qué parte de esa dirección identifica la red y qué parte identifica al dispositivo.

Podemos imaginarla como una plantilla colocada sobre una dirección IP.

Gracias a esa plantilla, el ordenador puede distinguir qué números pertenecen a la red y cuáles corresponden al host.

Sin la máscara de subred sería imposible interpretar correctamente una dirección IPv4.

---

### Un ejemplo muy sencillo

Supongamos que un ordenador tiene configurados los siguientes datos:

```text
Dirección IP:      192.168.1.20
Máscara:           255.255.255.0
```

Por el momento no es necesario comprender el significado de esos números.

Lo importante es saber que la máscara indica que:

```text
192.168.1 | 20
```

es decir,

- **192.168.1** corresponde a la red.
- **20** identifica el dispositivo.

Más adelante aprenderemos cómo obtiene el ordenador esta información.

---

### ¿Todas las redes utilizan la misma máscara?

No.

Dependiendo del tamaño de la red, la división entre la parte de red y la parte de host puede cambiar.

Por ejemplo:

- una pequeña oficina necesita pocas direcciones;
- una universidad necesita muchas más;
- un proveedor de Internet necesita millones.

Por este motivo existen distintas máscaras de subred, adaptadas al número de dispositivos que deben formar parte de cada red.

En este capítulo trabajaremos principalmente con la máscara:

```text
255.255.255.0
```

ya que es la más habitual en las redes locales sencillas.

---

### ¿Por qué es tan importante?

La máscara permite que un dispositivo responda automáticamente a preguntas como:

- ¿El destinatario pertenece a mi misma red?
- ¿Puedo enviarle la información directamente?
- ¿Necesito utilizar un router para llegar hasta él?

Sin la máscara de subred el ordenador no podría tomar ninguna de estas decisiones.

Por ello, cada vez que configuramos una dirección IPv4 también debemos configurar su máscara correspondiente.

---

### Un concepto que utilizaremos continuamente

A partir de este momento, siempre que aparezca una dirección IPv4 irá acompañada de su máscara de subred.

Ambos valores forman un único conjunto y deben interpretarse siempre de manera conjunta.

En los próximos apartados aprenderemos a identificar fácilmente la red, los hosts disponibles y las direcciones especiales utilizando la máscara de subred.

<figure class="figura-libro">
  <img
    src="../../assets/images/parte3/capitulo10/figura10_7_8.png"
    alt="La máscara de subred como plantilla y comparación de una misma dirección IP interpretada con máscaras diferentes"
  >
  <figcaption>
    <strong>Figuras 10.7 y 10.8.</strong> La máscara de subred permite determinar qué parte de una dirección IPv4 identifica la red y cuál corresponde al host. Además, una misma dirección IP puede interpretarse de forma diferente según la máscara utilizada, por lo que ambos valores deben considerarse siempre de manera conjunta.
  </figcaption>
</figure>

---

!!! note "Recuerda"

    La máscara de subred indica qué parte de una dirección IPv4 identifica la red y qué parte identifica el dispositivo.

!!! tip "¿Sabías que...?"

    Dos ordenadores pueden tener direcciones IP muy parecidas, pero pertenecer a redes completamente diferentes si utilizan máscaras de subred distintas.

!!! abstract "🛠️ En el siguiente apartado..."

    Utilizaremos la máscara para localizar la dirección de red, la dirección de difusión (*broadcast*) y el rango de direcciones disponibles para los dispositivos de una red.

!!! question "Piensa un momento..."

    Si dos ordenadores tienen exactamente la misma dirección IP pero utilizan máscaras de subred diferentes, ¿crees que siempre pertenecerán a la misma red? Razona tu respuesta.

## 10.5 Dirección de red, dirección de difusión y direcciones de host

Ya sabemos que una dirección IPv4 debe interpretarse junto con su máscara de subred.

Gracias a esa información podemos identificar tres tipos de direcciones fundamentales dentro de cualquier red:

- la **dirección de red**;
- la **dirección de difusión (broadcast)**;
- las **direcciones de host**, que son las que se asignan a los dispositivos.

Comprender estas tres direcciones es imprescindible para configurar correctamente una red local.

---

### La dirección de red

La **dirección de red** identifica a toda la red, no a un dispositivo concreto.

Todos los equipos pertenecientes a la misma red comparten esta dirección como referencia.

Por ejemplo, en una red configurada con:

```text
Dirección IP: 192.168.1.20
Máscara:      255.255.255.0
```

la dirección de red es:

```text
192.168.1.0
```

Esta dirección identifica la red completa y **no puede asignarse a ningún dispositivo**.

---

### La dirección de difusión (*broadcast*)

La **dirección de difusión** permite enviar un mismo mensaje a todos los dispositivos pertenecientes a una red.

En nuestro ejemplo:

```text
Red: 192.168.1.0
Máscara: 255.255.255.0
```

la dirección de difusión es:

```text
192.168.1.255
```

Cuando un equipo envía información a esta dirección, todos los dispositivos de esa red reciben el mensaje.

Al igual que ocurre con la dirección de red, **la dirección de difusión tampoco puede asignarse a un dispositivo**.

---

### Las direcciones de host

Entre la dirección de red y la dirección de difusión se encuentran las direcciones que pueden asignarse a los equipos.

Siguiendo el ejemplo anterior, los dispositivos podrían utilizar direcciones comprendidas entre:

```text
192.168.1.1

y

192.168.1.254
```

Cada una de estas direcciones identifica de forma única un dispositivo dentro de la red.

Dos equipos nunca deben utilizar simultáneamente la misma dirección IP.

---

### Resumen del ejemplo

Para la red:

```text
Dirección IP: 192.168.1.20
Máscara:      255.255.255.0
```

obtenemos:

| Elemento | Valor |
|----------|-------|
| Dirección de red | **192.168.1.0** |
| Primer host disponible | **192.168.1.1** |
| Último host disponible | **192.168.1.254** |
| Dirección de difusión (*broadcast*) | **192.168.1.255** |

No es necesario memorizar estos valores.

Lo importante es comprender qué representa cada uno de ellos.

Más adelante aprenderemos a obtenerlos para cualquier dirección y cualquier máscara.

<figure class="figura-libro">
  <img
    src="../../assets/images/parte3/capitulo10/figura10_9_10.png"
    alt="Distribución de las direcciones IPv4 dentro de una red y ejemplo de asignación de direcciones a varios dispositivos"
  >
  <figcaption>
    <strong>Figuras 10.9 y 10.10.</strong> Distribución de las direcciones IPv4 en una red con máscara <code>255.255.255.0</code>, distinguiendo la dirección de red, las direcciones de host y la dirección de difusión (*broadcast*). La segunda figura muestra un ejemplo de asignación de direcciones a varios dispositivos pertenecientes a la misma red local.
  </figcaption>
</figure>

---

### ¿Por qué es importante conocer estas direcciones?

Cuando configuramos una red local debemos asignar a cada dispositivo una dirección válida.

Si por error utilizamos:

- la dirección de red, o
- la dirección de difusión,

el dispositivo no podrá comunicarse correctamente con el resto de equipos.

Por este motivo, conocer el rango de direcciones disponibles es una tarea básica para cualquier técnico en redes.

---

!!! note "Recuerda"

    En una red IPv4 existen direcciones reservadas para identificar la red y para realizar envíos por difusión. Solo las direcciones de host pueden asignarse a los dispositivos.

!!! tip "¿Sabías que...?"

    Cuando un ordenador necesita localizar determinados servicios en la red, puede utilizar mensajes de difusión (*broadcast*) que son recibidos simultáneamente por todos los equipos de la misma red.

!!! abstract "🛠️ En el siguiente apartado..."

    Después de conocer las direcciones especiales de una red, aprenderemos a diferenciar las direcciones IPv4 públicas y privadas y comprenderemos por qué los dispositivos de una red doméstica no utilizan las mismas direcciones que los servidores de Internet.

!!! question "Piensa un momento..."

    Si una red utiliza la dirección **192.168.1.0** para identificar la propia red y **192.168.1.255** como dirección de difusión, ¿qué intervalo de direcciones puede asignarse a los ordenadores?

## 10.6 Direcciones IPv4 públicas y privadas

En los apartados anteriores hemos trabajado con direcciones como:

```text
192.168.1.20
```

Este tipo de direcciones son muy habituales en viviendas, centros educativos y pequeñas empresas.

Sin embargo, si observamos la dirección IP de un servidor de Internet veremos que normalmente es muy diferente.

¿Por qué ocurre esto?

La respuesta es que **no todas las direcciones IPv4 tienen la misma finalidad**.

Existen dos grandes categorías:

- direcciones **privadas**;
- direcciones **públicas**.

Comprender esta diferencia resulta fundamental para entender cómo funcionan las redes actuales.

---

### Direcciones IPv4 privadas

Las **direcciones privadas** están diseñadas para utilizarse únicamente dentro de redes locales.

Se emplean en:

- viviendas;
- centros educativos;
- empresas;
- oficinas;
- laboratorios;
- redes industriales.

Estas direcciones **no pueden utilizarse directamente en Internet**.

Por este motivo, millones de redes diferentes pueden reutilizar exactamente las mismas direcciones privadas sin interferirse entre sí.

Los tres rangos reservados para redes privadas son:

| Rango privado | Uso habitual |
|---------------|--------------|
| **10.0.0.0 – 10.255.255.255** | Grandes organizaciones |
| **172.16.0.0 – 172.31.255.255** | Redes de tamaño medio |
| **192.168.0.0 – 192.168.255.255** | Redes domésticas, centros educativos y pequeñas empresas |

El rango **192.168.x.x** es el más frecuente en las redes locales sencillas, por lo que será el que utilizaremos durante este libro.

---

### Direcciones IPv4 públicas

Las **direcciones públicas** identifican dispositivos que pueden comunicarse directamente a través de Internet.

Estas direcciones deben ser **únicas en todo el mundo**.

Por ejemplo:

- servidores web;
- servidores de correo electrónico;
- servidores DNS;
- servicios en la nube.

Todos ellos utilizan direcciones públicas para que puedan ser localizados desde cualquier lugar de Internet.

A diferencia de las direcciones privadas, una dirección pública no puede repetirse.

---

### ¿Cómo accede una red privada a Internet?

Si los ordenadores de una vivienda utilizan direcciones privadas, ¿cómo pueden navegar por Internet?

La respuesta está en el **router**.

El router conecta la red local con Internet y dispone de una dirección IP pública asignada por el proveedor de acceso.

Cuando un ordenador de la red desea acceder a Internet, el router actúa como intermediario entre la red privada y la red pública.

En capítulos posteriores estudiaremos con más detalle este proceso.

---

### ¿Cómo identificar una dirección privada?

Con un poco de práctica resulta muy sencillo reconocerlas.

Por ejemplo:

| Dirección | ¿Pública o privada? |
|-----------|---------------------|
| **192.168.1.20** | Privada |
| **10.5.18.2** | Privada |
| **172.20.8.35** | Privada |
| **8.8.8.8** | Pública |
| **1.1.1.1** | Pública |

No es necesario memorizar todos los rangos desde el primer momento.

Con el uso continuado terminarás reconociéndolos de forma automática.

---

### ¿Por qué existen las direcciones privadas?

El número de direcciones IPv4 disponibles es limitado.

Permitir que millones de redes domésticas reutilicen los mismos rangos privados evita consumir direcciones públicas innecesariamente.

Gracias a esta estrategia ha sido posible prolongar durante muchos años la utilización de IPv4 en Internet.

Más adelante estudiaremos otras tecnologías que también ayudan a optimizar el uso de las direcciones IPv4.

<figure class="figura-libro">
  <img
    src="../../assets/images/parte3/capitulo10/figura10_11_12.png"
    alt="Comparación entre direcciones IPv4 públicas y privadas y rangos de direcciones IPv4 privadas"
  >
  <figcaption>
    <strong>Figuras 10.11 y 10.12.</strong> Comparación entre el uso de direcciones IPv4 privadas en una red local y direcciones IPv4 públicas en Internet. La segunda figura resume los tres rangos reservados para direcciones privadas y muestra sus usos más habituales, destacando el rango <code>192.168.0.0/16</code>, utilizado en los ejemplos de este libro.
  </figcaption>
</figure>

---

!!! note "Recuerda"

    Las direcciones privadas solo pueden utilizarse dentro de redes locales. Las direcciones públicas permiten identificar dispositivos accesibles desde Internet.

!!! tip "¿Sabías que...?"

    Es muy probable que el ordenador o el teléfono móvil desde el que estás leyendo este libro utilice en este momento una dirección IPv4 privada.

!!! abstract "🛠️ En el siguiente apartado..."

    Después de conocer las direcciones públicas y privadas estudiaremos otras direcciones IPv4 especiales que aparecen con frecuencia durante la configuración y el diagnóstico de redes.

!!! question "Piensa un momento..."

    Si dos viviendas diferentes utilizan la dirección **192.168.1.20** para uno de sus ordenadores, ¿por qué no se produce ningún conflicto entre ellas?

## 10.7 Direcciones IPv4 especiales

Además de las direcciones públicas y privadas, existen algunas direcciones IPv4 reservadas para funciones concretas.

Aunque no suelen asignarse manualmente a los dispositivos, es muy frecuente encontrarlas durante la configuración de equipos o cuando se realiza el diagnóstico de problemas de red.

Conocerlas permitirá interpretar correctamente muchos mensajes del sistema operativo y comprender mejor el funcionamiento de las comunicaciones.

---

### La dirección de bucle local (Loopback)

La dirección:

```text
127.0.0.1
```

recibe el nombre de **dirección de bucle local** o **loopback**.

No identifica a ningún equipo de la red.

Siempre hace referencia al propio ordenador desde el que se utiliza.

Cuando un programa envía información a **127.0.0.1**, los datos nunca abandonan el equipo.

Esta dirección resulta muy útil para comprobar que la pila TCP/IP funciona correctamente.

Por ejemplo, el siguiente comando verifica el funcionamiento básico del protocolo TCP/IP:

```bash
ping 127.0.0.1
```

Si el comando responde correctamente, significa que el protocolo TCP/IP está funcionando en el propio equipo.

---

### La dirección 0.0.0.0

La dirección:

```text
0.0.0.0
```

puede aparecer en distintas situaciones.

En un equipo recién iniciado suele indicar que todavía no dispone de una dirección IP válida.

También se utiliza internamente para representar la ausencia de una dirección concreta.

No debe asignarse manualmente a un dispositivo.

---

### La dirección de difusión limitada

La dirección:

```text
255.255.255.255
```

representa una **difusión limitada** (*limited broadcast*).

Permite enviar un mensaje a todos los dispositivos de la red local sin necesidad de conocer previamente la dirección de difusión de esa red.

Los routers no reenvían este tipo de mensajes, por lo que solo tienen validez dentro de la red local.

---

### Direcciones reservadas

Existen otros rangos reservados para usos específicos, como pruebas, documentación o investigación.

No es necesario conocerlos con detalle en este nivel.

Lo importante es saber que no todas las direcciones IPv4 pueden asignarse libremente a los dispositivos.

Siempre deben respetarse los rangos reservados y las direcciones especiales definidos por los estándares de Internet.

---

### ¿Cuándo veremos estas direcciones?

Durante las prácticas de este módulo aparecerán con frecuencia.

Por ejemplo:

- al utilizar el comando **ping**;
- al comprobar la configuración IP de un equipo;
- al analizar capturas de tráfico con Wireshark;
- al diagnosticar problemas de conectividad.

Por este motivo conviene reconocerlas desde este momento.

<figure class="figura-libro">
  <img
    src="../../assets/images/parte3/capitulo10/figura10_13_14.png"
    alt="Direcciones IPv4 especiales y uso del comando ping 127.0.0.1"
  >
  <figcaption>
    <strong>Figuras 10.13 y 10.14.</strong> Principales direcciones IPv4 especiales utilizadas en redes informáticas y ejemplo del uso del comando <code>ping 127.0.0.1</code> para comprobar el funcionamiento de la pila TCP/IP del propio equipo. La dirección de bucle local permite realizar esta comprobación sin que los paquetes abandonen el ordenador.
  </figcaption>
</figure>

---

!!! note "Recuerda"

    Algunas direcciones IPv4 tienen funciones especiales y no deben utilizarse como direcciones normales de los dispositivos.

!!! tip "¿Sabías que...?"

    Muchos técnicos utilizan el comando `ping 127.0.0.1` como una de las primeras comprobaciones cuando sospechan que existe un problema con la configuración TCP/IP de un ordenador.

!!! abstract "🛠️ En el siguiente apartado..."

    Después de conocer los principales tipos de direcciones IPv4 aprenderemos a configurar correctamente una dirección IP en Windows y Linux y a comprobar su funcionamiento mediante las herramientas básicas del sistema operativo.

!!! question "Piensa un momento..."

    Si ejecutas el comando `ping 127.0.0.1` y recibes respuesta, ¿qué parte del sistema estás comprobando realmente? ¿La conexión con la red o el funcionamiento del propio equipo?

## 10.8 Configuración de una dirección IPv4

Hasta ahora hemos estudiado cómo están formadas las direcciones IPv4 y cuál es la función de cada uno de sus elementos.

El siguiente paso consiste en aprender a configurar correctamente estos datos en un equipo para que pueda comunicarse con el resto de dispositivos de la red.

Aunque cada sistema operativo presenta una interfaz diferente, todos ellos solicitan prácticamente la misma información.

---

### ¿Qué datos son necesarios?

Para configurar manualmente una dirección IPv4 normalmente debemos indicar los siguientes parámetros:

| Parámetro | Función |
|-----------|---------|
| Dirección IPv4 | Identifica el dispositivo dentro de la red. |
| Máscara de subred | Indica qué parte de la dirección corresponde a la red y cuál al host. |
| Puerta de enlace (*Gateway*) | Dirección del router que permite acceder a otras redes o a Internet. |
| Servidor DNS | Permite traducir nombres de dominio, como `www.ejemplo.com`, en direcciones IP. |

En este capítulo nos centraremos principalmente en la dirección IP y la máscara de subred.

La puerta de enlace y el servidor DNS se estudiarán con mayor detalle en capítulos posteriores.

---

### Un ejemplo de configuración

Supongamos que queremos configurar el ordenador de Ana dentro de la red local.

Podríamos utilizar la siguiente configuración:

| Parámetro | Valor |
|-----------|-------|
| Dirección IPv4 | **192.168.1.20** |
| Máscara de subred | **255.255.255.0** |
| Puerta de enlace | **192.168.1.1** |
| Servidor DNS | **192.168.1.1** |

Con estos datos el equipo podrá comunicarse correctamente con el resto de dispositivos de la red y acceder a Internet a través del router.

---

### Configuración manual y automática

Existen dos formas principales de obtener una dirección IPv4.

#### Configuración manual

El administrador introduce todos los parámetros de forma explícita.

Este método ofrece un control total sobre la configuración y suele utilizarse en:

- servidores;
- impresoras de red;
- cámaras IP;
- dispositivos industriales;
- equipos que deben mantener siempre la misma dirección.

---

#### Configuración automática

El propio equipo obtiene la configuración de forma automática al conectarse a la red.

Este sistema simplifica enormemente la administración, especialmente cuando existen muchos dispositivos.

Más adelante estudiaremos el protocolo encargado de realizar este proceso de manera automática.

---

### Buenas prácticas

Al configurar una dirección IPv4 conviene seguir algunas recomendaciones:

- comprobar que la dirección pertenece a la misma red que el resto de dispositivos;
- evitar utilizar una dirección ya asignada a otro equipo;
- no utilizar la dirección de red ni la dirección de difusión (*broadcast*);
- verificar que la máscara de subred es correcta;
- comprobar la conectividad una vez finalizada la configuración.

Seguir estas pautas reduce la mayoría de los problemas habituales de configuración en redes locales.

---

### Preparados para la práctica

Ahora ya conocemos los parámetros que necesita un equipo para comunicarse correctamente.

En el siguiente apartado veremos cómo introducir esta información tanto en Windows como en Linux y comprobaremos el funcionamiento de la configuración utilizando las herramientas básicas del sistema operativo.

<figure class="figura-libro">
  <img
    src="../../assets/images/parte3/capitulo10/figura10_15_16.png"
    alt="Parámetros necesarios para configurar una dirección IPv4 y comparación entre configuración manual y automática"
  >
  <figcaption>
    <strong>Figuras 10.15 y 10.16.</strong> Parámetros básicos necesarios para configurar una dirección IPv4 en un equipo y comparación entre la configuración manual, realizada por el administrador, y la configuración automática, en la que el sistema obtiene los parámetros de red de forma automática.
  </figcaption>
</figure>

---

!!! note "Recuerda"

    Una configuración IPv4 correcta requiere, como mínimo, una dirección IP y una máscara de subred. En la mayoría de las redes también será necesario indicar la puerta de enlace y el servidor DNS.

!!! tip "¿Sabías que...?"

    En muchas redes domésticas y empresariales los equipos obtienen automáticamente todos estos parámetros al conectarse, sin que el usuario tenga que configurarlos manualmente.

!!! abstract "🛠️ En el siguiente apartado..."

    Configuraremos paso a paso una dirección IPv4 en Windows y en Linux y comprobaremos su funcionamiento mediante comandos básicos de diagnóstico.

!!! question "Piensa un momento..."

    Si configuras correctamente una dirección IP pero introduces una máscara de subred incorrecta, ¿crees que el equipo podrá comunicarse con el resto de dispositivos de la red? Razona tu respuesta.

# Práctica guiada. Configuración manual de una dirección IPv4

## Objetivo

En esta práctica aprenderás a configurar manualmente una dirección IPv4 en un ordenador y comprobarás que la comunicación con el resto de la red funciona correctamente utilizando las herramientas básicas del sistema operativo.

Al finalizar serás capaz de:

- identificar los parámetros necesarios para configurar una dirección IPv4;
- configurar una dirección IP manualmente;
- comprobar la configuración realizada;
- verificar la conectividad mediante el comando `ping`.

---

## Situación de partida

La empresa acaba de instalar un nuevo ordenador para Ana.

El administrador de la red todavía no ha configurado la conexión.

Dispones de los siguientes datos:

| Parámetro | Valor |
|-----------|-------|
| Dirección IPv4 | **192.168.1.20** |
| Máscara de subred | **255.255.255.0** |
| Puerta de enlace | **192.168.1.1** |
| Servidor DNS | **192.168.1.1** |

Tu misión consiste en introducir correctamente esta configuración y comprobar que el equipo puede comunicarse con el servidor de la empresa.

---

# Paso 1. Analiza la configuración

Antes de comenzar, observa detenidamente los datos suministrados.

Responde oralmente a las siguientes preguntas:

- ¿Qué dirección identifica al ordenador de Ana?
- ¿Cuál corresponde al router?
- ¿Qué máscara utiliza la red?
- ¿Qué función desempeña el servidor DNS?

Comprender estos datos facilitará enormemente la configuración posterior.

---

# Paso 2. Abre la configuración de red

Accede a la configuración de las interfaces de red de tu sistema operativo.

Localiza la tarjeta Ethernet o la conexión Wi-Fi que utilizarás durante la práctica.

Comprueba si el equipo está obteniendo actualmente la dirección IP de forma automática o manual.

<figure class="figura-libro">
  <img
    src="../../assets/images/parte3/capitulo10/figura10_17_18.png"
    alt="Apertura de la configuración IPv4 en Windows y Linux"
  >
  <figcaption>
    <strong>Figuras 10.17 y 10.18.</strong> Acceso a la configuración IPv4 en Windows y Linux. Aunque la apariencia de las ventanas varía según el sistema operativo y su versión, en ambos casos es posible acceder a la configuración de la interfaz de red y modificar manualmente los parámetros IPv4.
  </figcaption>
</figure>

---

# Paso 3. Configura la dirección IPv4

Introduce los siguientes parámetros:

| Parámetro | Valor |
|-----------|-------|
| Dirección IPv4 | **192.168.1.20** |
| Máscara de subred | **255.255.255.0** |
| Puerta de enlace | **192.168.1.1** |
| Servidor DNS | **192.168.1.1** |

Guarda los cambios realizados.

---

# Paso 4. Comprueba la configuración

Abre una ventana del terminal.

Ejecuta el comando adecuado según tu sistema operativo.

**Windows**

```powershell
ipconfig
```

**Linux**

```bash
ip addr
```

Verifica que la dirección IP configurada coincide con la proporcionada al inicio de la práctica.

---

# Paso 5. Comprueba la comunicación con el propio equipo

Ejecuta:

```bash
ping 127.0.0.1
```

Responde:

- ¿Se reciben respuestas?
- ¿Qué significa este resultado?

---

# Paso 6. Comprueba la comunicación con el router

Ejecuta:

```bash
ping 192.168.1.1
```

Si la configuración es correcta, el router responderá a las peticiones.

---

# Paso 7. Comprueba la comunicación con otro equipo

Si dispones de un servidor o de otro ordenador conectado a la misma red, ejecuta:

```bash
ping 192.168.1.10
```

(o la dirección que indique el profesor).

Anota el resultado obtenido.

<figure class="figura-libro">
  <img
    src="../../assets/images/parte3/capitulo10/figura10_19_20.png"
    alt="Comprobación de la configuración IPv4 y pruebas de conectividad"
  >
  <figcaption>
    <strong>Figuras 10.19 y 10.20.</strong> Verificación de la configuración IPv4 mediante las herramientas del sistema operativo y comprobación de la conectividad utilizando el comando <code>ping</code>. Estas pruebas permiten confirmar que la configuración es correcta y que el equipo puede comunicarse con otros dispositivos de la red.
  </figcaption>
</figure>

---

# Paso 8. Analiza los resultados

Completa la siguiente tabla.

| Comprobación | Resultado |
|--------------|-----------|
| Dirección IP configurada correctamente | |
| Ping a 127.0.0.1 | |
| Ping al router | |
| Ping a otro equipo | |

---

# Actividades

1. Explica la función de cada uno de los parámetros configurados.

2. ¿Qué ocurriría si dos ordenadores utilizaran la misma dirección IPv4?

3. ¿Qué sucedería si la máscara de subred fuera incorrecta?

4. ¿Por qué es recomendable comprobar la configuración mediante `ping`?

5. ¿Qué diferencia existe entre comprobar `127.0.0.1` y comprobar la dirección del router?

---

# Conclusiones

Después de realizar esta práctica ya eres capaz de:

- configurar manualmente una dirección IPv4;
- interpretar los parámetros básicos de configuración;
- comprobar el funcionamiento de la configuración realizada;
- verificar la conectividad utilizando las herramientas básicas del sistema operativo.

Estas tareas forman parte del trabajo cotidiano de cualquier técnico encargado de instalar y mantener redes locales.

# Conceptos clave

**Broadcast (dirección de difusión):** dirección IPv4 reservada que permite enviar un mismo mensaje a todos los dispositivos de una red local.

**Configuración automática:** método mediante el cual un equipo obtiene automáticamente los parámetros de red necesarios para comunicarse.

**Configuración manual:** procedimiento por el que un administrador introduce manualmente los parámetros de configuración de una dirección IPv4.

**Dirección de difusión limitada:** dirección especial **255.255.255.255**, utilizada para enviar mensajes a todos los dispositivos de la red local.

**Dirección de host:** parte de una dirección IPv4 que identifica de forma única un dispositivo dentro de una red.

**Dirección de red:** dirección que identifica una red completa y que no puede asignarse a un dispositivo.

**Dirección IPv4:** identificador lógico formado por cuatro octetos que permite identificar un dispositivo dentro de una red.

**Dirección privada:** dirección IPv4 reservada para redes locales y que no puede utilizarse directamente en Internet.

**Dirección pública:** dirección IPv4 única en Internet que identifica dispositivos accesibles desde redes externas.

**Gateway (puerta de enlace):** dirección del router utilizada para comunicar una red local con otras redes o con Internet.

**Host:** dispositivo conectado a una red que dispone de una dirección IP propia.

**Loopback:** dirección especial **127.0.0.1** que identifica siempre al propio equipo y permite comprobar el funcionamiento de la pila TCP/IP.

**Máscara de subred:** valor asociado a una dirección IPv4 que indica qué parte identifica la red y cuál corresponde al host.

**Octeto:** cada uno de los cuatro grupos de ocho bits que forman una dirección IPv4.

**Pila TCP/IP:** conjunto de protocolos que hacen posible la comunicación entre dispositivos conectados a una red.

**Ping:** herramienta de diagnóstico que permite comprobar la conectividad entre dispositivos enviando mensajes ICMP.

**Red:** conjunto de dispositivos que pueden comunicarse entre sí utilizando protocolos comunes.

**Servidor DNS:** servidor encargado de traducir nombres de dominio en direcciones IP.

**Subred:** división lógica de una red IP que agrupa un conjunto de dispositivos bajo una misma dirección de red.

**TCP/IP:** arquitectura de protocolos utilizada por Internet y por la mayoría de las redes actuales.

# Conceptos clave

**Broadcast (dirección de difusión):** dirección IPv4 reservada que permite enviar un mismo mensaje a todos los dispositivos de una red local.

**Configuración automática:** método mediante el cual un equipo obtiene automáticamente los parámetros de red necesarios para comunicarse.

**Configuración manual:** procedimiento por el que un administrador introduce manualmente los parámetros de configuración de una dirección IPv4.

**Dirección de difusión limitada:** dirección especial **255.255.255.255**, utilizada para enviar mensajes a todos los dispositivos de la red local.

**Dirección de host:** parte de una dirección IPv4 que identifica de forma única un dispositivo dentro de una red.

**Dirección de red:** dirección que identifica una red completa y que no puede asignarse a un dispositivo.

**Dirección IPv4:** identificador lógico formado por cuatro octetos que permite identificar un dispositivo dentro de una red.

**Dirección privada:** dirección IPv4 reservada para redes locales y que no puede utilizarse directamente en Internet.

**Dirección pública:** dirección IPv4 única en Internet que identifica dispositivos accesibles desde redes externas.

**Gateway (puerta de enlace):** dirección del router utilizada para comunicar una red local con otras redes o con Internet.

**Host:** dispositivo conectado a una red que dispone de una dirección IP propia.

**Loopback:** dirección especial **127.0.0.1** que identifica siempre al propio equipo y permite comprobar el funcionamiento de la pila TCP/IP.

**Máscara de subred:** valor asociado a una dirección IPv4 que indica qué parte identifica la red y cuál corresponde al host.

**Octeto:** cada uno de los cuatro grupos de ocho bits que forman una dirección IPv4.

**Pila TCP/IP:** conjunto de protocolos que hacen posible la comunicación entre dispositivos conectados a una red.

**Ping:** herramienta de diagnóstico que permite comprobar la conectividad entre dispositivos enviando mensajes ICMP.

**Red:** conjunto de dispositivos que pueden comunicarse entre sí utilizando protocolos comunes.

**Servidor DNS:** servidor encargado de traducir nombres de dominio en direcciones IP.

**Subred:** división lógica de una red IP que agrupa un conjunto de dispositivos bajo una misma dirección de red.

**TCP/IP:** arquitectura de protocolos utilizada por Internet y por la mayoría de las redes actuales.

# Cuestionario de autoevaluación

## Preguntas tipo test

### 1.

¿Cuál es la función principal de una dirección IPv4?

a) Aumentar la velocidad de transmisión de la red.

b) Identificar de forma lógica un dispositivo dentro de una red.

c) Sustituir la dirección MAC del equipo.

d) Indicar la velocidad de la tarjeta de red.

---

### 2.

¿Cuántos octetos forman una dirección IPv4?

a) Dos.

b) Tres.

c) Cuatro.

d) Ocho.

---

### 3.

¿Cuál es el rango de valores permitido para cada octeto de una dirección IPv4?

a) De 0 a 128.

b) De 1 a 255.

c) De 0 a 255.

d) De 0 a 512.

---

### 4.

¿Qué elemento indica qué parte de una dirección IPv4 corresponde a la red y cuál al host?

a) El servidor DNS.

b) La puerta de enlace.

c) La máscara de subred.

d) El protocolo TCP.

---

### 5.

¿Cuál de las siguientes direcciones identifica normalmente la red en una configuración con máscara 255.255.255.0?

a) 192.168.1.1

b) 192.168.1.20

c) 192.168.1.0

d) 192.168.1.255

---

### 6.

¿Qué dirección IPv4 corresponde al bucle local (*loopback*)?

a) 255.255.255.255

b) 127.0.0.1

c) 0.0.0.0

d) 192.168.1.1

---

### 7.

¿Cuál de las siguientes direcciones pertenece a un rango privado?

a) 8.8.8.8

b) 1.1.1.1

c) 192.168.1.20

d) 93.184.216.34

---

### 8.

¿Qué dispositivo permite comunicar una red local con otras redes o con Internet?

a) El switch.

b) La impresora.

c) El router.

d) El servidor DNS.

---

### 9.

¿Qué comando permite comprobar el funcionamiento de la pila TCP/IP del propio equipo?

a) ipconfig

b) ping 127.0.0.1

c) ip addr

d) tracert

---

### 10.

¿Cuál de los siguientes parámetros es imprescindible para que un equipo pueda comunicarse correctamente dentro de una red IPv4?

a) Dirección IP.

b) Nombre del equipo.

c) Usuario del sistema.

d) Grupo de trabajo.

---

# Preguntas de respuesta corta

### 11.

Explica con tus propias palabras qué es una dirección IPv4.

---

### 12.

¿Por qué una dirección IPv4 se divide en una parte de red y una parte de host?

---

### 13.

¿Qué función desempeña la máscara de subred?

---

### 14.

¿Por qué no pueden asignarse a un ordenador la dirección de red ni la dirección de difusión (*broadcast*)?

---

### 15.

Indica dos diferencias entre una dirección IPv4 pública y una privada.

---

### 16.

¿Qué utilidad tiene la dirección 127.0.0.1?

---

### 17.

¿Qué información suele ser necesaria para configurar manualmente una dirección IPv4?

---

### 18.

¿Qué diferencias existen entre una configuración manual y una configuración automática?

---

### 19.

¿Por qué resulta útil utilizar el comando `ping` después de configurar una dirección IPv4?

---

### 20.

Explica qué pasos seguirías para comprobar que una configuración IPv4 se ha realizado correctamente.

---

# Actividad de reflexión

Un compañero configura un ordenador con los siguientes parámetros:

- Dirección IPv4: **192.168.1.255**
- Máscara: **255.255.255.0**
- Puerta de enlace: **192.168.1.1**

Sin embargo, el equipo no consigue comunicarse con el resto de dispositivos de la red.

Responde a las siguientes cuestiones:

- ¿Qué error se ha cometido durante la configuración?
- ¿Cómo lo corregirías?
- ¿Qué comprobaciones realizarías para verificar que el problema ha quedado resuelto?

# Reto final

## Configura la red de una pequeña oficina

Una pequeña empresa acaba de instalar una nueva red local formada por:

- 1 router.
- 1 switch.
- 1 servidor.
- 4 ordenadores.
- 1 impresora de red.

Todos los dispositivos deben pertenecer a la misma red y poder comunicarse correctamente entre sí.

El administrador ha decidido utilizar la red:

```text
192.168.1.0
Máscara: 255.255.255.0
```

Tu misión consiste en planificar el direccionamiento IPv4 de la oficina, configurar los equipos y comprobar que toda la red funciona correctamente.

---

# Parte 1. Identificación de direcciones

Completa la siguiente tabla.

| Elemento | Dirección IPv4 |
|----------|----------------|
| Dirección de red | |
| Primer host disponible | |
| Último host disponible | |
| Dirección de difusión (*broadcast*) | |

---

# Parte 2. Asignación de direcciones

Asigna una dirección IPv4 válida a cada dispositivo.

| Dispositivo | Dirección IPv4 |
|-------------|----------------|
| Router | |
| Servidor | |
| PC de Ana | |
| PC 2 | |
| PC 3 | |
| PC 4 | |
| Impresora | |

Justifica brevemente por qué todas las direcciones elegidas son válidas.

---

# Parte 3. Configuración IPv4

Indica qué parámetros configurarías en el ordenador de Ana.

| Parámetro | Valor |
|-----------|-------|
| Dirección IPv4 | |
| Máscara | |
| Puerta de enlace | |
| Servidor DNS | |

---

# Parte 4. Análisis de errores

Indica si las siguientes configuraciones son correctas.

### Caso A

```text
IP: 192.168.1.0
Máscara: 255.255.255.0
```

---

### Caso B

```text
IP: 192.168.1.255
Máscara: 255.255.255.0
```

---

### Caso C

```text
IP: 192.168.1.20
Máscara: 255.255.255.0
```

Explica el motivo de cada respuesta.

---

# Parte 5. Direcciones especiales

Relaciona cada dirección con su función.

| Dirección | Función |
|-----------|---------|
| 127.0.0.1 | |
| 0.0.0.0 | |
| 255.255.255.255 | |

---

# Parte 6. Direcciones públicas y privadas

Clasifica las siguientes direcciones.

| Dirección | Pública | Privada |
|-----------|:-------:|:-------:|
| 192.168.1.20 | | |
| 10.0.5.18 | | |
| 172.20.8.15 | | |
| 8.8.8.8 | | |
| 1.1.1.1 | | |

---

# Parte 7. Diagnóstico

Un ordenador no consigue comunicarse con el servidor.

Describe el orden en el que realizarías las siguientes comprobaciones.

- Verificar la dirección IPv4.
- Comprobar la máscara de subred.
- Revisar la puerta de enlace.
- Ejecutar `ping 127.0.0.1`.
- Ejecutar `ping` al router.
- Ejecutar `ping` al servidor.

Justifica brevemente el motivo de ese orden.

---

# Parte 8. Informe técnico

Redacta un informe de aproximadamente una página explicando cómo configurarías completamente la red de esta oficina.

En el informe deben aparecer correctamente utilizados los siguientes conceptos:

- dirección IPv4;
- octeto;
- máscara de subred;
- red;
- host;
- dirección de red;
- dirección de difusión (*broadcast*);
- dirección pública;
- dirección privada;
- puerta de enlace;
- servidor DNS;
- configuración manual;
- configuración automática;
- `ping`.

---

# Autoevaluación

Antes de dar por finalizado el reto, comprueba que puedes responder afirmativamente a todas estas cuestiones.

- ☐ Sé identificar una dirección IPv4 válida.
- ☐ Distingo la parte de red y la parte de host.
- ☐ Comprendo la función de la máscara de subred.
- ☐ Sé identificar la dirección de red y la dirección de difusión.
- ☐ Diferencio una dirección pública de una privada.
- ☐ Reconozco las principales direcciones IPv4 especiales.
- ☐ Soy capaz de configurar manualmente una dirección IPv4.
- ☐ Sé comprobar la conectividad utilizando `ping`.
- ☐ Puedo diagnosticar los errores más habituales de configuración IPv4.

---

# Objetivo del reto

Si has completado correctamente este reto, ya eres capaz de interpretar y configurar direcciones IPv4 en una red local, identificar las direcciones especiales, diferenciar entre direcciones públicas y privadas y verificar la conectividad básica entre dispositivos.

Estos conocimientos constituyen la base del trabajo diario de cualquier técnico en redes y serán imprescindibles para comprender los protocolos que automatizan la configuración de los equipos y la resolución de direcciones en una red.

En el próximo capítulo estudiaremos cómo un equipo puede obtener automáticamente su configuración de red y cómo los dispositivos resuelven las direcciones necesarias para comunicarse de forma transparente dentro de una red local.