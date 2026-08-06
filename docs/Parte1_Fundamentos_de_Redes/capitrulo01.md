# Capítulo 1. ¿Qué es una red informática?

## Introducción

Hoy en día resulta difícil imaginar cualquier actividad sin el uso de una red informática. Cuando enviamos un mensaje desde el teléfono móvil, consultamos una página web, imprimimos un documento en una impresora compartida o accedemos a los archivos almacenados en un servidor del instituto, estamos utilizando una red.

Las redes informáticas permiten que dispositivos muy diferentes, como ordenadores, teléfonos móviles, impresoras, cámaras IP, televisores inteligentes o servidores, puedan intercambiar información de forma rápida y segura.

Su importancia ha crecido enormemente durante las últimas décadas. Las empresas dependen de ellas para compartir información y acceder a Internet, los hospitales las utilizan para gestionar historiales médicos, las administraciones públicas ofrecen servicios electrónicos gracias a ellas y, en nuestros hogares, prácticamente todos los dispositivos están conectados a una red.

En este capítulo conoceremos los conceptos fundamentales que permiten entender cómo se comunican los dispositivos, cuáles son los elementos que forman una red y cómo viaja la información desde un equipo hasta otro. Estos conocimientos servirán de base para todos los capítulos posteriores del libro.

## Objetivos de aprendizaje

Al finalizar este capítulo serás capaz de:

- Definir qué es una red informática.
- Comprender las ventajas de conectar dispositivos entre sí.
- Identificar los principales componentes de una red local.
- Diferenciar los distintos medios de transmisión de datos.
- Comprender cómo viaja la información por una red mediante paquetes.
- Construir tu primera red sencilla utilizando Cisco Packet Tracer.
- Realizar el montaje físico de una pequeña red utilizando equipos Cisco reales.

## 1. ¿Qué es una red?

### 1.1 ¿Qué es una red?

Una **red informática** es un conjunto de dispositivos conectados entre sí que pueden intercambiar información y compartir recursos mediante un conjunto de reglas comunes denominadas **protocolos de comunicación**.

Estos dispositivos pueden encontrarse en una misma habitación, distribuidos por un edificio o incluso situados en diferentes países. Lo realmente importante no es la distancia que los separa, sino que exista un medio de comunicación que les permita enviar y recibir información.

Actualmente prácticamente todos los dispositivos electrónicos disponen de capacidad para conectarse a una red. Algunos ejemplos son:

- Ordenadores de sobremesa.
- Ordenadores portátiles.
- Teléfonos móviles.
- Tablets.
- Impresoras.
- Servidores.
- Cámaras IP.
- Smart TV.
- Consolas de videojuegos.
- Dispositivos IoT.

Gracias a esta interconexión es posible compartir documentos, acceder a Internet, utilizar impresoras de forma compartida, realizar videoconferencias, almacenar archivos en servidores o controlar dispositivos de manera remota.

!!! note "Definición"

    Una red informática es un conjunto de dispositivos interconectados que intercambian información y comparten recursos utilizando protocolos de comunicación.

<figure class="figura-libro">
  <img
    src="/assets/images/parte1/capitulo1/figura1_1.png"
    alt="Ejemplo de una red informática"
  >
  <figcaption>
    <strong>Figura 1.1.</strong> Ejemplo de una red informática formada por
    diferentes dispositivos conectados a un switch y a un router con acceso a Internet.
  </figcaption>
</figure>

### 1.2 ¿Por qué conectar ordenadores?

Si cada ordenador trabajara de forma completamente independiente, sería necesario copiar la información manualmente de un equipo a otro utilizando memorias USB, discos externos u otros medios de almacenamiento. Este procedimiento sería lento, poco práctico y aumentaría el riesgo de pérdida o duplicidad de la información.

Las redes surgieron precisamente para solucionar este problema. Gracias a ellas, los dispositivos pueden intercambiar información de manera prácticamente instantánea y compartir numerosos recursos.

Entre las principales ventajas de utilizar una red destacan:

