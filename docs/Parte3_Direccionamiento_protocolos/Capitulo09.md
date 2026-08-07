# Capítulo 9. El modelo TCP/IP y la comunicación en la red

## Objetivos del capítulo

Al finalizar este capítulo serás capaz de:

- Comprender cómo viaja la información entre dos dispositivos conectados a una red.
- Explicar por qué son necesarios los protocolos de comunicación.
- Identificar las capas del modelo TCP/IP y la función de cada una.
- Relacionar el modelo TCP/IP con el modelo de referencia OSI.
- Comprender el proceso de encapsulación y desencapsulación de los datos.
- Identificar las distintas unidades de datos (PDU) utilizadas durante una comunicación.
- Analizar el recorrido completo de una comunicación desde una aplicación hasta el equipo de destino.

---

## Introducción

En los capítulos anteriores hemos aprendido a construir una infraestructura de red.

Sabemos seleccionar el medio de transmisión adecuado, instalar el cableado estructurado, montar tomas de red, conectar un Patch Panel, fabricar latiguillos y comprobar que toda la instalación funciona correctamente.

Sin embargo, todavía queda una pregunta fundamental por responder.

> **¿Qué ocurre exactamente cuando un ordenador envía información a otro?**

Cuando hacemos clic sobre el botón **Enviar** en un correo electrónico, abrimos una página web o copiamos un archivo a un servidor, los datos recorren un camino complejo hasta llegar a su destino.

Durante ese recorrido intervienen numerosos protocolos y dispositivos que trabajan de forma coordinada para garantizar que la información llegue correctamente.

Comprender este proceso resulta esencial para cualquier técnico de redes, ya que permitirá interpretar el funcionamiento de protocolos como **IP**, **ARP**, **TCP**, **UDP**, **DHCP**, **DNS** o **ICMP**, que estudiaremos en los próximos capítulos.

En este capítulo comenzaremos siguiendo el recorrido que realiza un mensaje desde que una aplicación lo genera hasta que llega al equipo destinatario.

No estudiaremos todavía el funcionamiento interno de cada protocolo, sino la forma en la que todos colaboran para hacer posible una comunicación.

---

!!! note "Recuerda"

    Una red correctamente instalada no garantiza por sí sola la comunicación entre los equipos. Para que los datos puedan viajar de un dispositivo a otro es necesario que todos utilicen un conjunto común de reglas denominado **protocolo de comunicación**.

!!! tip "¿Sabías que...?"

    Cada vez que visitas una página web intervienen simultáneamente numerosos protocolos de red. Algunos localizan el servidor, otros identifican los equipos, otros transportan los datos y otros verifican que la información llegue correctamente.

!!! abstract "🛠️ En este capítulo..."

    A partir de un único ejemplo práctico seguiremos el recorrido completo que realiza un mensaje a través de una red local, observando qué sucede en cada etapa del proceso de comunicación.

!!! question "Piensa un momento..."

    Cuando envías un mensaje desde tu ordenador a otro equipo de la red, ¿crees que la información viaja directamente tal y como la escribes o sufre algún tipo de transformación antes de transmitirse?

## 9.1 ¿Cómo viaja la información por una red?

En nuestro día a día utilizamos continuamente aplicaciones que intercambian información a través de una red.

Algunas acciones tan habituales como:

- enviar un correo electrónico;
- abrir una página web;
- compartir un documento en la nube;
- imprimir en una impresora de red;
- reproducir un vídeo en *streaming*;

tienen algo en común: todas necesitan transmitir información desde un dispositivo hasta otro.

Aunque para el usuario este proceso parece inmediato, en realidad intervienen numerosos elementos que trabajan de forma coordinada para que la comunicación sea posible.

Imaginemos una situación muy sencilla.

Ana está trabajando en su ordenador y quiere enviar un documento al servidor de la empresa.

Cuando pulsa el botón **Guardar**, el documento no aparece instantáneamente en el servidor.

Antes de llegar a su destino deberá recorrer un camino similar al siguiente:

1. La aplicación genera la información.
2. El sistema operativo prepara los datos para enviarlos.
3. La tarjeta de red transmite la información.
4. Los datos recorren la red.
5. El servidor recibe la información.
6. El sistema operativo del servidor la procesa.
7. Finalmente, la aplicación guarda el documento.

<figure class="figura-libro">
  <img
    src="../../assets/images/parte3/capitulo9/figura9_1.png"
    alt="Recorrido completo de un documento desde el ordenador de Ana hasta el servidor de la empresa"
  >
  <figcaption>
    <strong>Figura 9.1.</strong> Recorrido general que sigue un documento desde que una aplicación lo genera en el ordenador de Ana hasta que llega al servidor de la empresa. En este proceso intervienen la aplicación, el sistema operativo, la tarjeta de red, el medio de transmisión y el dispositivo receptor, que procesa finalmente la información.
  </figcaption>
</figure>

Todo este proceso suele completarse en apenas unas milésimas de segundo.

Sin embargo, durante ese breve intervalo se realizan numerosas operaciones que permiten que la información viaje de forma ordenada, segura y fiable.

---

### Una comparación con el servicio postal

Una forma sencilla de comprender este proceso consiste en compararlo con el envío de una carta.

Cuando queremos enviar una carta no basta con escribir el mensaje.

También debemos:

- introducir la carta en un sobre;
- escribir la dirección del destinatario;
- indicar el remitente;
- depositarla en un buzón;
- transportarla hasta la oficina correspondiente;
- clasificarla;
- repartirla;
- entregarla finalmente al destinatario.

En una red informática ocurre algo muy parecido.

Los datos tampoco pueden enviarse directamente.

Antes deben prepararse, identificarse correctamente y recorrer distintos dispositivos hasta alcanzar el equipo de destino.

Cada uno de esos pasos está perfectamente definido y sigue unas reglas comunes que todos los dispositivos de la red conocen y respetan.

Estas reglas reciben el nombre de **protocolos de comunicación**.

En los próximos apartados estudiaremos cómo trabajan estos protocolos y cómo colaboran entre sí para conseguir que millones de dispositivos puedan intercambiar información de forma fiable.

<figure class="figura-libro">
  <img
    src="../../assets/images/parte3/capitulo9/figura9_2.png"
    alt="Comparación entre el envío de una carta por correo postal y el envío de datos a través de una red informática"
  >
  <figcaption>
    <strong>Figura 9.2.</strong> Comparación entre el envío de una carta mediante el servicio postal y la transmisión de datos en una red informática. Aunque los medios utilizados son diferentes, ambos procesos siguen una secuencia organizada que identifica al destinatario, transporta la información y garantiza su entrega.
  </figcaption>
