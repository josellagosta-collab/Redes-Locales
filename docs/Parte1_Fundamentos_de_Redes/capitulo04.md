# Capítulo 4. Topologías de red y arquitectura Ethernet

## Introducción

Hasta ahora hemos aprendido qué es una red informática, cuáles son sus principales componentes, cómo se comunican los dispositivos mediante protocolos y cómo se organiza esa comunicación utilizando modelos de referencia.

Sin embargo, todavía no hemos respondido a una pregunta fundamental:

**¿Cómo se conectan físicamente los dispositivos que forman una red?**

La forma en que ordenadores, switches, routers y otros equipos se interconectan recibe el nombre de **topología de red**.

La topología influye directamente en aspectos tan importantes como el rendimiento, la fiabilidad, el coste de instalación, la facilidad de ampliación y el mantenimiento de la red.

En este capítulo estudiaremos las principales topologías utilizadas en las redes informáticas, diferenciando entre topologías físicas y lógicas, y analizaremos por qué Ethernet se ha convertido en la tecnología predominante en las redes locales actuales.

Los conocimientos adquiridos servirán de base para comenzar, en la siguiente parte del libro, el estudio del cableado estructurado y del montaje de redes reales.

---

## Objetivos de aprendizaje

Al finalizar este capítulo serás capaz de:

- Explicar qué es una topología de red.
- Diferenciar entre topología física y topología lógica.
- Identificar las principales topologías utilizadas en redes locales.
- Analizar las ventajas e inconvenientes de cada una.
- Comprender por qué Ethernet utiliza una topología física en estrella.
- Seleccionar la topología más adecuada para una situación determinada.

---

## 4.1 ¿Qué es una topología de red?

Cuando observamos una red informática, una de las primeras preguntas que podemos plantearnos es cómo están conectados entre sí los diferentes dispositivos.

No todas las redes tienen la misma estructura.

Algunas conectan todos los equipos a un dispositivo central, mientras que otras enlazan cada dispositivo con varios vecinos o utilizan un único cable compartido.

La forma en que se organizan estas conexiones recibe el nombre de **topología de red**.

Una topología describe la disposición de los dispositivos y de los enlaces de comunicación, mostrando cómo circula la información entre ellos.

Elegir una topología adecuada es una decisión muy importante durante el diseño de una red.

De ella dependen aspectos como:

- El coste de instalación.
- La facilidad para ampliar la red.
- La tolerancia frente a averías.
- El rendimiento de las comunicaciones.
- La facilidad para localizar incidencias.

---

### Un ejemplo cotidiano

Imagina una red de carreteras.

Dos ciudades pueden estar comunicadas mediante:

- Una única carretera.
- Varias carreteras alternativas.
- Una autopista con diferentes accesos.
- Una carretera circular que conecta varias poblaciones.

En todos los casos es posible viajar entre las ciudades, pero el recorrido, el tiempo empleado y la facilidad para continuar el viaje serán diferentes.

Con las redes informáticas ocurre exactamente lo mismo.

Los dispositivos pueden conectarse de distintas formas y cada organización presenta ventajas e inconvenientes.

<figure class="figura-libro">
  <img
    src="../../assets/images/parte1/capitulo4/figura4_1.png"
    alt="Concepto de topología de red"
  >
  <figcaption>
    <strong>Figura 4.1.</strong> Ejemplos de las principales topologías de red. La topología describe la forma en que se conectan los dispositivos y los enlaces de comunicación, independientemente del tipo de equipos utilizados.
  </figcaption>
</figure>

---

### La topología forma parte del diseño

Antes de instalar una red, los técnicos deben decidir cuál será la topología más adecuada.

Para ello tienen en cuenta factores como:

- Número de dispositivos.
- Tipo de edificio.
- Presupuesto disponible.
- Posibilidad de futuras ampliaciones.
- Nivel de disponibilidad requerido.

Por ejemplo, una red doméstica y la red de un hospital tienen necesidades muy diferentes.

Mientras que en una vivienda puede ser suficiente una instalación sencilla, un hospital necesita una red mucho más robusta y preparada para seguir funcionando incluso cuando se produce una avería.

Por este motivo no existe una única topología válida para todas las situaciones.

La elección dependerá siempre de las necesidades concretas de cada proyecto.

---

### Una decisión con consecuencias

Una topología mal elegida puede provocar:

- Costes elevados de mantenimiento.
- Dificultad para ampliar la red.
- Mayor tiempo de recuperación ante averías.
- Pérdidas de rendimiento.
- Interrupciones del servicio.

Por el contrario, una topología bien diseñada facilita el crecimiento de la red y mejora su fiabilidad.

En los siguientes apartados conoceremos las topologías más utilizadas y aprenderemos en qué situaciones resulta recomendable emplear cada una de ellas.

---

!!! note "Recuerda"

    Una topología de red describe cómo están conectados los dispositivos y cómo puede circular la información entre ellos.

!!! tip "¿Sabías que...?"

    La mayoría de las redes locales actuales utilizan una topología física en estrella, aunque el funcionamiento lógico de la comunicación puede ser diferente.

!!! abstract "🛠️ En el taller..."

    Durante las próximas prácticas montarás varias topologías diferentes utilizando switches Cisco y comprobarás cómo influye cada una en el funcionamiento de la red.

!!! question "Piensa un momento..."

    Si un edificio va a duplicar el número de ordenadores durante los próximos años, ¿crees que la elección de la topología puede facilitar o dificultar esa ampliación?

## 4.2 Topologías físicas

Una vez comprendido qué es una topología de red, es importante distinguir entre **topología física** y **topología lógica**.

Aunque ambos conceptos están relacionados, no significan lo mismo.

La **topología física** describe la disposición real de los dispositivos, los cables y los elementos de interconexión que forman una red.

En otras palabras, responde a la pregunta:

> **¿Cómo están conectados físicamente los equipos?**

Cuando un técnico observa una instalación de cableado, lo que está viendo es precisamente la topología física de la red.

Esta información resulta esencial durante la instalación, el mantenimiento o la ampliación de una infraestructura de comunicaciones.

---

### Principales topologías físicas

A lo largo de la historia de las redes informáticas se han utilizado diferentes formas de conectar los dispositivos.

Las más conocidas son:

- **Topología en bus**
- **Topología en anillo**
- **Topología en estrella**
- **Topología en malla**
- **Topología en árbol**

Cada una presenta características diferentes y responde a necesidades concretas.

En la actualidad, algunas de ellas apenas se utilizan, mientras que otras continúan siendo la base de la mayoría de las redes locales.

<figure class="figura-libro">
  <img
    src="../../assets/images/parte1/capitulo4/figura4_2.png"
    alt="Comparación de las principales topologías físicas"
  >
  <figcaption>
    <strong>Figura 4.2.</strong> Comparación de las principales topologías físicas utilizadas en redes informáticas: bus, anillo, estrella, malla y árbol. Cada una organiza de forma diferente las conexiones entre los dispositivos y presenta ventajas e inconvenientes según el tipo de instalación.
  </figcaption>
</figure>

---

### Topología en bus

En una topología en bus, todos los dispositivos comparten un único cable principal, denominado **bus**.

Cada ordenador se conecta directamente a este cable mediante un punto de conexión.

Cuando un equipo transmite información, la señal se propaga por todo el cable y puede ser recibida por el resto de dispositivos.

Este tipo de topología fue muy utilizada durante los primeros años de las redes Ethernet, especialmente con cable coaxial.

Sin embargo, presentaba varios inconvenientes:

- Una avería en el cable principal podía dejar inoperativa toda la red.
- El número de dispositivos era limitado.
- Las colisiones eran frecuentes cuando varios equipos transmitían simultáneamente.
- Resultaba complicada de ampliar y mantener.

Por estos motivos, actualmente prácticamente ha desaparecido de las instalaciones modernas.

---

### Topología en anillo

En la topología en anillo, cada dispositivo está conectado con otros dos, formando un circuito cerrado.

La información circula de un equipo al siguiente hasta alcanzar el destinatario.

Algunas redes de este tipo utilizaban un sistema denominado **token**, que permitía controlar qué dispositivo podía transmitir en cada momento y evitaba las colisiones.

Aunque esta solución ofrecía un funcionamiento muy ordenado, también presentaba inconvenientes.

Una avería en un único enlace podía interrumpir toda la comunicación si la red no disponía de mecanismos de redundancia.