- Compartir archivos entre varios usuarios.
- Compartir impresoras y otros periféricos.
- Acceder a Internet desde múltiples dispositivos.
- Centralizar la información en servidores.
- Facilitar el trabajo colaborativo.
- Realizar copias de seguridad de forma centralizada.
- Administrar los equipos de manera remota.
- Reducir costes de infraestructura.

En una empresa moderna sería prácticamente imposible trabajar sin una red informática. Los empleados necesitan acceder continuamente a documentos compartidos, aplicaciones corporativas, correo electrónico, impresoras de red y servicios alojados en servidores locales o en la nube.

Las redes también forman parte de nuestra vida cotidiana. En casa conectamos ordenadores, teléfonos móviles, televisores inteligentes, asistentes virtuales, videoconsolas y cámaras de vigilancia al mismo router para acceder a Internet y compartir contenidos entre ellos.

<figure class="figura-libro">
  <img
    src="/assets/images/parte1/capitulo1/figura1_2.png"
    alt="Comparación entre un trabajo sin red informática y el mismo escenario utilizando una red local"
  >
  <figcaption>
    <strong>Figura 1.2.</strong> Comparación entre un trabajo sin red informática y el mismo escenario utilizando una red local.
  </figcaption>
</figure>

!!! example "Ejemplo"

    En un aula con treinta ordenadores sería muy poco eficiente instalar el mismo archivo en cada equipo utilizando una memoria USB.

    Si todos los ordenadores están conectados mediante una red local, el profesor solo necesita copiar el archivo una vez en un servidor o carpeta compartida para que todos los alumnos puedan acceder a él inmediatamente.

!!! tip "¿Sabías que...?"

    El crecimiento de Internet ha sido posible gracias a la interconexión de millones de redes repartidas por todo el mundo. De hecho, Internet puede considerarse como la mayor red informática existente.  

### 1.3 Ejemplos de redes informáticas

Las redes informáticas están presentes en prácticamente todos los ámbitos de nuestra vida. Aunque muchas veces pasan desapercibidas, las utilizamos continuamente para trabajar, estudiar, comunicarnos o disfrutar del ocio.

A continuación se muestran algunos ejemplos habituales.

### Red doméstica

La mayoría de los hogares disponen de una pequeña red local formada por un router proporcionado por el operador de Internet. A este router se conectan distintos dispositivos, tanto mediante cable Ethernet como mediante Wi-Fi.

Entre los dispositivos más habituales encontramos:

- Ordenadores personales.
- Teléfonos móviles.
- Tablets.
- Smart TV.
- Videoconsolas.
- Impresoras Wi-Fi.
- Asistentes virtuales.
- Cámaras de videovigilancia.

Todos ellos pueden compartir la conexión a Internet e intercambiar información dentro de la vivienda.

<figure class="figura-libro">
  <img
    src="/assets/images/parte1/capitulo1/figura1_3.png"
    alt="Red doméstica"
  >
  <figcaption>
    <strong>Figura 1.3.</strong> Ejemplo de una red doméstica con distintos dispositivos conectados mediante un router Wi-Fi.
  </figcaption>
</figure>

!!! example "Ejemplo"

    Cuando envías una fotografía desde tu teléfono móvil a un televisor inteligente mediante Chromecast o AirPlay, ambos dispositivos están comunicándose a través de la red doméstica.

---

### Red de un centro educativo

En un instituto como Monlau Formación Profesional existen cientos de dispositivos conectados a la misma infraestructura de red.

Algunos ejemplos son:

- Ordenadores de las aulas.
- Equipos del profesorado.
- Servidores.
- Impresoras de red.
- Puntos de acceso Wi-Fi.
- Cámaras IP.
- Teléfonos IP.
- Equipos de laboratorio.
- Sistemas de control de acceso.

Gracias a esta infraestructura cualquier alumno puede iniciar sesión desde distintos ordenadores utilizando la misma cuenta de usuario y acceder a sus archivos personales.

<figure class="figura-libro">
  <img
    src="/assets/images/parte1/capitulo1/figura1_4.png"
    alt="Red de un centro educativo"
  >
  <figcaption>
    <strong>Figura 1.4.</strong> Infraestructura de red de un centro educativo con aulas, servidores, puntos de acceso Wi-Fi y conexión a Internet.
  </figcaption>