</figure>

---

### ¿Qué elementos intervienen en una comunicación?

En una comunicación sencilla dentro de una red local suelen intervenir los siguientes elementos:

- Un dispositivo emisor.
- Una aplicación que genera la información.
- Una tarjeta de red.
- Un medio de transmisión (cable o red inalámbrica).
- Uno o varios dispositivos de interconexión, como switches.
- Un dispositivo receptor.
- Una aplicación que recibe la información.

Cada uno de estos elementos desempeña una función específica.

Si cualquiera de ellos falla, la comunicación puede interrumpirse o producirse de forma incorrecta.

A lo largo de este capítulo analizaremos el papel que desempeña cada uno de ellos y veremos cómo colaboran para transportar la información desde el origen hasta el destino.

---

!!! note "Recuerda"

    Cuando utilizas una aplicación de red no envías directamente la información al equipo remoto. Los datos deben prepararse, identificarse y transportarse siguiendo una serie de reglas comunes denominadas **protocolos de comunicación**.

!!! tip "¿Sabías que...?"

    Una simple búsqueda en Internet puede implicar el intercambio de decenas o incluso cientos de mensajes entre tu ordenador, el router, varios servidores y distintos servicios de red, todo ello en apenas unos segundos.

!!! abstract "🛠️ En este capítulo..."

    Utilizaremos siempre el mismo ejemplo: el envío de un documento desde el ordenador de Ana al servidor de la empresa. Gracias a este escenario podremos seguir paso a paso todo el recorrido de la información y comprender qué ocurre en cada momento.

!!! question "Piensa un momento..."

    Si el documento debe pasar por varios dispositivos antes de llegar al servidor, ¿cómo sabe cada uno de ellos hacia dónde debe enviarlo?

## 9.2 ¿Por qué son necesarios los protocolos?

Imagina que viajas a un país cuyo idioma desconoces por completo.

Aunque las personas que te rodean quieran ayudarte, la comunicación será muy difícil si no compartís un lenguaje común.

En una red informática ocurre exactamente lo mismo.

Los ordenadores, los teléfonos móviles, las impresoras de red o los servidores están fabricados por empresas diferentes y utilizan sistemas operativos distintos.

Sin embargo, todos deben ser capaces de intercambiar información entre sí.

Para conseguirlo necesitan seguir un conjunto de normas comunes que indiquen, entre otras cosas:

- cómo debe prepararse la información;
- cuándo puede enviarse;
- cómo identificar al destinatario;
- cómo detectar posibles errores;
- qué hacer si la información no llega correctamente.

Estas normas reciben el nombre de **protocolos de comunicación**.

---

### ¿Qué es un protocolo?

Un **protocolo de comunicación** es un conjunto de reglas que define cómo deben intercambiar información dos o más dispositivos conectados a una red.

Gracias a estas reglas, equipos fabricados por empresas diferentes pueden comunicarse sin necesidad de conocer cómo están construidos internamente.

Por ejemplo, un ordenador con Windows puede acceder a un servidor Linux o imprimir en una impresora de red porque todos utilizan los mismos protocolos de comunicación.

Sin ellos, cada fabricante tendría que desarrollar sus propios sistemas y los dispositivos serían incompatibles entre sí.

<figure class="figura-libro">
  <img
    src="../../assets/images/parte3/capitulo9/figura9_3_4_5.png"
    alt="Concepto de protocolo de comunicación, comparación con el servicio postal y colaboración de protocolos en una comunicación"
  >
  <figcaption>
    <strong>Figuras 9.3, 9.4 y 9.5.</strong> Lámina compuesta que muestra tres aspectos fundamentales de la comunicación en red: (9.3) el concepto de protocolo de comunicación como conjunto de reglas comunes entre dispositivos, (9.4) la analogía entre el envío de una carta y la transmisión de datos en una red informática y (9.5) la colaboración de distintos protocolos para completar una comunicación entre un equipo emisor y un servidor.
  </figcaption>
</figure>

---

### ¿Qué funciones realizan los protocolos?

Aunque cada protocolo tiene un objetivo específico, la mayoría participa en alguna de las siguientes tareas:

- Identificar los dispositivos que intervienen en la comunicación.
- Organizar la información antes de enviarla.
- Transportar los datos hasta el destino.
- Detectar errores durante la transmisión.
- Solicitar el reenvío de la información cuando sea necesario.
- Coordinar el intercambio de datos entre emisor y receptor.

Cada protocolo resuelve un problema concreto.

Por este motivo, durante una única comunicación suelen intervenir varios protocolos trabajando de forma coordinada.

Más adelante veremos que algunos protocolos identifican los equipos, otros localizan servicios de red y otros garantizan que la información llegue correctamente.

---

### Un ejemplo cotidiano

Supongamos que Ana quiere acceder al servidor de la empresa para guardar un documento.

Aunque ella solo pulsa el botón **Guardar**, en realidad se ponen en funcionamiento numerosos protocolos.

Algunos se encargan de localizar el servidor.

Otros identifican el dispositivo destinatario.

Otros organizan la información antes de transmitirla.

Finalmente, otros verifican que el documento haya llegado correctamente.

Todo este proceso es completamente transparente para el usuario y suele completarse en apenas unos milisegundos.

---

### La importancia de utilizar estándares

Los protocolos utilizados en Internet y en las redes locales no han sido definidos por un único fabricante.

La mayoría forman parte de estándares internacionales elaborados por organizaciones especializadas.

Gracias a ello, dispositivos muy diferentes pueden comunicarse utilizando las mismas reglas.

Este principio de interoperabilidad ha permitido el enorme crecimiento de Internet y de las redes informáticas actuales.

En los próximos apartados estudiaremos cómo se organizan todos estos protocolos mediante una arquitectura por capas denominada **modelo TCP/IP**.

---

!!! note "Recuerda"

    Un protocolo de comunicación no es un programa ni un dispositivo físico. Es un conjunto de reglas que todos los equipos deben respetar para poder intercambiar información correctamente.

!!! tip "¿Sabías que...?"

    Cuando abres una página web intervienen simultáneamente varios protocolos distintos. Cada uno realiza una tarea específica y todos colaboran para que la comunicación sea rápida, fiable y transparente para el usuario.