Actualmente su utilización es muy reducida, aunque algunos entornos industriales siguen empleando variantes de esta topología.

---

### Topología en estrella

La topología en estrella es la más utilizada en las redes locales actuales.

En ella, todos los dispositivos se conectan a un **equipo central**, normalmente un **switch**.

Cada ordenador dispone de su propio cable independiente.

Esto aporta numerosas ventajas:

- Una avería en un cable solo afecta al equipo conectado a ese enlace.
- La red resulta sencilla de ampliar.
- Es fácil localizar incidencias.
- Ofrece un excelente rendimiento cuando se utilizan switches modernos.

Gracias a estas características, prácticamente todas las redes Ethernet actuales utilizan una topología física en estrella.

---

### Topología en malla

En una topología en malla, los dispositivos disponen de múltiples conexiones entre sí.

Esto significa que existen varios caminos posibles para que la información llegue a su destino.

La principal ventaja de esta organización es su elevada tolerancia a fallos.

Si un enlace deja de funcionar, los datos pueden utilizar rutas alternativas.

Sin embargo, también presenta inconvenientes importantes:

- El coste de instalación es elevado.
- Requiere un mayor número de cables y dispositivos.
- Su diseño y mantenimiento son más complejos.

Por este motivo suele reservarse para redes donde la disponibilidad es un requisito crítico, como centros de datos, operadores de telecomunicaciones o grandes infraestructuras.

---

### Topología en árbol

La topología en árbol combina varias topologías en estrella organizadas de forma jerárquica.

Un switch principal conecta con otros switches secundarios, que a su vez dan servicio a distintos grupos de dispositivos.

Esta estructura facilita el crecimiento de la red y permite organizar los equipos por edificios, plantas, departamentos o zonas de trabajo.

En la práctica, muchas redes empresariales utilizan una estructura en árbol debido a su facilidad de administración y ampliación.

<figure class="figura-libro">
  <img
    src="../../assets/images/parte1/capitulo4/figura4_3.png"
    alt="Comparación de la tolerancia a fallos según la topología"
  >
  <figcaption>
    <strong>Figura 4.3.</strong> Comparación del comportamiento de las principales topologías físicas ante una avería. La topología en estrella limita el impacto de un fallo a un único enlace, mientras que en bus y anillo una interrupción puede afectar a toda la red. La topología en malla ofrece rutas alternativas que incrementan la disponibilidad del servicio.
  </figcaption>
</figure>

---

!!! note "Recuerda"

    La topología física describe cómo están conectados realmente los dispositivos mediante cables o enlaces inalámbricos.

!!! tip "¿Sabías que...?"

    Aunque la topología en bus fue muy popular durante los años ochenta y noventa, hoy en día prácticamente todas las redes Ethernet utilizan una topología física en estrella.

!!! abstract "🛠️ En el taller..."

    Durante las prácticas montarás pequeñas redes en estrella utilizando switches Cisco y comprobarás por qué esta topología ha sustituido casi por completo a las demás en las redes locales.

!!! question "Piensa un momento..."

    Si un cable de red se rompe y únicamente deja de funcionar un ordenador mientras el resto continúa comunicándose con normalidad, ¿qué topología física crees que está utilizando esa red?

    ## 4.3 Topologías lógicas

En el apartado anterior hemos estudiado la **topología física**, es decir, la forma en que los dispositivos están conectados mediante cables o enlaces inalámbricos.

Sin embargo, una red puede tener una disposición física determinada y, al mismo tiempo, un funcionamiento interno diferente.

Esta forma en que circulan realmente los datos recibe el nombre de **topología lógica**.

En otras palabras, la topología lógica responde a la siguiente pregunta:

> **¿Cómo viaja realmente la información entre los dispositivos?**

Aunque la topología física y la lógica suelen estar relacionadas, no siempre coinciden.

---

### Topología física y topología lógica

Para comprender mejor esta diferencia, imaginemos una oficina donde todos los ordenadores están conectados mediante cables a un switch central.

Desde el punto de vista físico, la red tiene una **topología en estrella**, ya que todos los equipos disponen de un enlace independiente con el switch.

Sin embargo, el recorrido que siguen los datos depende del funcionamiento interno del switch y de los protocolos utilizados.

Por tanto, la forma en que los datos circulan por la red constituye la **topología lógica**.

Este concepto resulta especialmente importante cuando se estudian tecnologías como Ethernet o Token Ring.

<figure class="figura-libro">
  <img
    src="../../assets/images/parte1/capitulo4/figura4_4.png"
    alt="Diferencia entre topología física y topología lógica"
  >
  <figcaption>
    <strong>Figura 4.4.</strong> Diferencia entre topología física y topología lógica en una red Ethernet con switch. La topología física muestra cómo están conectados los dispositivos, mientras que la topología lógica representa el recorrido real que sigue la información entre el emisor y el destinatario.
  </figcaption>
</figure>

---

### Un ejemplo sencillo

Supongamos una red formada por cuatro ordenadores conectados a un switch.

Cuando el ordenador **PC1** envía un archivo a **PC3**, la información no se transmite simultáneamente a todos los equipos.

El switch analiza la dirección de destino y reenvía la información únicamente por el puerto correspondiente.

Desde el punto de vista físico, la red continúa siendo una estrella.

Sin embargo, desde el punto de vista lógico, la comunicación se establece únicamente entre los dos dispositivos implicados.

Esto mejora el rendimiento de la red y reduce el tráfico innecesario.

---

### ¿Por qué es importante distinguirlas?

Diferenciar ambos conceptos resulta fundamental durante el diseño y el mantenimiento de una red.

La topología física permite planificar:

- El recorrido del cableado.
- La ubicación de los armarios de comunicaciones.
- La instalación de switches y puntos de acceso.
- Las futuras ampliaciones de la infraestructura.

Por su parte, la topología lógica ayuda a comprender:

- Cómo circulan realmente los datos.
- Qué dispositivos intervienen en una comunicación.
- Cómo se comportan los protocolos.
- Dónde pueden aparecer problemas de rendimiento.

En muchas ocasiones, un técnico debe analizar ambos aspectos para localizar correctamente una incidencia.

---

### Ethernet: un buen ejemplo

Las redes Ethernet modernas constituyen un excelente ejemplo de la diferencia entre ambos conceptos.

Físicamente, los equipos se conectan formando una **estrella**, utilizando un switch como elemento central.

Sin embargo, desde el punto de vista lógico, cada comunicación se establece únicamente entre el dispositivo emisor y el receptor, ya que el switch envía las tramas exclusivamente por el puerto adecuado.

Gracias a este funcionamiento, las redes Ethernet actuales ofrecen un elevado rendimiento, reducen las colisiones y permiten que varios equipos transmitan información al mismo tiempo.

En el siguiente apartado estudiaremos con mayor detalle el funcionamiento de Ethernet y comprenderemos por qué se ha convertido en el estándar predominante en las redes locales.

---

!!! note "Recuerda"

    La topología física describe cómo están conectados los dispositivos.

    La topología lógica describe cómo circula realmente la información entre ellos.

!!! tip "¿Sabías que...?"

    Dos redes pueden tener exactamente la misma topología física y, sin embargo, comportarse de forma diferente debido a la tecnología utilizada para transmitir la información.

!!! abstract "🛠️ En el taller..."

    En las prácticas con Cisco Packet Tracer observarás que, aunque todos los equipos estén conectados al mismo switch, los datos solo se envían hacia el dispositivo de destino.

!!! question "Piensa un momento..."

    Si todos los ordenadores están conectados a un mismo switch, ¿crees que cada mensaje llega a todos los equipos o únicamente al destinatario correspondiente? ¿Qué ventajas tiene este comportamiento?

## 4.4 La arquitectura Ethernet

Después de estudiar las diferentes topologías físicas y lógicas, surge una pregunta evidente:

**¿Qué tecnología utilizan realmente las redes locales actuales?**

La respuesta es clara: **la inmensa mayoría de las redes LAN cableadas utilizan Ethernet**.

Desde pequeñas redes domésticas hasta grandes empresas, Ethernet se ha convertido en la tecnología más utilizada para conectar ordenadores, servidores, impresoras, cámaras IP y otros dispositivos.

Su éxito se debe a que combina un alto rendimiento, un coste reducido y una gran facilidad de ampliación.

Pero para comprender realmente cómo funciona Ethernet debemos conocer algunos elementos fundamentales:

```text
ETHERNET
   │
   ├── Tramas
   │
   ├── Direcciones MAC
   │
   └── Switches
```