</figure>

---

### Red empresarial

Las empresas utilizan redes mucho más complejas que las domésticas.

En ellas es habitual encontrar:

- Servidores de archivos.
- Servidores de correo electrónico.
- Bases de datos.
- Equipos de almacenamiento NAS.
- Routers de acceso a Internet.
- Switches de distribución.
- Firewalls.
- Sistemas de copias de seguridad.
- Redes Wi-Fi para empleados y visitantes.

Una interrupción de la red puede detener completamente la actividad de la empresa, por lo que disponer de una infraestructura fiable resulta fundamental.

---

### Internet: la red de redes

Internet no es una única red informática.

En realidad está formada por millones de redes independientes repartidas por todo el mundo que colaboran entre sí utilizando protocolos comunes.

Gracias a ello un ordenador situado en Barcelona puede comunicarse con un servidor ubicado en Tokio en apenas unas fracciones de segundo.

<figure class="figura-libro">
  <img
    src="/assets/images/parte1/capitulo1/figura1_5.png"
    alt="Componentes de una red local"
  >
  <figcaption>
    <strong>Figura 1.5.</strong> Componentes principales de una red local y función de cada uno de ellos.
  </figcaption>
</figure>

!!! tip "¿Sabías que...?"

    El término **Internet** proviene de la expresión inglesa *Interconnected Networks*, que significa literalmente «redes interconectadas».


### 1.4 Dispositivos que forman una red

Aunque existen redes muy diferentes entre sí, todas están formadas por una serie de elementos básicos que hacen posible la comunicación entre los dispositivos.

Los principales componentes son los siguientes.

### Dispositivos finales

Son aquellos utilizados directamente por los usuarios.

Entre ellos encontramos:

- Ordenadores.
- Portátiles.
- Smartphones.
- Tablets.
- Impresoras.
- Servidores.
- Cámaras IP.
- Smart TV.

Estos dispositivos generan o reciben la información que circula por la red.

---

### Dispositivos intermedios

Su misión consiste en transportar la información desde el dispositivo origen hasta el dispositivo destino.

Los más importantes son:

- Switches.
- Routers.
- Puntos de acceso Wi-Fi.
- Firewalls.

Estos equipos serán estudiados con detalle a lo largo del libro.

---

### Medios de transmisión

Para que exista comunicación es necesario disponer de un medio físico o inalámbrico que transporte la información.

Los más utilizados son:

- Cable de par trenzado (UTP).
- Fibra óptica.
- Redes inalámbricas Wi-Fi.

Cada uno de ellos presenta ventajas e inconvenientes que estudiaremos en capítulos posteriores.


!!! note "Recuerda"

    Una red informática necesita tres elementos fundamentales:

    - Dispositivos.
    - Medio de transmisión.
    - Protocolos de comunicación.

<figure class="figura-libro">
  <img
    src="/assets/images/parte1/capitulo1/figura1_6.png"
    alt="Comunicación entre dispositivos"
  >
  <figcaption>
    <strong>Figura 1.6.</strong> Componentes básicos de una red informática.
  </figcaption>
</figure>

!!! abstract "🛠️ En el taller..."

    En las próximas prácticas de laboratorio comenzarás a trabajar con los equipos reales que utilizarás durante todo el curso.

    Cada grupo de trabajo dispondrá de:

    - Dos **switches Cisco Catalyst 2900**.
    - Dos **routers Cisco serie 1800**.
    - Cables de consola.
    - Cables Ethernet UTP de distintas categorías.
    - Ordenadores para la configuración de los equipos.

    Antes de aprender a configurarlos, es importante ser capaz de identificar cada uno de sus elementos físicos: puertos Ethernet, puerto de consola, indicadores LED, fuente de alimentación y sistema de ventilación.

    A lo largo del libro irás descubriendo la función de cada uno de estos componentes hasta ser capaz de diseñar, montar y administrar una red local completa utilizando equipos Cisco reales.

    !!! question "Piensa un momento..."

    Observa tu aula o tu casa e intenta responder a las siguientes preguntas:

    1. ¿Cuántos dispositivos crees que están conectados a una red?
    2. ¿Cuáles son dispositivos finales y cuáles son dispositivos intermedios?
    3. ¿Cómo crees que llegan los datos desde un ordenador hasta Internet?
    4. ¿Qué ocurriría si el router dejara de funcionar?

    No te preocupes si todavía no conoces todas las respuestas. Al finalizar este capítulo podrás contestarlas sin dificultad.