!!! abstract "🛠️ En este capítulo..."

    A partir del siguiente apartado comenzaremos a estudiar cómo se organizan estos protocolos dentro del modelo TCP/IP, la arquitectura utilizada actualmente en Internet y en la inmensa mayoría de las redes locales.

!!! question "Piensa un momento..."

    Si cada fabricante utilizara sus propios protocolos y no existieran estándares comunes, ¿podría un ordenador con Windows comunicarse con un servidor Linux o con una impresora de otro fabricante? Razona tu respuesta.

## 9.3 El modelo TCP/IP

En el apartado anterior hemos visto que durante una comunicación intervienen numerosos protocolos y que cada uno realiza una tarea diferente.

Podría parecer razonable que todos trabajaran de forma independiente, pero esto haría que el desarrollo y mantenimiento de las redes fuese extremadamente complejo.

Para resolver este problema, los protocolos se organizan siguiendo una **arquitectura por capas**.

Cada capa agrupa protocolos que realizan funciones similares y ofrece sus servicios a la capa superior.

De este modo, cada protocolo únicamente necesita conocer las funciones de las capas inmediatamente superior e inferior, sin preocuparse por el funcionamiento interno del resto del sistema.

Esta organización facilita enormemente el diseño, la evolución y la interoperabilidad de las redes informáticas.

---

### ¿Qué es una arquitectura por capas?

Una **arquitectura por capas** es una forma de organizar los protocolos de comunicación dividiendo el proceso completo en varias etapas.

Cada una de estas etapas recibe el nombre de **capa** y tiene una función perfectamente definida.

Por ejemplo:

- una capa puede encargarse de preparar la información;
- otra puede identificar el destino;
- otra puede transportar los datos;
- otra puede transmitirlos por el medio físico.

Gracias a esta división del trabajo, cada capa puede evolucionar sin afectar al funcionamiento del resto.

---

### El origen del modelo TCP/IP

Durante las décadas de 1970 y 1980 surgieron diferentes propuestas para organizar las comunicaciones entre ordenadores.

Con el crecimiento de Internet terminó imponiéndose el modelo **TCP/IP**, desarrollado inicialmente para interconectar redes muy diferentes entre sí.

En la actualidad, este modelo constituye la base de funcionamiento de Internet y de prácticamente todas las redes locales.

Aunque a menudo se habla del "protocolo TCP/IP", en realidad no se trata de un único protocolo.

El modelo TCP/IP es una **arquitectura** formada por numerosos protocolos que colaboran entre sí para hacer posible la comunicación.

---

### Las cuatro capas del modelo TCP/IP

El modelo TCP/IP organiza la comunicación en cuatro capas principales.

De arriba hacia abajo son:

1. **Aplicación**
2. **Transporte**
3. **Internet**
4. **Acceso a la red**

Cada una de ellas realiza un conjunto específico de funciones.

En los siguientes apartados estudiaremos con detalle el papel que desempeña cada una.

Por el momento basta con comprender que todas trabajan conjuntamente para transportar la información desde el dispositivo emisor hasta el receptor.

<figure class="figura-libro">
  <img
    src="../../assets/images/parte3/capitulo9/figura9_6.png"
    alt="Organización de los protocolos mediante una arquitectura por capas según el modelo TCP/IP"
  >
  <figcaption>
    <strong>Figura 9.6.</strong> Organización de los protocolos mediante una arquitectura por capas según el modelo TCP/IP. Cada capa realiza funciones específicas, utiliza los servicios de la capa inferior y ofrece servicios a la capa superior, permitiendo transportar la información desde la aplicación del equipo emisor hasta la aplicación del equipo receptor.
  </figcaption>
</figure>

---

### ¿Por qué utilizar un modelo por capas?

La organización en capas aporta numerosas ventajas.

Entre las más importantes destacan:

- Facilita el diseño de nuevos protocolos.
- Permite sustituir un protocolo sin modificar toda la arquitectura.
- Favorece la compatibilidad entre fabricantes.
- Simplifica el desarrollo del software de comunicaciones.
- Facilita el diagnóstico y la resolución de problemas.
- Permite dividir funciones complejas en tareas más sencillas.

Estas ventajas explican por qué prácticamente todas las arquitecturas modernas de comunicaciones utilizan una organización por capas.

<figure class="figura-libro">
  <img
    src="../../assets/images/parte3/capitulo9/figura9_7.png"
    alt="Ventajas de una arquitectura por capas frente a una organización no estructurada de los protocolos"
  >
  <figcaption>
    <strong>Figura 9.7.</strong> Comparación entre una comunicación sin una arquitectura organizada y otra basada en el modelo TCP/IP. La organización por capas simplifica el diseño, facilita el mantenimiento, mejora la interoperabilidad entre fabricantes y permite ampliar la red sin modificar el funcionamiento del resto de protocolos.
  </figcaption>
</figure>

---

!!! note "Recuerda"

    El modelo TCP/IP no es un protocolo, sino una arquitectura que organiza numerosos protocolos de comunicación en cuatro capas que colaboran entre sí.

!!! tip "¿Sabías que...?"

    Aunque Internet ha evolucionado enormemente desde su creación, la organización básica del modelo TCP/IP continúa utilizándose en la inmensa mayoría de las comunicaciones actuales.

!!! abstract "🛠️ En el siguiente apartado..."

    Estudiaremos la función de cada una de las cuatro capas del modelo TCP/IP y veremos cómo colaboran para transportar la información desde una aplicación hasta el medio de transmisión.

!!! question "Piensa un momento..."

    Si cada protocolo trabajara de forma completamente independiente y sin una organización común, ¿crees que sería sencillo desarrollar nuevas aplicaciones o diagnosticar problemas en una red? Justifica tu respuesta.

## 9.4 Relación entre el modelo TCP/IP y el modelo OSI

En el apartado anterior hemos conocido el modelo **TCP/IP**, una arquitectura por capas utilizada actualmente en Internet y en la inmensa mayoría de las redes informáticas.

Sin embargo, al estudiar redes es habitual encontrar también otro modelo denominado **OSI (Open Systems Interconnection)**.

Aunque ambos describen el proceso de comunicación entre dispositivos, no tienen exactamente la misma finalidad.

Comprender la diferencia entre ellos evitará muchas confusiones en los próximos capítulos.

---

### ¿Qué es el modelo OSI?