Estos elementos permiten que la información pueda llegar al dispositivo adecuado dentro de una red local.

---

### ¿Qué es Ethernet?

**Ethernet** es un conjunto de estándares definidos por el **IEEE 802.3** que especifican cómo deben comunicarse los dispositivos dentro de una red local.

Estos estándares describen aspectos como:

- El formato de las tramas.
- Los medios de transmisión que pueden utilizarse.
- Las velocidades de comunicación.
- El acceso al medio físico.
- Las características eléctricas y ópticas de la transmisión.

Gracias a estos estándares, equipos de fabricantes diferentes pueden comunicarse siempre que utilicen tecnologías compatibles con Ethernet.

---

### Una topología física en estrella

Las redes Ethernet modernas utilizan normalmente una **topología física en estrella**.

Todos los dispositivos se conectan mediante un enlace individual a un equipo central, que normalmente es un:

```text
SWITCH
```

Por ejemplo:

```text
               SWITCH
             /   |   \
            /    |    \
          PC0   PC1   PC2
```

Cada enlace es independiente de los demás.

Esto ofrece importantes ventajas:

- Una avería en un cable solo afecta al dispositivo conectado a ese enlace.
- Resulta sencillo añadir nuevos equipos.
- La localización de averías es más sencilla.
- La red puede crecer sin modificar todos los enlaces existentes.

Estas características han convertido la estrella en la topología física predominante en las redes Ethernet actuales.

<figure class="figura-libro">
  <img
    src="../../assets/images/parte1/capitulo4/figura4_5.png"
    alt="Arquitectura de una red Ethernet moderna"
  >
  <figcaption>
    <strong>Figura 4.5.</strong> Arquitectura típica de una red Ethernet moderna. Todos los dispositivos se conectan mediante enlaces independientes a un switch central, formando una topología física en estrella que facilita la ampliación, el mantenimiento y la localización de averías.
  </figcaption>
</figure>

---

### Las direcciones MAC

Para que Ethernet pueda entregar correctamente la información dentro de una red local necesita alguna forma de identificar las interfaces de red.

Para ello utiliza las:

```text
DIRECCIONES MAC
```

**MAC** procede de:

```text
Media Access Control
```

Una dirección MAC es un identificador utilizado por Ethernet para identificar una interfaz de red dentro de la comunicación de la capa de enlace.

Por ejemplo:

```text
00:1A:2B:3C:4D:5E
```

o:

```text
A4:5E:60:91:23:BC
```

Una dirección MAC Ethernet tiene normalmente:

```text
48 bits
```

es decir:

```text
6 bytes
```

Como escribir 48 bits utilizando ceros y unos sería poco práctico, las direcciones MAC se representan normalmente utilizando números **hexadecimales**.

Por eso encontramos caracteres como:

```text
0 1 2 3 4 5 6 7 8 9 A B C D E F
```

Una MAC puede representarse como seis grupos:

```text
00 : 1A : 2B : 3C : 4D : 5E
```

Cada grupo representa un byte.

<figure class="figura-libro">
  <img
    src="../../assets/images/parte1/capitulo4/figura4_6.png"
    alt="Estructura y representación de una dirección MAC Ethernet"
  >
  <figcaption>
    <strong>Figura 4.6.</strong> Anatomía sencilla de una dirección MAC Ethernet. Una dirección MAC tiene 48 bits, agrupados en 6 bytes y representados habitualmente mediante números hexadecimales.
  </figcaption>
</figure>

!!! note "No confundas MAC con IP"

    Una dirección como:

    ```text
    192.168.1.20
    ```

    es una **dirección IP**.

    Una dirección como:

    ```text
    00:1A:2B:3C:4D:5E
    ```

    es una **dirección MAC**.

    Son direcciones diferentes y cumplen funciones diferentes.

---

### ¿Dónde podemos ver la dirección MAC?

Los sistemas operativos permiten consultar las direcciones MAC de sus interfaces de red.

En Windows podemos utilizar:

```cmd
ipconfig /all
```

Entre la información mostrada encontraremos un campo similar a:

```text
Dirección física. . . . . . . : A4-5E-60-91-23-BC
```

Windows utiliza normalmente guiones:

```text
A4-5E-60-91-23-BC
```

mientras que en otros sistemas o aplicaciones podemos encontrar:

```text
A4:5E:60:91:23:BC
```

Ambas representaciones corresponden al mismo tipo de dirección.

---

### Las tramas Ethernet

Ethernet no envía simplemente un conjunto de datos sin ninguna organización.

La información se transporta utilizando unidades denominadas:

```text
TRAMAS ETHERNET
```

Una trama contiene diferentes campos que permiten transportar y entregar correctamente la información.

Por ahora no necesitamos estudiar todos ellos.

Nos interesan especialmente:

```text
┌─────────────────┬─────────────────┬───────────────┐
│   MAC DESTINO   │    MAC ORIGEN   │     DATOS     │
└─────────────────┴─────────────────┴───────────────┘
```

Cuando un ordenador envía una trama:

```text
MAC origen
```

identifica la interfaz que la está enviando, mientras que:

```text
MAC destino
```

indica a qué interfaz debe entregarse.

Supongamos:

```text
PC0
MAC: AA:AA:AA:AA:AA:AA

PC1
MAC: BB:BB:BB:BB:BB:BB
```

Si PC0 envía una trama a PC1:

```text
MAC origen  → AA:AA:AA:AA:AA:AA

MAC destino → BB:BB:BB:BB:BB:BB
```

El switch puede utilizar esta información para entregar la trama correctamente.

---

### La dirección MAC de broadcast

Existe una dirección MAC especialmente importante:

```text
FF:FF:FF:FF:FF:FF
```

Se denomina dirección MAC de:

```text
BROADCAST
```

Una trama enviada a esta dirección está destinada a **todos los dispositivos de la red local o dominio de broadcast correspondiente**.

De forma simplificada:

```text
                 SWITCH
               /   |   \
              /    |    \
            PC1   PC2   PC3
             ↑     ↑     ↑
             └─────┼─────┘
                   │
             BROADCAST
```

Este tipo de comunicación se utiliza cuando un dispositivo necesita enviar determinada información a todos los equipos de su red local.

Más adelante veremos un ejemplo muy importante:

```text
ARP
```

---

### ¿Cómo sabe el switch dónde está cada dispositivo?

Ya sabemos que un switch recibe tramas Ethernet.

Pero aparece una nueva pregunta:

> **¿Cómo sabe el switch por qué puerto debe enviar una trama?**

Para ello mantiene una:

```text
TABLA DE DIRECCIONES MAC
```

También podemos encontrar nombres como:

```text
tabla MAC
```

o:

```text
MAC address table
```

Esta tabla relaciona:

```text
DIRECCIÓN MAC ↔ PUERTO DEL SWITCH
```

Por ejemplo:

| Dirección MAC | Puerto |
|---------------|--------|
| AA:AA:AA:AA:AA:AA | Fa0/1 |
| BB:BB:BB:BB:BB:BB | Fa0/2 |
| CC:CC:CC:CC:CC:CC | Fa0/3 |

De esta forma, si llega una trama destinada a:

```text
BB:BB:BB:BB:BB:BB
```

el switch consulta su tabla y puede comprobar:

```text
BB:BB:BB:BB:BB:BB
          ↓
        Fa0/2
```

Entonces puede reenviar la trama por ese puerto.

---

### El switch aprende las direcciones MAC

La tabla MAC no necesita introducirse manualmente para cada ordenador.

El switch puede aprender automáticamente qué dispositivos están conectados a sus puertos.

Para ello observa:

```text
LA MAC DE ORIGEN
```

de las tramas que recibe.

Supongamos que recibe por:

```text
Fa0/1
```

una trama cuya MAC de origen es:

```text
AA:AA:AA:AA:AA:AA
```

El switch aprende:

```text
AA:AA:AA:AA:AA:AA → Fa0/1
```

Después recibe por Fa0/2 una trama procedente de:

```text
BB:BB:BB:BB:BB:BB
```

y aprende:

```text
BB:BB:BB:BB:BB:BB → Fa0/2
```

Su tabla comienza a construirse automáticamente:

```text
TABLA MAC

AA:AA:AA:AA:AA:AA → Fa0/1
BB:BB:BB:BB:BB:BB → Fa0/2
```

Esta es una idea fundamental:

> **El switch aprende observando la dirección MAC de origen de las tramas que recibe.**