!!! info "Lo aprenderás más adelante..."

    En este apartado has conocido los elementos básicos que forman una red informática.

    En los próximos capítulos aprenderás a:

    - Construir el cableado de una red local.
    - Configurar switches Cisco.
    - Configurar routers Cisco.
    - Asignar direcciones IP.
    - Diagnosticar problemas de comunicación.
    - Diseñar redes empresariales completas.  

## 2. Transmisión de datos

Hasta ahora hemos aprendido qué es una red informática y cuáles son los dispositivos que la componen. Sin embargo, todavía no sabemos cómo consigue un ordenador enviar información a otro.

Cada vez que enviamos un mensaje por WhatsApp, descargamos un documento, vemos un vídeo en Internet o imprimimos un trabajo en una impresora de red, millones de datos viajan entre distintos dispositivos en apenas unos segundos.

Pero... ¿cómo es posible?

La respuesta es sencilla: **toda la información que circula por una red está formada por datos digitales que viajan a través de un medio de transmisión utilizando señales eléctricas, luminosas o electromagnéticas**.

En este apartado estudiaremos cómo se produce este proceso.

---

### 2.1 La información digital

Los ordenadores únicamente son capaces de trabajar con dos estados eléctricos diferentes.

Estos estados reciben el nombre de **sistema binario** y se representan mediante los valores:

- **0**
- **1**

Cada uno de estos valores recibe el nombre de **bit** (*Binary Digit*).

El bit constituye la unidad de información más pequeña que puede almacenar o transmitir un ordenador.

Sin embargo, un único bit apenas contiene información. Por este motivo, los ordenadores agrupan los bits formando conjuntos mayores.

La agrupación más utilizada es el **byte**, formado por ocho bits consecutivos.

| Unidad | Equivalencia |
|---------|-------------:|
| 1 bit | 0 ó 1 |
| 1 byte | 8 bits |
| 1 KB | 1 024 bytes |
| 1 MB | 1 024 KB |
| 1 GB | 1 024 MB |
| 1 TB | 1 024 GB |

Aunque estamos acostumbrados a medir la capacidad de almacenamiento en bytes (GB, TB...), en redes es habitual expresar la velocidad de transmisión en **bits por segundo (bps)**.

<figure class="figura-libro">
  <img
    src="/assets/images/parte1/capitulo1/figura1_7.png"
    alt="Bit, byte y múltiplos"
  >
  <figcaption>
    <strong>Figura 1.7.</strong> Representación del bit, el byte y los principales múltiplos utilizados en informática y redes.
  </figcaption>
</figure>

!!! note "Importante"

    No debe confundirse **byte (B)** con **bit (b)**.

    - MB significa MegaBytes.
    - Mb significa Megabits.

    Una conexión de **300 Mb/s** no descarga archivos a **300 MB/s**, sino aproximadamente a **37,5 MB/s**.



### 2.2 ¿Cómo viajan los datos?

Aunque para el usuario todo parece ocurrir de forma instantánea, la realidad es que la información realiza un largo recorrido antes de llegar a su destino.

Imaginemos que un alumno guarda un documento en el servidor del instituto.

Durante ese proceso ocurren los siguientes pasos:

1. El ordenador convierte el documento en información digital.
2. La información se divide en pequeños bloques.
3. Cada bloque se transmite por la red.
4. Los switches y routers encaminan la información.
5. El servidor recibe todos los bloques.
6. Finalmente reconstruye el documento original.

Todo este proceso suele completarse en apenas unas décimas de segundo.

Desde el punto de vista del usuario, únicamente observa que el archivo aparece guardado en el servidor.