El **modelo OSI** es un modelo de referencia desarrollado por la **Organización Internacional de Normalización (ISO)** con el objetivo de describir de forma estructurada cómo debe producirse una comunicación entre sistemas abiertos.

A diferencia del modelo TCP/IP, el modelo OSI **no define protocolos concretos**.

Su función consiste en servir como guía para clasificar las distintas tareas que intervienen durante una comunicación.

Por este motivo, el modelo OSI continúa utilizándose ampliamente en la enseñanza, en la documentación técnica y en el diagnóstico de redes.

---

### Las siete capas del modelo OSI

El modelo OSI divide el proceso de comunicación en **siete capas**, cada una con una función específica.

De arriba hacia abajo son:

1. Aplicación
2. Presentación
3. Sesión
4. Transporte
5. Red
6. Enlace de datos
7. Física

Cada capa ofrece servicios a la capa superior y utiliza los servicios proporcionados por la capa inferior.

Esta organización facilita el estudio de las comunicaciones y permite analizar con mayor precisión el funcionamiento de una red.

No obstante, en las redes actuales muchas de estas funciones se agrupan dentro de las cuatro capas del modelo TCP/IP.

---

### Equivalencia entre ambos modelos

Aunque el número de capas es diferente, ambos modelos describen el mismo proceso de comunicación.

La principal diferencia es que el modelo TCP/IP agrupa varias funciones que en el modelo OSI aparecen separadas.

La correspondencia general es la siguiente:

| Modelo TCP/IP | Modelo OSI |
|---------------|------------|
| Aplicación | Aplicación, Presentación y Sesión |
| Transporte | Transporte |
| Internet | Red |
| Acceso a la red | Enlace de datos y Física |

No es necesario memorizar esta tabla.

<figure class="figura-libro">
  <img
    src="../../assets/images/parte3/capitulo9/figura9_8.png"
    alt="Comparación entre el modelo TCP/IP y el modelo OSI, y utilización del modelo OSI como referencia para comprender y diagnosticar redes"
  >
  <img
    src="../../assets/images/parte3/capitulo9/figura9_9.png"
    alt="Comparación entre el modelo TCP/IP y el modelo OSI, y utilización del modelo OSI como referencia para comprender y diagnosticar redes"
  >
  <figcaption>
    <strong>Figuras 9.8 y 9.9.</strong> Comparación entre las capas de los modelos TCP/IP y OSI, mostrando su correspondencia funcional y el diferente propósito de cada uno. Mientras que el modelo TCP/IP constituye la base de las comunicaciones reales en las redes actuales, el modelo OSI se utiliza como referencia para comprender el funcionamiento de las comunicaciones, clasificar protocolos y facilitar el diagnóstico de incidencias.
  </figcaption>
</figure>

Lo importante es comprender que ambos modelos representan la misma comunicación desde perspectivas diferentes.

---

### ¿Cuál se utiliza realmente?

En el ámbito profesional, cuando se configura una red o se desarrolla una aplicación, se trabaja utilizando los protocolos del modelo **TCP/IP**.

Sin embargo, el modelo **OSI** sigue siendo una referencia muy útil para:

- explicar el funcionamiento de una red;
- clasificar protocolos y dispositivos;
- localizar averías;
- documentar incidencias técnicas.

Por este motivo, ambos modelos continúan apareciendo en los manuales de redes y en la formación de los técnicos.

---

### ¿Por qué estudiar los dos modelos?

Puede parecer innecesario aprender dos modelos diferentes.

Sin embargo, ambos se complementan.

El modelo TCP/IP permite comprender cómo funcionan realmente las comunicaciones actuales, mientras que el modelo OSI proporciona un marco teórico que facilita el estudio, la resolución de problemas y la clasificación de tecnologías de red.

En este libro utilizaremos principalmente el **modelo TCP/IP**, haciendo referencia al modelo OSI únicamente cuando resulte útil para comprender mejor un concepto o analizar una incidencia.

---

!!! note "Recuerda"

    El modelo TCP/IP es la arquitectura utilizada en las redes actuales. El modelo OSI es un modelo de referencia que ayuda a comprender y clasificar el proceso de comunicación.

!!! tip "¿Sabías que...?"

    Muchos fabricantes de equipos de red y numerosas certificaciones profesionales utilizan el modelo OSI para describir el funcionamiento de sus dispositivos y explicar procedimientos de diagnóstico, aunque las comunicaciones reales se basen en TCP/IP.

!!! abstract "🛠️ En el siguiente apartado..."

    Una vez conocidos los modelos TCP/IP y OSI, estudiaremos cómo la información desciende por las capas del equipo emisor y asciende por las capas del equipo receptor mediante el proceso de encapsulación y desencapsulación.

!!! question "Piensa un momento..."

    Si ambos modelos describen el mismo proceso de comunicación, ¿por qué crees que uno utiliza cuatro capas y el otro siete? ¿Qué ventajas puede tener agrupar varias funciones dentro de una misma capa?

## 9.5 Encapsulación y desencapsulación

En los apartados anteriores hemos aprendido que los protocolos de comunicación se organizan mediante una arquitectura por capas.

Ahora veremos cómo colaboran esas capas para transportar la información desde un dispositivo hasta otro.

Para comprender este proceso seguiremos nuevamente el ejemplo de Ana enviando un documento al servidor de la empresa.

---

### ¿Qué ocurre cuando una aplicación envía información?

Cuando Ana pulsa el botón **Guardar**, la aplicación genera la información que desea enviar al servidor.

Sin embargo, esos datos todavía no pueden transmitirse directamente por la red.

Antes deben prepararse para el viaje.

Para ello, la información va descendiendo por las distintas capas del modelo TCP/IP.

Cada una realiza una tarea concreta y añade la información necesaria para que la comunicación pueda completarse correctamente.

Este proceso recibe el nombre de **encapsulación**.

---

### El proceso de encapsulación

Durante la encapsulación, cada capa recibe la información procedente de la capa superior.

Tras realizar su función, añade sus propios datos de control y entrega el resultado a la siguiente capa.

De forma simplificada, el proceso es el siguiente:

1. La capa de **Aplicación** genera los datos.
2. La capa de **Transporte** añade información necesaria para controlar la comunicación.
3. La capa de **Internet** incorpora la información necesaria para identificar el origen y el destino.
4. La capa de **Acceso a la red** prepara la información para transmitirla por el medio físico.

Finalmente, la información sale del ordenador convertida en una secuencia de señales que viajan a través del cable o de la red inalámbrica.