<figure class="figura-libro">
  <img
    src="../../assets/images/parte1/capitulo4/figura4_7.png"
    alt="Aprendizaje de direcciones MAC y construcción de la tabla MAC de un switch"
  >
  <figcaption>
    <strong>Figura 4.7.</strong> Funcionamiento de la tabla MAC de un switch. El switch observa la dirección MAC de origen de las tramas recibidas y la relaciona con el puerto por el que han llegado, construyendo así su tabla MAC.
  </figcaption>
</figure>

---

### Una comunicación inteligente

Cuando el switch conoce la ubicación de la MAC de destino puede reenviar la trama únicamente por el puerto adecuado.

Por ejemplo:

```text
PC0                    PC1
MAC AA                  MAC BB
  │                       │
  └────── SWITCH ─────────┘
```

Si PC0 envía:

```text
Destino → BB
```

y el switch conoce:

```text
BB → Fa0/2
```

la trama se envía hacia PC1.

<figure class="figura-libro">
  <img
    src="../../assets/images/parte1/capitulo4/figura4_10.png"
    alt="Funcionamiento de un switch Ethernet utilizando direcciones MAC"
  >
  <figcaption>
    <strong>Figura 4.10.</strong> Funcionamiento de un switch Ethernet. El switch analiza las direcciones MAC de las tramas y utiliza su tabla MAC para reenviar la información únicamente por el puerto correspondiente al dispositivo de destino.
  </figcaption>
</figure>

De esta forma:

- Se reduce el tráfico innecesario.
- Varias comunicaciones pueden producirse simultáneamente.
- Se mejora el rendimiento de la red.

Este comportamiento diferencia claramente a un switch moderno de los antiguos **hubs**, que repetían la información por todos sus puertos.

---

### Dirección IP y dirección MAC

Hasta ahora hemos visto dos tipos de direcciones:

```text
DIRECCIÓN IP

DIRECCIÓN MAC
```

No debemos confundirlas.

De forma simplificada:

| Dirección IP | Dirección MAC |
|--------------|---------------|
| Dirección lógica | Dirección utilizada en Ethernet |
| Identifica al dispositivo dentro de una red IP | Identifica una interfaz en la comunicación local |
| Ejemplo: `192.168.1.20` | Ejemplo: `AA:BB:CC:DD:EE:FF` |
| Utilizada por IP | Utilizada por Ethernet |

Podemos pensar en ellas como dos niveles diferentes de la comunicación.

Por ejemplo, un programa puede querer comunicarse con:

```text
192.168.1.20
```

pero Ethernet necesita finalmente construir una trama con una:

```text
MAC DESTINO
```

<figure class="figura-libro">
  <img
    src="../../assets/images/parte1/capitulo4/figura4_8.png"
    alt="Relación entre una dirección IPv4 y una dirección MAC en una comunicación Ethernet"
  >
  <figcaption>
    <strong>Figura 4.8.</strong> Relación entre dirección IP y dirección MAC. IP permite identificar el destino lógico de la comunicación, mientras que Ethernet utiliza direcciones MAC para entregar las tramas dentro de la red local.
  </figcaption>
</figure>

Esto plantea una pregunta muy importante:

> **Si conocemos la dirección IP del equipo de destino, ¿cómo averiguamos su dirección MAC?**

Para resolver este problema utilizamos:

```text
ARP
```

---

### ARP: relacionar una dirección IPv4 con una dirección MAC

**ARP** significa:

```text
Address Resolution Protocol
```

Su función es permitir que un dispositivo averigüe qué dirección MAC corresponde a una determinada dirección IPv4 dentro de la red local.

De forma sencilla:

```text
DIRECCIÓN IPv4
      ↓
     ARP
      ↓
DIRECCIÓN MAC
```

Supongamos que tenemos:

```text
PC0

IP:
192.168.1.10

MAC:
AA:AA:AA:AA:AA:AA
```

y quiere comunicarse con:

```text
PC1

IP:
192.168.1.20

MAC:
BB:BB:BB:BB:BB:BB
```

PC0 conoce:

```text
192.168.1.20
```

pero necesita conocer la MAC que debe utilizar para entregar la trama Ethernet.

---

### ARP Request

Si PC0 todavía no conoce la dirección MAC correspondiente, envía una petición:

```text
ARP Request
```

La pregunta puede entenderse como:

```text
¿Quién tiene 192.168.1.20?
```

PC0 todavía no sabe qué MAC corresponde a esa dirección.

Por eso la petición se envía mediante:

```text
BROADCAST
```

utilizando como MAC de destino:

```text
FF:FF:FF:FF:FF:FF
```

Conceptualmente:

```text
PC0
192.168.1.10
      │
      │ ARP Request
      │
      │ ¿Quién tiene 192.168.1.20?
      ↓
    SWITCH
   /   |   \
  ↓    ↓    ↓
PC1   PC2   PC3
```

Todos reciben la petición, pero solamente el dispositivo que tenga:

```text
192.168.1.20
```

debe responder.

---

### ARP Reply

PC1 reconoce que la dirección solicitada es la suya y responde mediante:

```text
ARP Reply
```

La respuesta puede entenderse como:

```text
192.168.1.20
es
BB:BB:BB:BB:BB:BB
```

Por tanto:

```text
PC0                           PC1
192.168.1.10                  192.168.1.20
AA:AA:AA:AA:AA:AA            BB:BB:BB:BB:BB:BB

 │                              │
 │──── ARP Request ────────────>│
 │  ¿Quién tiene 192.168.1.20?  │
 │                              │
 │<───── ARP Reply ─────────────│
 │ 192.168.1.20 = BB:BB:...     │
 │                              │
```

PC0 ya conoce la información necesaria para construir la trama Ethernet.

<figure class="figura-libro">
  <img
    src="../../assets/images/parte1/capitulo4/figura4_9.png"
    alt="Proceso ARP para obtener la dirección MAC correspondiente a una dirección IPv4"
  >
  <figcaption>
    <strong>Figura 4.9.</strong> Funcionamiento básico de ARP. El equipo que desconoce la dirección MAC del destino envía un ARP Request mediante broadcast. El equipo cuya dirección IPv4 coincide responde mediante ARP Reply indicando su dirección MAC, que puede almacenarse temporalmente en la tabla ARP.
  </figcaption>
</figure>

---

### La tabla ARP

Sería poco eficiente repetir continuamente el proceso ARP para los mismos dispositivos.

Por este motivo, los equipos mantienen temporalmente una:

```text
TABLA ARP
```

En ella almacenan asociaciones entre:

```text
DIRECCIÓN IPv4 ↔ DIRECCIÓN MAC
```

Por ejemplo:

| Dirección IPv4 | Dirección MAC |
|----------------|---------------|
| 192.168.1.20 | BB:BB:BB:BB:BB:BB |
| 192.168.1.30 | CC:CC:CC:CC:CC:CC |

Cuando el equipo necesita comunicarse nuevamente con:

```text
192.168.1.20
```

puede consultar primero su tabla ARP.

Si la asociación todavía está almacenada, no necesita realizar inmediatamente una nueva petición ARP.

---

### Consultar la tabla ARP

En Windows podemos consultar la tabla ARP utilizando:

```cmd
arp -a
```

El resultado puede mostrar información similar a:

```text
Interfaz: 192.168.1.10

Dirección de Internet   Dirección física
192.168.1.20            bb-bb-bb-bb-bb-bb
192.168.1.30            cc-cc-cc-cc-cc-cc
```

Esto nos permite observar directamente las asociaciones entre:

```text
IP ↔ MAC
```

que conoce nuestro ordenador.

!!! tip "Una prueba muy sencilla"

    Puedes ejecutar:

    ```cmd
    arp -a
    ```

    realizar después un `ping` a otro equipo de la red:

    ```cmd
    ping 192.168.1.20
    ```

    y volver a ejecutar:

    ```cmd
    arp -a
    ```

    Comprueba si aparece la dirección MAC del equipo con el que acabas de comunicarte.

---

### No confundas la tabla MAC con la tabla ARP

Aunque sus nombres pueden parecer similares, son cosas diferentes.

```text
SWITCH
   ↓
TABLA MAC
   ↓
MAC ↔ PUERTO
```

Por ejemplo:

```text
AA:AA:AA:AA:AA:AA → Fa0/1
```

Mientras que un ordenador puede mantener:

```text
TABLA ARP
   ↓
IP ↔ MAC
```