Sin embargo, internamente han viajado miles o incluso millones de bits.

<figure class="figura-libro">
  <img
    src="/assets/images/parte1/capitulo1/figura1_8.png"
    alt="Recorrido de un archivo por la red"
  >
  <figcaption>
    <strong>Figura 1.8.</strong> Recorrido de un archivo desde un ordenador hasta un servidor pasando por un switch y un router.
  </figcaption>
</figure>

<figure class="figura-libro">
  <img
    src="/assets/images/parte1/capitulo1/figura1_9.png"
    alt="Conversión de un documento en datos digitales para su transmisión."
  >
  <figcaption>
    <strong>Figura 1.9.</strong> Conversión de un documento en datos digitales para su transmisión.
  </figcaption>
</figure>

### 2.3 Señales que transportan la información

Los bits no viajan físicamente como ceros y unos.

Lo que realmente circula por el medio de transmisión son **señales** que representan esos valores binarios.

Dependiendo del medio utilizado, estas señales pueden ser de diferentes tipos.

### Señales eléctricas

Se utilizan principalmente en cables de cobre, como el cable de par trenzado (UTP).

Las variaciones de tensión representan los bits que se están transmitiendo.

Es el medio más habitual en las redes locales.

---

### Pulsos de luz

La fibra óptica transmite la información mediante pequeños pulsos luminosos.

La luz avanza por el interior de una fibra de vidrio o plástico prácticamente sin pérdidas.

Gracias a ello puede alcanzar grandes distancias y velocidades muy elevadas.

---

### Ondas electromagnéticas

Las redes Wi-Fi eliminan completamente los cables.

La información viaja mediante ondas de radio entre el dispositivo y el punto de acceso inalámbrico.

Este sistema proporciona una gran comodidad, aunque suele ser más sensible a interferencias que una conexión cableada.

<figure class="figura-libro">
  <img
    src="/assets/images/parte1/capitulo1/figura1_10.png"
    alt="Dispositivos de una red"
  >
  <figcaption>
    <strong>Figura 1.10.</strong> Comparación entre señales eléctricas, pulsos de luz y ondas electromagnéticas.
  </figcaption>
</figure>

!!! tip "Curiosidad"

    Cada vez que conectas tu teléfono móvil a una red Wi-Fi, la información está viajando por el aire mediante ondas de radio invisibles para el ojo humano.

### 2.4 Medios de transmisión

Para que dos dispositivos puedan comunicarse es necesario que exista un camino por el que circule la información. Ese camino recibe el nombre de **medio de transmisión**.

El medio de transmisión es el soporte físico o inalámbrico que permite transportar los datos desde el dispositivo emisor hasta el dispositivo receptor.

Existen numerosos medios de transmisión, pero en las redes locales los más utilizados son:

- Cable de par trenzado (UTP).
- Fibra óptica.
- Redes inalámbricas (Wi-Fi).

Cada uno presenta unas características diferentes en cuanto a velocidad, distancia, coste, facilidad de instalación y resistencia a las interferencias.

En los siguientes apartados conoceremos las características principales de cada uno de ellos.

---

### 2.4.1 Cable de par trenzado (UTP)

El **cable de par trenzado**, conocido habitualmente como **cable Ethernet** o **cable UTP (Unshielded Twisted Pair)**, es el medio de transmisión más utilizado en las redes locales.

Está formado por ocho conductores de cobre agrupados en cuatro pares que se encuentran trenzados entre sí.

El trenzado reduce las interferencias electromagnéticas y mejora la calidad de la transmisión.

Actualmente la mayoría de las instalaciones utilizan conectores **RJ-45**, capaces de transmitir datos a velocidades muy elevadas.

Entre sus principales ventajas destacan:

- Bajo coste.
- Instalación sencilla.
- Fácil mantenimiento.
- Amplia disponibilidad.
- Excelente rendimiento en redes locales.

Como inconveniente principal presenta una distancia máxima recomendada de aproximadamente **100 metros** entre dispositivos.

!!! note "Recuerda"

    El cable UTP será el principal protagonista de las prácticas de taller de este libro. Aprenderás a identificarlo, crimpar conectores RJ-45 y comprobar su funcionamiento utilizando un comprobador de cableado.