Cada capa conoce únicamente la información que necesita procesar.

No necesita conocer el funcionamiento interno del resto de capas.

Esta independencia constituye una de las principales ventajas de la arquitectura TCP/IP.

---

### El viaje por la red

Una vez encapsulada, la información abandona el dispositivo emisor y comienza su recorrido por la red.

Durante este trayecto puede atravesar distintos dispositivos, como switches o routers, dependiendo del destino al que vaya dirigida.

Cada uno de estos dispositivos procesa únicamente la información necesaria para realizar su trabajo y reenviar los datos hacia el siguiente punto del recorrido.

Finalmente, la información llega al servidor de la empresa.

---

### El proceso de desencapsulación

Cuando la información alcanza el dispositivo receptor ocurre el proceso contrario.

Los datos ascienden por las distintas capas del modelo TCP/IP.

Cada capa elimina la información de control que había añadido su equivalente en el equipo emisor y entrega el resultado a la capa superior.

Este proceso recibe el nombre de **desencapsulación**.

Gracias a él, la aplicación del servidor recibe exactamente el mismo documento que había generado Ana en su ordenador.

Todo este intercambio suele completarse en apenas unos milisegundos.

<figure class="figura-libro">
  <img
    src="../../assets/images/parte3/capitulo9/figura9_10_11_12.png"
    alt="Proceso completo de encapsulación, recorrido por la red y desencapsulación según el modelo TCP/IP"
  >
  <figcaption>
    <strong>Figuras 9.10, 9.11 y 9.12.</strong> Proceso completo de comunicación según el modelo TCP/IP. La información generada por la aplicación del equipo emisor desciende por las distintas capas durante la encapsulación, atraviesa la red a través de los dispositivos de interconexión y asciende por las capas del equipo receptor durante la desencapsulación, permitiendo que la aplicación reciba exactamente los mismos datos que fueron enviados.
  </figcaption>
</figure>

---

### Una idea muy importante

Durante todo este proceso la aplicación no necesita conocer cómo funciona la red.

Del mismo modo, la tarjeta de red no necesita saber qué aplicación ha generado los datos.

Cada capa realiza exclusivamente su función y colabora con las demás para completar la comunicación.

Esta división del trabajo simplifica enormemente el desarrollo de nuevas aplicaciones y la evolución de las redes informáticas.

---

!!! note "Recuerda"

    La encapsulación consiste en añadir progresivamente información de control a medida que los datos descienden por las capas del modelo TCP/IP. La desencapsulación realiza el proceso inverso en el equipo receptor.

!!! tip "¿Sabías que...?"

    Cada vez que envías un mensaje, consultas una página web o reproduces un vídeo en Internet, este proceso de encapsulación y desencapsulación se realiza automáticamente en todos los dispositivos implicados.

!!! abstract "🛠️ En el siguiente apartado..."

    Después de comprender cómo viajan los datos por las distintas capas, estudiaremos las **unidades de datos de protocolo (PDU)** y veremos cómo cambia el nombre de la información a medida que avanza por la arquitectura TCP/IP.

!!! question "Piensa un momento..."

    Si una de las capas olvidara añadir la información de control que le corresponde, ¿crees que el dispositivo receptor podría interpretar correctamente los datos? ¿Por qué?

## 9.6 Las unidades de datos de protocolo (PDU)

En el apartado anterior hemos visto que la información desciende por las distintas capas del modelo TCP/IP durante la encapsulación y asciende nuevamente durante la desencapsulación.

Aunque el contenido del documento no cambia, la forma en que cada capa lo interpreta sí es diferente.

Por este motivo, la información recibe un nombre distinto en función de la capa en la que se encuentre.

Estas denominaciones reciben el nombre de **PDU (Protocol Data Unit)** o **Unidad de Datos de Protocolo**.

---

### ¿Qué es una PDU?

Una **PDU** representa la información tal y como es tratada por una determinada capa del modelo de comunicación.

Cada capa añade su propia información de control durante la encapsulación y elimina esa información durante la desencapsulación.

Como consecuencia, la estructura de la información cambia ligeramente a medida que avanza por la arquitectura TCP/IP.

Por este motivo, cada capa utiliza un nombre diferente para referirse a esa información.

---

### Las PDU del modelo TCP/IP

Durante una comunicación podemos distinguir las siguientes unidades de datos:

| Capa | Nombre habitual de la PDU |
|------|----------------------------|
| Aplicación | Datos |
| Transporte | Segmento (TCP) o Datagrama (UDP) |
| Internet | Paquete |
| Acceso a la red | Trama |
| Medio físico | Bits |

Aunque la información transportada sigue siendo la misma, cada nueva capa añade los datos de control necesarios para realizar su trabajo.

Cuando la información llega al equipo receptor ocurre el proceso inverso.

Las capas eliminan progresivamente esos datos de control hasta recuperar los datos originales generados por la aplicación.

---

### Un ejemplo sencillo

Imaginemos nuevamente que Ana guarda un documento en el servidor de la empresa.

Durante el recorrido de la información podemos decir que:

- La aplicación genera **datos**.
- La capa de Transporte convierte esos datos en un **segmento**.
- La capa de Internet encapsula el segmento dentro de un **paquete**.
- La capa de Acceso a la red encapsula el paquete dentro de una **trama**.
- Finalmente, la información se transmite por el medio físico en forma de **bits**.

En el servidor ocurre exactamente el proceso contrario.

Los bits se convierten nuevamente en una trama, después en un paquete, posteriormente en un segmento y finalmente en los datos originales que recibe la aplicación.

<figure class="figura-libro">
  <img
    src="../../assets/images/parte3/capitulo9/figura9_13_14.png"
    alt="Evolución de la PDU durante la encapsulación y recuperación de la PDU durante la desencapsulación"
  >
  <figcaption>
    <strong>Figuras 9.13 y 9.14.</strong> Evolución de la Unidad de Datos de Protocolo (PDU) durante una comunicación. En el equipo emisor, la información cambia progresivamente de datos a segmento (o datagrama), paquete, trama y bits conforme desciende por las capas del modelo TCP/IP. En el equipo receptor se realiza el proceso inverso, eliminando la información de control añadida durante la encapsulación hasta recuperar los datos originales generados por la aplicación.
  </figcaption>
</figure>

---

### ¿Es necesario memorizar estos nombres?

No es necesario aprenderlos de memoria desde el primer momento.

Lo verdaderamente importante es comprender que cada capa trabaja con una representación diferente de la información.