Por ejemplo:

```text
192.168.1.20 → BB:BB:BB:BB:BB:BB
```

Por tanto:

| Tabla MAC | Tabla ARP |
|-----------|-----------|
| La utiliza principalmente el switch para reenviar tramas | La mantienen los equipos para relacionar IPv4 con MAC |
| Relaciona MAC con puerto | Relaciona IPv4 con MAC |
| `MAC → puerto` | `IPv4 → MAC` |

Esta diferencia es muy importante.

---

### El proceso completo

Ya podemos comprender mejor qué ocurre cuando dos ordenadores de nuestra red local se comunican.

Supongamos:

```text
PC0
192.168.1.10
```

quiere enviar información a:

```text
PC1
192.168.1.20
```

Podemos simplificar el proceso:

```text
PC0 conoce la IP de PC1
        ↓
192.168.1.20
        ↓
¿Conozco su MAC?
        ↓
       NO
        ↓
ARP Request
        ↓
¿Quién tiene 192.168.1.20?
        ↓
ARP Reply
        ↓
BB:BB:BB:BB:BB:BB
        ↓
PC0 guarda IP ↔ MAC
en su tabla ARP
        ↓
Construye la trama Ethernet
        ↓
MAC destino = BB:BB:BB:BB:BB:BB
        ↓
SWITCH
        ↓
Consulta su tabla MAC
        ↓
Reenvía la trama por
el puerto correspondiente
        ↓
PC1
```

Ahora podemos ver cómo colaboran distintos elementos:

```text
IP
 ↓
identifica el destino lógico

ARP
 ↓
obtiene la MAC correspondiente

ETHERNET
 ↓
construye la trama

SWITCH
 ↓
utiliza la MAC para reenviarla
```

---

!!! note "Recuerda"

    Para una comunicación Ethernet local debemos distinguir:

    ```text
    IP   → dirección lógica

    MAC  → dirección utilizada en la trama Ethernet

    ARP  → relaciona IPv4 con MAC

    SWITCH → utiliza las MAC para reenviar las tramas
    ```

!!! question "Piensa un momento..."

    Un ordenador conoce la dirección:

    ```text
    192.168.1.25
    ```

    del equipo con el que quiere comunicarse, pero todavía no conoce su dirección MAC.

    ¿Qué protocolo puede utilizar para averiguarla?

---

### Ethernet en la actualidad

Ethernet ha evolucionado de forma constante desde su aparición.

Las primeras versiones funcionaban a velocidades de:

```text
10 Mb/s
```

Posteriormente surgieron nuevas versiones capaces de transmitir a:

- **100 Mb/s** (*Fast Ethernet*)
- **1 Gb/s** (*Gigabit Ethernet*)
- **10 Gb/s**
- **25 Gb/s**
- **40 Gb/s**
- **100 Gb/s** o superiores en centros de datos y redes troncales.

A pesar de este incremento de velocidad, muchos de los principios fundamentales de Ethernet se mantienen.

---

### ¿Por qué Ethernet ha tenido tanto éxito?

El éxito de Ethernet no se debe únicamente a su velocidad.

También influyen otros factores:

- Es un estándar ampliamente aceptado.
- Existe una gran variedad de fabricantes compatibles.
- Su instalación resulta sencilla.
- Permite ampliar fácilmente la red.
- Su coste es reducido en comparación con otras tecnologías.
- Ofrece un funcionamiento fiable y estable.

Gracias a estas características, Ethernet continúa siendo la tecnología utilizada en la inmensa mayoría de las redes locales cableadas actuales.

---

!!! note "Recuerda"

    Ethernet es el conjunto de tecnologías definido principalmente por la familia de estándares **IEEE 802.3** y constituye la base de la mayoría de las redes LAN cableadas actuales.

!!! tip "¿Sabías que...?"

    Cuando realizas un `ping` a otro ordenador de tu red local, es posible que antes del primer mensaje ICMP tu equipo necesite utilizar ARP para averiguar la dirección MAC del destinatario.

!!! abstract "🛠️ En el taller..."

    En la práctica con Cisco Packet Tracer observarás las direcciones MAC de los equipos, la tabla MAC del switch y el intercambio **ARP Request / ARP Reply** que se produce antes de determinadas comunicaciones.

!!! question "Piensa un momento..."

    Si un switch recibe una trama destinada a una dirección MAC que ya conoce, ¿qué información de su tabla utilizará para decidir por qué puerto debe reenviarla?



## 4.5 Selección de una topología según las necesidades

Hasta ahora hemos estudiado las principales topologías de red y sus características.

Sin embargo, en un proyecto real no basta con conocerlas. Un técnico debe ser capaz de seleccionar la más adecuada para cada situación.

La elección dependerá de numerosos factores técnicos, económicos y organizativos.

No existe una topología perfecta para todos los casos.

La mejor opción será siempre aquella que responda a las necesidades concretas de la instalación.

---

### Factores que influyen en la elección

Antes de diseñar una red conviene analizar aspectos como los siguientes:

- Número de dispositivos que se van a conectar.
- Tamaño del edificio o de las instalaciones.
- Presupuesto disponible.
- Posibilidad de ampliar la red en el futuro.
- Nivel de disponibilidad requerido.
- Facilidad de mantenimiento.
- Rendimiento esperado.
- Coste de las posibles averías.

Todos estos factores deben valorarse conjuntamente antes de decidir la arquitectura de la red.

---

### Redes domésticas

En una vivienda suele existir un número reducido de dispositivos:

- Ordenadores.
- Teléfonos móviles.
- Televisores inteligentes.
- Consolas.
- Impresoras.
- Dispositivos IoT.

En este tipo de instalaciones normalmente se utiliza una **topología física en estrella**, donde todos los equipos se conectan al router doméstico, ya sea mediante cable Ethernet o mediante Wi-Fi.

Esta solución resulta sencilla, económica y suficientemente fiable.

---

### Pequeñas y medianas empresas

En una empresa aparecen nuevas necesidades.

Es habitual disponer de:

- Varios switches.
- Servidores.
- Impresoras de red.
- Puntos de acceso Wi-Fi.
- Sistemas de videovigilancia.
- Telefonía IP.

En estos casos suele utilizarse una **estructura en árbol**, formada por varios switches distribuidos por las diferentes zonas del edificio.

Esta organización facilita el crecimiento de la red y simplifica su administración.

---

### Grandes organizaciones

Las universidades, hospitales, centros de datos y grandes empresas requieren un nivel de disponibilidad mucho mayor.

Una interrupción del servicio puede provocar importantes pérdidas económicas o afectar al funcionamiento de servicios críticos.

Por este motivo es habitual combinar una estructura jerárquica con enlaces redundantes que proporcionan rutas alternativas en caso de avería.

Aunque desde el punto de vista físico la red sigue organizándose principalmente en estrella y árbol, determinadas zonas utilizan características propias de una topología en malla para aumentar la disponibilidad.

---

### Comparación de las principales topologías

La siguiente tabla resume las características generales de las topologías estudiadas.

| Topología | Coste | Facilidad de ampliación | Tolerancia a fallos | Uso actual |
|------------|:----:|:-----------------------:|:-------------------:|:----------:|
| Bus | Bajo | Baja | Baja | Muy reducido |
| Anillo | Medio | Baja | Media | Muy reducido |
| Estrella | Medio | Alta | Alta | Muy elevado |
| Malla | Alto | Media | Muy alta | Redes críticas |
| Árbol | Medio | Muy alta | Alta | Redes empresariales |

Como puede observarse, la topología en estrella y las estructuras jerárquicas basadas en árboles son las más utilizadas actualmente en las redes locales.

---

### La elección en la práctica

En la mayoría de los proyectos actuales, la elección no consiste en seleccionar una única topología.

Lo habitual es combinar varias de ellas.

Por ejemplo:

- Una empresa puede utilizar una estructura en árbol para conectar diferentes plantas del edificio.
- Cada planta puede disponer de una topología física en estrella.
- Entre edificios pueden existir enlaces redundantes que aporten características propias de una malla.

Esta combinación permite obtener redes escalables, fiables y fáciles de mantener.

<figure class="figura-libro">
  <img
    src="../../assets/images/parte1/capitulo4/figura4_11.png"
    alt="Selección de topologías según el tipo de instalación"
  >
  <figcaption>
    <strong>Figura 4.11.</strong> Ejemplos de selección de topologías según las necesidades de la instalación. Las redes domésticas suelen utilizar una estrella sencilla, mientras que las redes empresariales y educativas emplean estructuras jerárquicas y los entornos críticos incorporan enlaces redundantes para aumentar la disponibilidad.
  </figcaption>