---

<figure class="figura-libro">
  <img
    src="/assets/images/parte1/capitulo1/figura1_11.png"
    alt="Cable UTP y conector RJ-45"
  >
  <figcaption>
    <strong>Figura 1.11.</strong> Cable UTP mostrando sus cuatro pares trenzados y un conector RJ-45.
  </figcaption>
</figure>

---

### 2.4.2 Fibra óptica

La **fibra óptica** utiliza pequeños pulsos de luz para transmitir la información.

En lugar de conductores de cobre, está formada por un núcleo de vidrio o plástico extremadamente fino por el que viaja la luz.

Este sistema ofrece importantes ventajas:

- Muy altas velocidades.
- Grandes distancias.
- Inmunidad frente a interferencias electromagnéticas.
- Elevada seguridad.

Por ello es habitual encontrar fibra óptica en:

- Centros de datos.
- Redes troncales de empresas.
- Operadores de telecomunicaciones.
- Conexiones FTTH (Fibra hasta el hogar).

Su principal inconveniente es que tanto el cable como los equipos necesarios para su instalación son más costosos que los utilizados en redes de cobre.

---

<figure class="figura-libro">
  <img
    src="/assets/images/parte1/capitulo1/figura1_12.png"
    alt="Cable de fibra óptica"
  >
  <figcaption>
    <strong>Figura 1.12.</strong> Detalle de un cable de fibra óptica mostrando el núcleo, el revestimiento y el haz de luz que transporta la información.
  </figcaption>
</figure>

---

### 2.4.3 Redes inalámbricas

Las redes inalámbricas eliminan la necesidad de utilizar cables entre los dispositivos y el punto de acceso.

La comunicación se realiza mediante ondas electromagnéticas, lo que permite una gran libertad de movimiento.

Actualmente prácticamente todos los dispositivos incorporan conectividad Wi-Fi.

Entre sus ventajas destacan:

- Movilidad.
- Instalación rápida.
- Facilidad para ampliar la red.
- Reducción del cableado.

Sin embargo, también presentan algunos inconvenientes:

- Mayor sensibilidad a interferencias.
- Menor velocidad que una conexión cableada equivalente.
- Alcance limitado.
- Mayor exposición a problemas de seguridad si no se configura correctamente.

Por este motivo, en muchas empresas se utilizan conjuntamente redes cableadas e inalámbricas, aprovechando las ventajas de ambas tecnologías.

---

<figure class="figura-libro">
  <img
    src="/assets/images/parte1/capitulo1/figura1_13.png"
    alt="Comparación wifi cable"
  >
  <figcaption>
    <strong>Figura 1.13.</strong> Comparación entre una red cableada y una red inalámbrica mostrando el recorrido de la información en ambos casos.
  </figcaption>
</figure>

---

### 2.4.4 Comparativa de los medios de transmisión

Cada medio de transmisión resulta adecuado para unas determinadas situaciones.

La siguiente tabla resume sus principales características.

| Característica | UTP | Fibra óptica | Wi-Fi |
|----------------|:---:|:------------:|:------:|
| Coste | Bajo | Alto | Medio |
| Instalación | Fácil | Especializada | Muy sencilla |
| Velocidad | Alta | Muy alta | Alta |
| Distancia | Hasta 100 m | Varios kilómetros | Decenas de metros |
| Interferencias | Sí | No | Sí |
| Movilidad | No | No | Sí |

Como veremos a lo largo del libro, no existe un medio de transmisión perfecto.

La elección dependerá siempre de las necesidades de la instalación.

En una vivienda probablemente utilizaremos una combinación de cable Ethernet y Wi-Fi, mientras que una gran empresa combinará cable UTP, fibra óptica y múltiples puntos de acceso inalámbricos.

!!! tip "¿Sabías que...?"

    Los cables de fibra óptica utilizados por los grandes operadores permiten transportar enormes cantidades de información a velocidades de varios terabits por segundo, conectando continentes enteros mediante cables submarinos.