Con la práctica terminarás utilizando estos nombres de forma natural cuando analices comunicaciones con herramientas como Wireshark o cuando estudies el funcionamiento de protocolos concretos.

---

!!! note "Recuerda"

    Una PDU es la forma en que una determinada capa representa la información durante una comunicación. El contenido no cambia, pero sí la información de control que acompaña a los datos.

!!! tip "¿Sabías que...?"

    Cuando utilices Wireshark observarás que las capturas muestran precisamente estas PDU. Cada protocolo añade su propia información de control, lo que permite analizar con detalle todo el proceso de comunicación.

!!! abstract "🛠️ Hemos completado el recorrido"

    Ya conocemos cómo se organiza la comunicación, cómo se encapsulan los datos y cómo cambia la información a medida que atraviesa las distintas capas del modelo TCP/IP.

!!! question "Piensa un momento..."

    Si la capa de Transporte no añadiera su información de control, ¿cómo podría el equipo receptor diferenciar los datos pertenecientes a distintas comunicaciones simultáneas?

# Práctica guiada: Siguiendo el recorrido de un mensaje en una red

## Objetivos

En esta práctica seguirás paso a paso el recorrido que realiza un mensaje desde un ordenador emisor hasta un servidor de la red.

Al finalizar la actividad serás capaz de:

- Identificar las capas del modelo TCP/IP.
- Diferenciar el modelo TCP/IP del modelo OSI.
- Comprender el proceso de encapsulación y desencapsulación.
- Reconocer las distintas PDU utilizadas durante una comunicación.
- Explicar el recorrido completo de la información desde el origen hasta el destino.

---

## Material necesario

- Un ordenador con conexión a Internet o a una red local.
- Papel y lápiz (o un editor de texto).
- Las figuras del capítulo 9.
- (Opcional) Wireshark, que utilizaremos con más detalle en capítulos posteriores.

---

# Situación inicial

Ana quiere guardar un documento en el servidor de la empresa.

Aunque para ella únicamente consiste en pulsar el botón **Guardar**, en realidad la información deberá atravesar numerosas etapas antes de llegar al servidor.

Durante esta práctica seguirás todo ese recorrido.

---

# Paso 1. Identificar el origen y el destino

Completa la siguiente tabla.

| Elemento | Identificación |
|----------|----------------|
| Equipo emisor | |
| Aplicación emisora | |
| Equipo receptor | |
| Aplicación receptora | |

---

# Paso 2. Recorrido por las capas

Numera correctamente el recorrido de la información.

| Orden | Capa |
|-------|------|
| ☐ | Aplicación |
| ☐ | Transporte |
| ☐ | Internet |
| ☐ | Acceso a la red |

A continuación responde:

**¿Por qué los datos deben atravesar todas las capas antes de salir del ordenador?**

---

# Paso 3. Encapsulación

Utilizando la Figura 9.10, indica qué ocurre en cada capa.

| Capa | ¿Qué sucede? |
|------|--------------|
| Aplicación | |
| Transporte | |
| Internet | |
| Acceso a la red | |

---

# Paso 4. Viaje por la red

Observa la Figura 9.11.

Indica qué función realiza cada uno de los siguientes dispositivos.

| Dispositivo | Función |
|-------------|---------|
| Switch | |
| Router | |
| Servidor | |

---

# Paso 5. Desencapsulación

Observa la Figura 9.12.

Completa la siguiente tabla.

| Capa | ¿Qué hace? |
|------|------------|
| Acceso a la red | |
| Internet | |
| Transporte | |
| Aplicación | |

---

# Paso 6. Identificar las PDU

Relaciona cada capa con su unidad de datos.

| Capa | PDU |
|------|-----|
| Aplicación | ☐ |
| Transporte | ☐ |
| Internet | ☐ |
| Acceso a la red | ☐ |
| Medio físico | ☐ |

Opciones:

- Datos
- Segmento
- Paquete
- Trama
- Bits

---

# Paso 7. Comparación entre TCP/IP y OSI

Completa la siguiente tabla.

| TCP/IP | OSI |
|---------|-----|
| Aplicación | |
| Transporte | |
| Internet | |
| Acceso a la red | |

---

# Paso 8. Explica el recorrido completo

Con tus propias palabras explica qué ocurre desde que Ana pulsa el botón **Guardar** hasta que el documento queda almacenado en el servidor.

Intenta utilizar correctamente los siguientes términos:

- protocolo;
- encapsulación;
- desencapsulación;
- PDU;
- modelo TCP/IP.

<figure class="figura-libro">
  <img
    src="../../assets/images/parte3/capitulo9/figura9_15_16.png"
    alt="Resumen del recorrido completo de una comunicación y mapa conceptual del capítulo"
  >
  <figcaption>
    <strong>Figuras 9.15 y 9.16.</strong> Lámina de síntesis del capítulo. La primera figura resume el recorrido completo de una comunicación según el modelo TCP/IP, desde la encapsulación en el equipo emisor hasta la desencapsulación en el receptor. La segunda presenta un mapa conceptual que relaciona los principales conceptos estudiados: protocolos de comunicación, modelos TCP/IP y OSI, encapsulación, desencapsulación y unidades de datos de protocolo (PDU).
  </figcaption>
</figure>

---

# Actividades

### 1.

¿Por qué los datos no pueden enviarse directamente desde la aplicación hasta el cable de red?

---

### 2.

¿Qué ventajas aporta dividir la comunicación en varias capas?

---

### 3.

¿Qué diferencias existen entre el modelo TCP/IP y el modelo OSI?

---

### 4.

¿Por qué cambia el nombre de la información durante la comunicación?

---

### 5.

¿Qué ocurriría si una de las capas dejara de realizar su función correctamente?

---

# Conclusiones

Aunque para el usuario una comunicación parece inmediata, en realidad la información atraviesa numerosas etapas antes de llegar a su destino.

La organización por capas permite dividir este proceso en tareas sencillas, facilita el desarrollo de nuevos protocolos y hace posible que dispositivos muy diferentes puedan comunicarse utilizando un mismo conjunto de reglas.

Comprender este recorrido será fundamental para estudiar en los próximos capítulos los protocolos que intervienen en cada una de estas etapas.

# Conceptos clave

**Arquitectura por capas:** forma de organizar los protocolos de comunicación dividiendo el proceso completo en varias capas, cada una con funciones específicas.

**Bits:** representación binaria de la información que se transmite por el medio físico.