</figure>

---

!!! note "Recuerda"

    La elección de una topología depende siempre de las necesidades de la instalación y no existe una solución única válida para todos los casos.

!!! tip "¿Sabías que...?"

    Muchas redes empresariales combinan varias topologías diferentes dentro de la misma infraestructura para aprovechar las ventajas de cada una de ellas.

!!! abstract "🛠️ En el taller..."

    En la siguiente parte del libro aprenderás a diseñar e instalar una red cableada siguiendo la estructura jerárquica utilizada en la mayoría de las empresas.

!!! question "Piensa un momento..."

    Si tuvieras que diseñar la red de un instituto con varias plantas y cientos de ordenadores, ¿utilizarías una única topología para todo el edificio o combinarías varias? Razona tu respuesta.

## Práctica guiada con Cisco Packet Tracer

### Objetivos

En esta práctica aprenderás a construir diferentes topologías de red utilizando Cisco Packet Tracer y comprobarás cómo influye la organización física de los dispositivos en el funcionamiento de la red.

Al finalizar la práctica serás capaz de:

- Crear una red en estrella utilizando un switch.
- Comparar distintas topologías físicas.
- Comprobar el comportamiento de la red ante una avería.
- Relacionar la teoría estudiada con una instalación real.

---

### Material necesario

- Cisco Packet Tracer.
- 1 switch Cisco 2960.
- 4 ordenadores.
- Cables Copper Straight-Through.

---

## Paso 1. Crear una red en estrella

<figure class="figura-libro">
  <img
    src="../../assets/images/parte1/capitulo4/figura4_12.png"
    alt="Topología en estrella utilizada en la práctica"
  >
  <figcaption>
    <strong>Figura 4.12.</strong> Topología en estrella utilizada en la práctica guiada. Cuatro ordenadores se conectan mediante enlaces Ethernet independientes a un switch Cisco 2960 y utilizan direcciones IP pertenecientes a la misma red local.
  </figcaption>
</figure>

Añade a la zona de trabajo los siguientes dispositivos:

- Switch Cisco 2960.
- PC0
- PC1
- PC2
- PC3

Conecta cada ordenador al switch mediante un cable Ethernet directo.

Al finalizar deberás obtener una topología física en estrella.

---

## Paso 2. Configurar las direcciones IP

Asigna las siguientes direcciones:

| Equipo | Dirección IP | Máscara |
|---------|--------------|---------|
| PC0 | 192.168.1.10 | 255.255.255.0 |
| PC1 | 192.168.1.11 | 255.255.255.0 |
| PC2 | 192.168.1.12 | 255.255.255.0 |
| PC3 | 192.168.1.13 | 255.255.255.0 |

No es necesario configurar puerta de enlace.

---

### Comprobar las direcciones MAC de los equipos

Antes de realizar la primera comunicación vamos a comprobar que cada interfaz Ethernet tiene dos direcciones diferentes:

```text
Dirección IPv4
Dirección MAC
```

Selecciona:

```text
PC0
 ↓
Desktop
 ↓
Command Prompt
```

y ejecuta:

```cmd
ipconfig /all
```

Localiza la dirección IPv4 y la dirección física o MAC.

Anótalas:

| Equipo | Dirección IPv4 | Dirección MAC |
|--------|----------------|---------------|
| PC0 | 192.168.1.10 | |
| PC1 | 192.168.1.11 | |
| PC2 | 192.168.1.12 | |
| PC3 | 192.168.1.13 | |

Repite el procedimiento en los cuatro ordenadores.

!!! question "Comprueba"

    ¿Tienen todos los ordenadores una dirección MAC diferente?

    ¿Qué formato utiliza Packet Tracer para representar estas direcciones?

### Comprobar la tabla ARP antes de la comunicación

Volvemos a PC0:

```text
PC0
 ↓
Desktop
 ↓
Command Prompt
```

Ejecuta:

```cmd
arp -a
```

Observa las asociaciones que aparecen.

La tabla ARP relaciona:

```text
DIRECCIÓN IPv4
       ↕
DIRECCIÓN MAC
```

Es posible que todavía no aparezca PC3, ya que PC0 puede no haberse comunicado todavía con él.

Nuestro objetivo será comprobar qué ocurre cuando PC0 necesita enviar información a:

```text
192.168.1.13
```

### Realizar la primera comunicación

Desde PC0 ejecuta:

```cmd
ping 192.168.1.13
```

Estamos intentando comunicarnos con PC3.

Pero antes de enviar correctamente las tramas Ethernet, PC0 necesita conocer la dirección MAC correspondiente a:

```text
192.168.1.13
```

Si todavía no dispone de esta información, utilizará:

```text
ARP
```

De forma simplificada:

```text
PC0 conoce:

192.168.1.13
      ↓
¿Conozco su MAC?
      ↓
     NO
      ↓
ARP Request
      ↓
¿Quién tiene 192.168.1.13?
      ↓
ARP Reply
      ↓
PC3 comunica su MAC
      ↓
PC0 ya puede enviar
las tramas necesarias
      ↓
ICMP
      ↓
PING
```

Por tanto, aunque el usuario únicamente haya ejecutado:

```cmd
ping 192.168.1.13
```

pueden producirse dos procesos diferentes:

```text
ARP
 ↓
averiguar la MAC

ICMP
 ↓
comprobar la comunicación
```

!!! note "El primer ping puede tardar un poco más"

    En algunas situaciones, la primera respuesta puede tardar más o incluso perderse mientras se realizan procesos previos como la resolución ARP.

    Los siguientes intentos pueden realizarse más rápidamente porque el equipo ya conoce la dirección MAC del destino.

### ¿Qué ha aprendido PC0?

Después de realizar el `ping`, vuelve a ejecutar:

```cmd
arp -a
```

Busca la dirección:

```text
192.168.1.13
```

Deberías poder observar una asociación entre la dirección IPv4 de PC3 y su dirección MAC.

Conceptualmente:

```text
TABLA ARP DE PC0

192.168.1.13 → MAC de PC3
```

Compara esa dirección MAC con la que anotaste anteriormente utilizando `ipconfig /all`.

¿Coinciden?

Esto demuestra que PC0 ha aprendido qué dirección MAC corresponde a la dirección IPv4 de PC3.

### Observar ARP en Simulation Mode

Ahora vamos a observar el proceso directamente.

Cambia Packet Tracer de:

```text
Realtime
```

a:

```text
Simulation
```

En los filtros de eventos deja visibles:

```text
ARP
ICMP
```

Realiza nuevamente una comunicación entre PC0 y PC3.

!!! warning "ARP puede no aparecer"

    Si PC0 ya conoce la dirección MAC de PC3 porque acabamos de realizar el `ping`, puede utilizar la información almacenada en su tabla ARP y no necesitar realizar otra petición.

    En ese caso, elimina las asociaciones dinámicas de la tabla ARP o reinicia la situación de la simulación antes de repetir la prueba.

Observa el orden de los acontecimientos.

Primero deberías poder identificar:

```text
ARP Request
```

La petición pregunta esencialmente:

```text
¿Quién tiene 192.168.1.13?
```

Como PC0 todavía desconoce la MAC de PC3, la petición utiliza broadcast:

```text
FF:FF:FF:FF:FF:FF
```

Después aparece:

```text
ARP Reply
```

PC3 comunica su dirección MAC a PC0.

Finalmente pueden intercambiarse los mensajes:

```text
ICMP Echo Request
ICMP Echo Reply
```

Por tanto:

```text
ARP Request
     ↓
ARP Reply
     ↓
ICMP Echo Request
     ↓
ICMP Echo Reply
```

!!! question "Observa y responde"

    1. ¿Qué dirección IPv4 busca PC0 mediante ARP?
    2. ¿Qué dirección MAC utiliza el ARP Request como destino?
    3. ¿Por qué se utiliza broadcast?
    4. ¿Qué equipo responde al ARP Request?
    5. ¿Qué información contiene el ARP Reply?
    6. ¿Qué protocolo aparece después de ARP?

### Comprobar lo que ha aprendido el switch

Mientras los ordenadores se han comunicado, el switch también ha estado aprendiendo.

Recuerda:

```text
PC
 ↓
Tabla ARP
 ↓
IP ↔ MAC
```