!!! abstract "🛠️ En el taller..."

    Durante las próximas sesiones de laboratorio aprenderás a reconocer físicamente los principales medios de transmisión.

    Practicarás con:

    - Cable UTP de distintas categorías.
    - Conectores RJ-45.
    - Latiguillos comerciales.
    - Bobinas de cable.
    - Cable de consola Cisco.
    - Latiguillos de fibra óptica.
    - Herramientas de crimpado y comprobadores de cableado.

    También aprenderás a fabricar tus propios cables Ethernet siguiendo las normas T568A y T568B.

!!! example "💻 En Packet Tracer..."

    En la primera práctica utilizarás únicamente cable de cobre Ethernet para conectar dos ordenadores a un switch Cisco.

    Más adelante aprenderás a seleccionar correctamente el tipo de cable que debe utilizarse en cada situación y comprobarás cómo Packet Tracer simula automáticamente el funcionamiento de la red.

## 3. Comunicación mediante paquetes

Cuando enviamos un mensaje por WhatsApp, descargamos una fotografía o abrimos una página web, la información no viaja de una sola vez desde el origen hasta el destino.

Sería muy poco eficiente transmitir grandes cantidades de información en un único bloque. Si durante la transmisión se produjera un error, habría que volver a enviar toda la información.

Para evitar este problema, las redes dividen la información en pequeñas unidades llamadas **paquetes**.

Cada paquete contiene una parte de la información original junto con otros datos necesarios para que pueda llegar correctamente a su destino.

Una vez que todos los paquetes llegan al equipo receptor, éste los reorganiza para reconstruir el archivo original.

Este proceso es completamente transparente para el usuario y suele realizarse en apenas unas milésimas de segundo.

---

### ¿Qué contiene un paquete?

Aunque existen distintos tipos de paquetes, la mayoría incluyen información similar.

- Dirección del dispositivo origen.
- Dirección del dispositivo destino.
- Número de orden del paquete.
- Datos que transporta.
- Información para detectar errores.

Gracias a estos datos la red sabe dónde debe enviar cada paquete y el dispositivo receptor puede reconstruir correctamente la información original.

---

### Ejemplo

Imaginemos que queremos enviar una fotografía de 12 MB.

La fotografía se divide en cientos o miles de paquetes.

Cada paquete recorre la red de forma independiente.

Cuando todos llegan al ordenador destino, éste vuelve a unirlos formando la fotografía original.

Si alguno se pierde durante el recorrido, únicamente será necesario volver a enviar ese paquete, no toda la imagen.

---

<figure class="figura-libro">
  <img
    src="/assets/images/parte1/capitulo1/figura1_14.png"
    alt="División en paquetes"
  >
  <figcaption>
    <strong>Figura 1.14.</strong> División de un archivo en múltiples paquetes y reconstrucción en el equipo de destino.
  </figcaption>
</figure>
---

!!! note "Recuerda"

    En una red informática la información viaja dividida en pequeños paquetes de datos. Esta técnica mejora la velocidad, la eficiencia y la fiabilidad de las comunicaciones.

---

!!! tip "¿Sabías que...?"

    Durante una videollamada se intercambian miles de paquetes cada segundo. Si algunos llegan con retraso o se pierden, la imagen puede congelarse o el sonido entrecortarse.

## 4. Práctica guiada con Cisco Packet Tracer

### Objetivo

Construir la primera red local formada por dos ordenadores conectados mediante un switch Cisco y comprobar que ambos equipos pueden comunicarse.

### Material

- Cisco Packet Tracer.
- Dos ordenadores (PC).
- Un switch Cisco Catalyst 2960.
- Dos cables Copper Straight Through.

### Desarrollo

### Paso 1

Crear un escenario nuevo.

### Paso 2

Añadir:

- PC0
- PC1
- Switch 2960

### Paso 3

Conectar cada ordenador al switch utilizando un cable Copper Straight Through.

### Paso 4

Asignar las siguientes direcciones IP.

| Equipo | Dirección IP | Máscara |
|---------|--------------|----------------|
| PC0 | 192.168.1.10 | 255.255.255.0 |
| PC1 | 192.168.1.20 | 255.255.255.0 |