**Capa:** nivel funcional dentro de una arquitectura de comunicación. Cada capa realiza una tarea concreta y utiliza los servicios de la capa inferior.

**Comunicación en red:** proceso mediante el cual dos o más dispositivos intercambian información utilizando un conjunto común de protocolos.

**Datos:** información generada por una aplicación antes de ser preparada para su transmisión por la red.

**Desencapsulación:** proceso mediante el cual el equipo receptor elimina progresivamente la información de control añadida durante la encapsulación hasta recuperar los datos originales.

**Encapsulación:** proceso por el que cada capa añade su propia información de control antes de transmitir los datos a la capa inferior.

**Interoperabilidad:** capacidad de dispositivos, aplicaciones y sistemas diferentes para comunicarse correctamente utilizando protocolos comunes.

**Modelo OSI:** modelo de referencia de siete capas desarrollado por la ISO para describir y analizar el funcionamiento de las comunicaciones en red.

**Modelo TCP/IP:** arquitectura de cuatro capas utilizada en Internet y en la mayoría de las redes actuales para organizar los protocolos de comunicación.

**Paquete:** unidad de datos utilizada por la capa de Internet durante una comunicación.

**PDU (Protocol Data Unit):** representación que recibe la información en cada una de las capas del modelo de comunicación.

**Protocolo de comunicación:** conjunto de reglas que permite que dos o más dispositivos intercambien información de forma correcta.

**Segmento:** unidad de datos utilizada habitualmente por la capa de Transporte cuando emplea el protocolo TCP.

**Trama:** unidad de datos utilizada por la capa de Acceso a la red antes de transmitir la información por el medio físico.

# Resumen

En este capítulo hemos estudiado cómo se produce una comunicación entre dos dispositivos conectados a una red informática.

Hemos comprobado que, aunque para el usuario acciones como enviar un correo electrónico, guardar un documento en un servidor o acceder a una página web parecen inmediatas, en realidad implican la colaboración de numerosos protocolos que trabajan de forma coordinada para transportar la información desde el equipo emisor hasta el receptor.

Para facilitar esta cooperación, los protocolos se organizan mediante una **arquitectura por capas**. Este enfoque divide el proceso de comunicación en varias etapas independientes, permitiendo que cada capa desempeñe una función específica sin necesidad de conocer el funcionamiento interno del resto.

A continuación hemos estudiado el **modelo TCP/IP**, la arquitectura utilizada en Internet y en la inmensa mayoría de las redes actuales. Este modelo organiza la comunicación en cuatro capas: **Aplicación**, **Transporte**, **Internet** y **Acceso a la red**, cada una responsable de un conjunto concreto de funciones.

También hemos conocido el **modelo OSI**, un modelo de referencia desarrollado por la ISO que divide el proceso de comunicación en siete capas. Aunque actualmente las redes funcionan utilizando TCP/IP, el modelo OSI continúa siendo una herramienta muy útil para comprender el funcionamiento de las comunicaciones, clasificar protocolos y facilitar el diagnóstico de incidencias.

Uno de los conceptos más importantes del capítulo ha sido el proceso de **encapsulación**. Hemos visto cómo la información generada por una aplicación desciende por las distintas capas del modelo TCP/IP y cómo cada una añade su propia información de control antes de entregar los datos a la capa inferior. Una vez encapsulada, la información puede recorrer la red hasta alcanzar el equipo destinatario.

En el dispositivo receptor tiene lugar el proceso inverso, denominado **desencapsulación**. Cada capa elimina la información de control añadida durante el envío y entrega el resultado a la capa superior hasta recuperar finalmente los datos originales generados por la aplicación del equipo emisor.

A lo largo del recorrido, la información recibe distintos nombres en función de la capa que la está procesando. Estas representaciones reciben el nombre de **PDU (Protocol Data Unit)** o **Unidades de Datos de Protocolo**. Así, durante una comunicación la información pasa sucesivamente de **datos** a **segmento**, **paquete**, **trama** y **bits**, recuperando posteriormente estas mismas unidades en orden inverso durante la desencapsulación.

Finalmente, mediante la práctica guiada, hemos seguido paso a paso el recorrido de un documento enviado desde el ordenador de Ana hasta el servidor de la empresa, identificando las capas implicadas, los procesos de encapsulación y desencapsulación y la evolución de las PDU durante toda la comunicación.

Este capítulo constituye la base sobre la que se apoyarán los siguientes. A partir de ahora estudiaremos los protocolos que intervienen en cada una de estas etapas y comprenderemos cómo colaboran para hacer posible el funcionamiento de las redes actuales.

# Cuestionario de autoevaluación

## Preguntas tipo test

### 1.

¿Cuál es la principal función de un protocolo de comunicación?

a) Aumentar la velocidad de transmisión de la red.

b) Definir un conjunto de reglas para que los dispositivos puedan intercambiar información.

c) Sustituir el sistema operativo de los equipos conectados.

d) Identificar físicamente los cables de la red.

---

### 2.

¿Qué modelo constituye actualmente la base de funcionamiento de Internet?

a) Modelo OSI.

b) Modelo IEEE 802.

c) Modelo TCP/IP.

d) Modelo Ethernet.

---

### 3.

¿Cuántas capas tiene el modelo TCP/IP?

a) Tres.

b) Cuatro.

c) Cinco.

d) Siete.

---

### 4.

¿Cuál de las siguientes afirmaciones es correcta?

a) El modelo OSI se utiliza para transportar datos por Internet.

b) El modelo TCP/IP es un modelo teórico que nunca se utiliza en redes reales.

c) El modelo OSI sirve como referencia para comprender y analizar las comunicaciones.

d) Ambos modelos contienen exactamente las mismas capas.

---

### 5.

¿Qué proceso consiste en añadir información de control a medida que los datos descienden por las capas?

a) Fragmentación.

b) Encapsulación.

c) Multiplexación.

d) Conmutación.

---

### 6.

¿Cómo se denomina el proceso inverso realizado por el equipo receptor?

a) Compresión.

b) Encapsulación.

c) Desencapsulación.

d) Enrutamiento.

---

### 7.

¿Qué nombre recibe la información en la capa de Internet?

a) Datos.

b) Segmento.

c) Paquete.

d) Trama.

---

### 8.

¿En qué capa se genera inicialmente la información que desea enviar una aplicación?

a) Transporte.

b) Internet.

c) Acceso a la red.

d) Aplicación.

---