mientras que:

```text
SWITCH
 ↓
Tabla MAC
 ↓
MAC ↔ puerto
```

Selecciona el switch y abre:

```text
CLI
```

Pulsa `Enter` si es necesario y ejecuta:

```text
enable
```

Después:

```text
show mac address-table
```

Observa las direcciones MAC aprendidas por el switch.

Encontrarás asociaciones similares a:

```text
MAC                   PUERTO

MAC de PC0    →       Fa0/1
MAC de PC1    →       Fa0/2
MAC de PC2    →       Fa0/3
MAC de PC3    →       Fa0/4
```

Los puertos concretos dependerán de dónde hayas conectado cada ordenador.

Compara las MAC mostradas con las que anotaste anteriormente.

!!! question "Piensa como un switch"

    Si llega una trama destinada a la MAC de PC3:

    1. ¿Qué tabla consulta el switch?
    2. ¿Busca una dirección IPv4 o una dirección MAC?
    3. ¿Qué información obtiene de la tabla?
    4. ¿Por qué puerto enviará la trama?

---

## Paso 4. Simular una avería

<figure class="figura-libro">
  <img
    src="../../assets/images/parte1/capitulo4/figura4_13.png"
    alt="Efecto de una avería en un enlace de una topología en estrella"
  >
  <figcaption>
    <strong>Figura 4.13.</strong> Efecto de la desconexión de un enlace en una topología en estrella. El equipo PC2 queda aislado, mientras que el resto de dispositivos continúa comunicándose normalmente a través del switch.
  </figcaption>
</figure>

Desconecta el cable que une **PC2** con el switch.

Observa qué ocurre.

Comprueba:

- ¿Puede comunicarse PC2?
- ¿Siguen comunicándose el resto de equipos?

Vuelve a conectar el cable y verifica que la red recupera el funcionamiento normal.

---

## Paso 5. Comparar con una topología en bus

Aunque Packet Tracer no permite construir fácilmente una red Ethernet en bus tradicional, observa el esquema mostrado en el capítulo e identifica las diferencias respecto a la estrella.

Reflexiona sobre las siguientes cuestiones:

- ¿Qué ocurriría si el cable principal se rompiera?
- ¿Sería sencillo añadir nuevos ordenadores?
- ¿Sería fácil localizar una avería?

---

## Paso 6. Analizar el crecimiento de la red

Supón que el aula necesita incorporar ocho ordenadores nuevos.

Responde:

- ¿Qué elementos habría que añadir?
- ¿Sería necesario modificar el cableado existente?
- ¿Qué ventajas ofrece la topología en estrella para ampliar la red?

---

## Actividades

1. ¿Qué topología física has construido?

2. ¿Qué dispositivo ocupa el centro de la red?

3. ¿Qué ocurre cuando se desconecta un único cable?

4. ¿Qué ventajas presenta esta topología respecto a una red en bus?

5. ¿Por qué las redes Ethernet actuales utilizan switches?

### Tabla MAC frente a tabla ARP

Después de realizar la práctica ya podemos distinguir claramente ambas tablas:

| | Tabla ARP | Tabla MAC |
|---|---|---|
| ¿Dónde la hemos consultado? | PC | Switch |
| ¿Qué relaciona? | IPv4 ↔ MAC | MAC ↔ puerto |
| Comando utilizado | `arp -a` | `show mac address-table` |
| ¿Para qué sirve? | Conocer la MAC correspondiente a una IPv4 | Saber por qué puerto reenviar una trama |

No debemos confundirlas:

```text
PC0
 │
 │ arp -a
 ↓
TABLA ARP
IPv4 ↔ MAC


SWITCH
 │
 │ show mac address-table
 ↓
TABLA MAC
MAC ↔ PUERTO
```

Ambas participan en la comunicación, pero realizan funciones diferentes.

---

## Conclusiones

La topología física en estrella constituye la base de la mayoría de las redes Ethernet modernas.

Su facilidad de ampliación, el aislamiento de averías y el buen rendimiento explican por qué ha sustituido prácticamente por completo a las antiguas topologías en bus utilizadas durante los primeros años de Ethernet.

## Conceptos clave

En este capítulo has estudiado cómo se organizan físicamente y lógicamente las redes informáticas, así como los criterios utilizados para seleccionar la topología más adecuada en función de las necesidades de cada instalación.

La siguiente tabla resume los conceptos más importantes.

| Concepto | Descripción |
|-----------|-------------|
| **Topología de red** | Forma en que se organizan las conexiones entre los dispositivos de una red. |
| **Topología física** | Describe cómo están conectados físicamente los dispositivos mediante cables o enlaces inalámbricos. |
| **Topología lógica** | Describe el recorrido que sigue la información entre los dispositivos durante una comunicación. |
| **Topología en bus** | Todos los dispositivos comparten un único cable principal. Actualmente apenas se utiliza en redes Ethernet. |
| **Topología en anillo** | Los dispositivos se conectan formando un circuito cerrado por el que circula la información. |
| **Topología en estrella** | Todos los equipos se conectan a un dispositivo central, normalmente un switch. Es la topología física más utilizada en las redes locales actuales. |
| **Topología en malla** | Cada dispositivo dispone de varios enlaces con otros equipos, proporcionando rutas alternativas y una elevada tolerancia a fallos. |
| **Topología en árbol** | Organización jerárquica formada por varios switches distribuidos en diferentes niveles. Muy utilizada en empresas y centros educativos. |
| **Ethernet** | Conjunto de estándares IEEE 802.3 utilizados en la mayoría de las redes locales actuales. |
| **Switch** | Dispositivo de red que reenvía las tramas únicamente por el puerto correspondiente al destinatario, mejorando el rendimiento de la red. |
| **Dirección MAC** | Identificador físico de una interfaz de red utilizado por los switches para reenviar correctamente las tramas Ethernet. |
| **Redundancia** | Existencia de enlaces alternativos que permiten mantener la comunicación cuando se produce una avería. |

!!! note "Recuerda"

    La mayoría de las redes locales actuales utilizan una **topología física en estrella** basada en switches Ethernet.

    En redes empresariales, esta estructura suele organizarse de forma **jerárquica**, dando lugar a topologías en árbol.

!!! tip "Lo más importante"

    Si recuerdas una única idea de este capítulo, que sea esta:

    **La topología física indica cómo están conectados los dispositivos, mientras que la topología lógica explica cómo circulan realmente los datos entre ellos.**

## Resumen del capítulo

En este capítulo hemos estudiado cómo se organizan las conexiones entre los dispositivos que forman una red informática mediante el concepto de **topología de red**.

En primer lugar, hemos aprendido que una topología describe la forma en que los equipos están conectados y cómo puede circular la información entre ellos. La elección de una topología adecuada influye directamente en el rendimiento, la fiabilidad, el coste de instalación y la facilidad para ampliar una red.

A continuación, hemos diferenciado dos conceptos fundamentales:

- La **topología física**, que representa la disposición real de los dispositivos, los cables y los equipos de interconexión.
- La **topología lógica**, que describe el recorrido que siguen los datos durante una comunicación.

Aunque ambas están relacionadas, no siempre coinciden. Una misma red puede presentar una topología física determinada y un funcionamiento lógico diferente.

Posteriormente, hemos estudiado las principales topologías físicas utilizadas en redes informáticas:

- **Bus**, utilizada en las primeras redes Ethernet y actualmente en desuso.
- **Anillo**, donde los dispositivos forman un circuito cerrado.
- **Estrella**, la más empleada en las redes locales modernas.
- **Malla**, que proporciona múltiples rutas de comunicación y una elevada tolerancia a fallos.
- **Árbol**, estructura jerárquica ampliamente utilizada en redes empresariales y centros educativos.

También hemos comprobado que las redes Ethernet actuales utilizan una **topología física en estrella**, conectando todos los dispositivos a un switch central. Este diseño facilita el mantenimiento, mejora el rendimiento y permite ampliar la red de forma sencilla.

Además, hemos visto cómo un switch Ethernet reenvía las tramas únicamente hacia el dispositivo de destino utilizando su tabla de direcciones MAC, evitando el tráfico innecesario y permitiendo que varias comunicaciones tengan lugar de forma simultánea.

Por último, hemos analizado cómo seleccionar la topología más adecuada en función del tipo de instalación, comprobando que una vivienda, una pequeña empresa, un centro educativo o un hospital presentan necesidades muy diferentes.