### Paso 5

Abrir la consola de PC0 y ejecutar:

```
ping 192.168.1.20
```

Si todo es correcto aparecerán respuestas similares a:

```
Reply from 192.168.1.20
```

---

### ¿Qué hemos aprendido?

- Conectar equipos a un switch.
- Asignar direcciones IP.
- Comprobar la conectividad utilizando ping.

## 5. Práctica de taller

### Objetivo

Reconocer físicamente los principales componentes de una red local.

### Material por grupo

- Dos switches Cisco Catalyst 2900.
- Dos routers Cisco serie 1800.
- Dos ordenadores.
- Cable de consola.
- Dos latiguillos Ethernet.

### Actividades

### Actividad 1

Identifica en el switch:

- Puertos Ethernet.
- LEDs.
- Alimentación.
- Etiquetas.

### Actividad 2

Identifica en el router:

- FastEthernet.
- Consola.
- Alimentación.
- Interruptor.

### Actividad 3

Conecta un ordenador al switch.

### Actividad 4

Observa los LEDs.

¿Qué ocurre cuando conectas el cable?

### Actividad 5

Desconecta el cable.

¿Qué LEDs cambian de estado?

---

### Cuestiones

1. ¿Qué diferencias observas entre un switch y un router?

2. ¿Cuántos puertos Ethernet tiene cada equipo?

3. ¿Qué función crees que realiza cada uno?

## 6. Conceptos clave

- Red informática.
- Dispositivo final.
- Dispositivo intermedio.
- Router.
- Switch.
- Servidor.
- Cliente.
- Internet.
- Bit.
- Byte.
- Paquete.
- Cable UTP.
- Fibra óptica.
- Wi-Fi.
- Medio de transmisión.
- RJ-45.
- Dirección IP.
- Ethernet.
- Ping.
- Comunicación.

## 7. Resumen

En este capítulo hemos conocido los conceptos fundamentales que permiten comprender el funcionamiento de una red informática.

Hemos aprendido que una red está formada por dispositivos capaces de intercambiar información utilizando distintos medios de transmisión y protocolos de comunicación.

También hemos visto cómo los datos viajan divididos en paquetes y cómo existen diferentes tecnologías para transportar la información, como el cable de cobre, la fibra óptica o las redes inalámbricas.

Finalmente hemos construido nuestra primera red utilizando Cisco Packet Tracer y hemos realizado el primer contacto con los equipos Cisco que utilizaremos durante todo el curso.

## 8. Cuestionario de autoevaluación

1. ¿Qué es una red informática?

2. ¿Qué ventajas ofrece una red local?

3. ¿Qué diferencia existe entre un bit y un byte?

4. ¿Qué es un paquete?

5. ¿Por qué la información se divide en paquetes?

6. ¿Qué función realiza un switch?

7. ¿Qué función realiza un router?

8. ¿Qué dispositivos se consideran dispositivos finales?

9. ¿Qué medios de transmisión conoces?

10. ¿Cuál es la principal ventaja de la fibra óptica?

11. ¿Cuál es la distancia máxima recomendada para un cable UTP?

12. ¿Qué significa Wi-Fi?

13. ¿Qué comando permite comprobar la conectividad entre dos equipos?

14. ¿Qué dispositivo proporciona normalmente acceso a Internet en una vivienda?

15. ¿Qué ocurriría si dos dispositivos no utilizaran los mismos protocolos de comunicación?

## 9. Reto final

### Diseña la red de una pequeña academia

Una academia dispone de las siguientes dependencias:

- Recepción.
- Aula 1 con 15 ordenadores.
- Aula 2 con 15 ordenadores.
- Despacho del director.
- Sala de profesores.

### Se pide

1. Dibuja un esquema sencillo de la red.

2. Indica qué dispositivos serían necesarios.

3. Explica cómo conectarías todos los equipos.

4. Indica qué medio de transmisión utilizarías en cada caso.

5. Razona por qué has elegido esa solución.

> No existe una única respuesta correcta. Lo importante es justificar las decisiones adoptadas.