### 9.

¿Qué representa una PDU?

a) Un dispositivo físico de red.

b) Una unidad de datos utilizada por una determinada capa del modelo de comunicación.

c) Un protocolo utilizado únicamente en Internet.

d) Un tipo de cable de red.

---

### 10.

¿Cuál es una de las principales ventajas de organizar la comunicación mediante capas?

a) Reduce el número de dispositivos necesarios.

b) Elimina la necesidad de utilizar protocolos.

c) Facilita el diseño, mantenimiento y evolución de las comunicaciones.

d) Permite transmitir información sin direcciones.

---

# Preguntas de respuesta corta

### 11.

Explica con tus propias palabras qué es un protocolo de comunicación.

---

### 12.

¿Por qué es necesario organizar los protocolos mediante una arquitectura por capas?

---

### 13.

Indica dos diferencias entre el modelo TCP/IP y el modelo OSI.

---

### 14.

Explica qué ocurre durante el proceso de encapsulación.

---

### 15.

¿En qué consiste la desencapsulación?

---

### 16.

¿Qué significa el término PDU?

---

### 17.

Ordena correctamente las siguientes PDU desde que la información sale de la aplicación hasta que se transmite por el medio físico.

- Bits
- Trama
- Datos
- Segmento
- Paquete

---

### 18.

¿Por qué cambia el nombre de la información durante una comunicación si el contenido sigue siendo el mismo?

---

### 19.

¿Qué ventajas aporta que cada capa realice una función específica?

---

### 20.

Resume en unas diez líneas el recorrido completo de un documento desde que Ana pulsa el botón **Guardar** hasta que el servidor recibe correctamente la información.

---

# Actividad de reflexión

Observa cualquier acción cotidiana que realices con un ordenador, como enviar un correo electrónico, acceder a una página web o guardar un archivo en una carpeta compartida.

A continuación responde:

- ¿Qué protocolos crees que podrían intervenir durante esa comunicación?
- ¿Por qué resulta útil organizar todo el proceso mediante una arquitectura por capas?
- ¿Qué conceptos aprendidos en este capítulo te ayudan a comprender mejor esa comunicación?

# Reto final

## Analiza una comunicación completa en una red local

Una pequeña empresa acaba de instalar una nueva red informática formada por:

- 8 ordenadores.
- 1 servidor de archivos.
- 1 switch.
- 1 router con acceso a Internet.

Uno de los empleados, Ana, desea guardar un documento en el servidor de la empresa.

El responsable de informática quiere comprobar que los nuevos técnicos comprenden cómo se produce realmente una comunicación entre dos equipos.

Tu misión consiste en analizar todo el proceso desde que Ana pulsa el botón **Guardar** hasta que el documento queda almacenado correctamente en el servidor.

---

# Parte 1. Identificación de los elementos

Completa la siguiente tabla.

| Elemento | Función |
|----------|---------|
| Aplicación | |
| Sistema operativo | |
| Tarjeta de red | |
| Switch | |
| Router | |
| Servidor | |

---

# Parte 2. El recorrido de la información

Ordena cronológicamente las siguientes acciones.

- La información llega al servidor.
- La aplicación genera los datos.
- Los datos recorren la red.
- La información se encapsula.
- El servidor desencapsula los datos.
- La aplicación receptora procesa el documento.

---

# Parte 3. Arquitectura por capas

Relaciona cada una de las siguientes funciones con la capa correspondiente del modelo TCP/IP.

| Función | Capa |
|----------|------|
| Generar la información | |
| Transportar la comunicación | |
| Identificar el destino | |
| Preparar la transmisión por el medio físico | |

---

# Parte 4. Comparación entre modelos

Completa la siguiente tabla indicando la correspondencia entre ambos modelos.

| TCP/IP | OSI |
|---------|-----|
| Aplicación | |
| Transporte | |
| Internet | |
| Acceso a la red | |

---

# Parte 5. Encapsulación

Describe, con tus propias palabras, qué ocurre durante el proceso de encapsulación.

Indica:

- dónde comienza;
- qué hace cada capa;
- cuál es el resultado final.

---

# Parte 6. Desencapsulación

Explica el proceso inverso realizado por el servidor.

Responde a las siguientes preguntas:

- ¿Qué hace la primera capa que recibe la información?
- ¿Qué ocurre en cada una de las capas superiores?
- ¿Qué recibe finalmente la aplicación?

---

# Parte 7. Las PDU

Completa la siguiente tabla.

| Capa | PDU |
|------|-----|
| Aplicación | |
| Transporte | |
| Internet | |
| Acceso a la red | |
| Medio físico | |

A continuación responde:

**¿Por qué cambia el nombre de la información durante la comunicación si el documento sigue siendo el mismo?**

---

# Parte 8. Explicación completa

Elabora un informe técnico de aproximadamente una página respondiendo a la siguiente cuestión:

> **Explica detalladamente qué ocurre desde que Ana pulsa el botón "Guardar" hasta que el documento queda almacenado correctamente en el servidor de la empresa.**

En tu explicación deben aparecer correctamente utilizados los siguientes conceptos:

- protocolo de comunicación;
- arquitectura por capas;
- modelo TCP/IP;
- modelo OSI;
- encapsulación;
- desencapsulación;
- PDU;
- datos;
- segmento;
- paquete;
- trama;
- bits.

---

# Autoevaluación

Antes de dar por finalizado el reto, comprueba que eres capaz de responder afirmativamente a todas estas preguntas.

- ☐ Sé explicar qué es un protocolo de comunicación.
- ☐ Comprendo por qué se utiliza una arquitectura por capas.
- ☐ Distingo el modelo TCP/IP del modelo OSI.
- ☐ Conozco las cuatro capas del modelo TCP/IP.
- ☐ Sé explicar el proceso de encapsulación.
- ☐ Sé explicar el proceso de desencapsulación.
- ☐ Identifico correctamente las distintas PDU.
- ☐ Soy capaz de describir el recorrido completo de una comunicación en una red.

---

# Objetivo del reto

Si has completado correctamente este reto, ya eres capaz de comprender cómo se produce una comunicación entre dos dispositivos conectados a una red informática.

Este conocimiento constituye la base para estudiar los protocolos específicos que hacen posible esa comunicación.

En el próximo capítulo aprenderás cómo se identifican los dispositivos mediante **direcciones IPv4**, un paso imprescindible para que la información pueda llegar correctamente desde el equipo emisor hasta el destinatario.