La práctica realizada con Cisco Packet Tracer ha permitido comprobar estas diferencias construyendo una red en estrella, simulando una avería y observando que la desconexión de un único enlace solo afecta al dispositivo conectado a dicho cable.

Con los conocimientos adquiridos en este capítulo ya dispones de una visión completa sobre la organización física de una red local.

En el próximo capítulo comenzaremos la **Parte II del libro**, dedicada al **cableado estructurado**, donde aprenderás cómo diseñar e instalar una infraestructura de cableado profesional siguiendo las normas y recomendaciones utilizadas en las redes empresariales actuales.

## Cuestionario de autoevaluación

Responde a las siguientes preguntas sin consultar el contenido del capítulo. Si tienes dudas, vuelve a revisar el apartado correspondiente antes de continuar.

### Preguntas tipo test

**1. ¿Qué describe una topología de red?**

a) El sistema operativo utilizado por los equipos.

b) La forma en que se organizan las conexiones entre los dispositivos.

c) El tipo de cable utilizado en la instalación.

d) La velocidad de transmisión de la red.

---

**2. ¿Qué representa una topología física?**

a) El recorrido de los datos por la red.

b) La disposición real de los dispositivos y los enlaces.

c) Las direcciones IP de los equipos.

d) La configuración del sistema operativo.

---

**3. ¿Qué representa una topología lógica?**

a) El tipo de cable instalado.

b) La posición física de los switches.

c) La forma en que circula la información entre los dispositivos.

d) El número de ordenadores conectados.

---

**4. ¿Cuál es la topología física más utilizada en las redes Ethernet actuales?**

a) Bus.

b) Anillo.

c) Estrella.

d) Malla.

---

**5. ¿Qué dispositivo ocupa normalmente el centro de una red Ethernet en estrella?**

a) Router.

b) Hub.

c) Switch.

d) Servidor.

---

**6. ¿Cuál es la principal ventaja de una topología en estrella frente a una topología en bus?**

a) Utiliza menos cable.

b) Permite conectar más dispositivos sin necesidad de switches.

c) La avería de un enlace normalmente solo afecta al equipo conectado a ese enlace.

d) No necesita dispositivos de interconexión.

---

**7. ¿Qué topología proporciona la mayor tolerancia a fallos gracias a la existencia de rutas alternativas?**

a) Bus.

b) Anillo.

c) Estrella.

d) Malla.

---

### Preguntas de respuesta corta

**8. Explica con tus propias palabras la diferencia entre una topología física y una topología lógica.**

---

**9. ¿Por qué Ethernet utiliza una topología física en estrella? Indica al menos tres ventajas.**

---

**10. ¿Qué función realiza un switch dentro de una red Ethernet?**

---

**11. ¿Qué factores deben tenerse en cuenta antes de seleccionar la topología de una red?**

---

### Relaciona cada topología con su característica principal

| Topología | Característica |
|-----------|----------------|
| Bus | ☐ Elevada tolerancia a fallos gracias a múltiples rutas. |
| Anillo | ☐ Todos los equipos comparten un único cable principal. |
| Estrella | ☐ Todos los dispositivos se conectan a un equipo central. |
| Malla | ☐ Existen varios caminos alternativos entre los dispositivos. |
| Árbol | ☐ Organización jerárquica basada en varios switches. |

---

### Caso práctico

**12.**

Una empresa ocupa un edificio de tres plantas y necesita conectar:

- 120 ordenadores.
- 8 impresoras de red.
- 6 puntos de acceso Wi-Fi.
- 2 servidores.

Además, desea ampliar la red en los próximos años.

Responde:

- ¿Qué topología física utilizarías?
- ¿Por qué la elegirías?
- ¿Qué ventajas ofrece frente a una topología en bus?

Justifica tu respuesta.

---

### Actividad de razonamiento

**13.**

Durante una avería se rompe el cable que conecta un ordenador con el switch.

¿Qué dispositivos dejarán de comunicarse?

Explica por qué ocurre.

---

### Actividad práctica

**14.**

Has construido una red en estrella con Cisco Packet Tracer.

Después de comprobar que todos los equipos responden correctamente al comando `ping`, desconectas el cable de uno de los ordenadores.

Describe:

- Qué ocurre con ese ordenador.
- Qué ocurre con el resto de la red.
- Qué demuestra este comportamiento sobre la topología en estrella.

---

### Autoevaluación

Marca la opción que mejor refleje tu nivel de aprendizaje.

| Aspecto | 😊 | 😐 | ☹ |
|---------|:--:|:--:|:--:|
| Comprendo qué es una topología de red. | ☐ | ☐ | ☐ |
| Distingo entre topología física y lógica. | ☐ | ☐ | ☐ |
| Identifico las principales topologías físicas. | ☐ | ☐ | ☐ |
| Comprendo por qué Ethernet utiliza una topología en estrella. | ☐ | ☐ | ☐ |
| Soy capaz de seleccionar una topología adecuada para una instalación. | ☐ | ☐ | ☐ |
| Puedo construir una red en estrella utilizando Cisco Packet Tracer. | ☐ | ☐ | ☐ |

## Reto final

### Diseñando la red de un centro educativo

Has sido contratado para participar en el diseño de la red informática de un nuevo instituto de Formación Profesional.

El edificio dispone de tres plantas y contará con:

- 18 aulas.
- 6 talleres.
- Biblioteca.
- Secretaría.
- Sala de profesores.
- Departamento de administración.
- Aula de servidores.
- Red Wi-Fi para alumnado y profesorado.

Se estima que la red dará servicio a más de **350 dispositivos**, entre ordenadores, impresoras de red, teléfonos IP, puntos de acceso Wi-Fi, cámaras IP y servidores.

El centro prevé además ampliar sus instalaciones durante los próximos años.

Tu misión consiste en proponer una topología adecuada y justificar todas tus decisiones.

---

## Parte 1. Identificación de necesidades

Antes de comenzar el diseño responde a las siguientes cuestiones.

1. ¿Se trata de una red pequeña, mediana o grande?

2. ¿Qué requisitos crees que serán más importantes?

- Escalabilidad.
- Facilidad de mantenimiento.
- Disponibilidad.
- Coste.
- Rendimiento.

Ordénalos de mayor a menor importancia y justifica tu respuesta.

---

## Parte 2. Selección de la topología

Indica qué topología utilizarías.

Explica por qué descartas las siguientes opciones:

- Bus.
- Anillo.
- Malla completa.

Finalmente justifica por qué consideras que la estrella y la estructura en árbol son las opciones más adecuadas.

---

## Parte 3. Diseño de la red

Realiza un esquema sencillo indicando:

- Switch principal.
- Switches de distribución.
- Aulas.
- Talleres.
- Servidores.
- Puntos de acceso Wi-Fi.

No es necesario representar todos los equipos.

Basta con un esquema general que muestre la organización de la red.

---

## Parte 4. Simulación con Cisco Packet Tracer

Construye una pequeña parte de la red utilizando:

- 1 switch Cisco 2960.
- 4 ordenadores.

Configura las direcciones IP.

Comprueba la comunicación mediante el comando:

```text
ping
```

Posteriormente desconecta uno de los cables y responde:

- ¿Qué equipo queda aislado?
- ¿Continúa funcionando el resto de la red?
- ¿Qué ventaja demuestra esta prueba?

---

## Parte 5. Reflexión

Responde razonadamente.

¿Por qué prácticamente todas las redes Ethernet actuales utilizan una topología física en estrella en lugar de una topología en bus?

Relaciona tu respuesta con aspectos como:

- Fiabilidad.
- Facilidad de ampliación.
- Mantenimiento.
- Coste.
- Rendimiento.

---

## Ampliación (opcional)

Investiga cómo está organizada la red informática de tu centro educativo.

Intenta averiguar:

- Cuántos armarios de comunicaciones existen.
- Cuántos switches hay instalados.
- Cómo están distribuidos por el edificio.
- Qué topología física utiliza la red.

Compara tus conclusiones con lo estudiado en este capítulo.

---

## Objetivo del reto

Si has sido capaz de resolver este reto, ya puedes analizar la estructura física y lógica de una red local, seleccionar la topología más adecuada para diferentes escenarios y justificar tus decisiones desde un punto de vista técnico.

Estos conocimientos constituyen la base necesaria para comenzar la **Parte II del libro**, donde aprenderás a diseñar e instalar una infraestructura de **cableado estructurado**, siguiendo las normas utilizadas en instalaciones profesionales.