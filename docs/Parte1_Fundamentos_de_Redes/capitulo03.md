# Capítulo 3. Modelos de referencia OSI y TCP/IP

## Introducción

En el capítulo anterior hemos aprendido que la comunicación entre dispositivos es posible gracias a la utilización de protocolos y estándares comunes.

Sin embargo, las comunicaciones actuales son extremadamente complejas. Cuando un ordenador envía un mensaje, intervienen numerosos procesos: la aplicación genera la información, los datos se preparan para su transmisión, se identifican los equipos implicados, la información se divide en paquetes, se transmite por distintos medios físicos y finalmente se reconstruye en el dispositivo de destino.

Si todos estos procesos se realizaran de forma desordenada, el diseño de las redes sería prácticamente imposible.

Para resolver este problema surgieron los **modelos de referencia**, que organizan el proceso de comunicación en diferentes niveles o capas. Cada capa desempeña una función concreta y colabora con las demás para que la comunicación sea eficiente, fiable y fácil de mantener.

En este capítulo estudiaremos los dos modelos más importantes en el ámbito de las redes de computadores:

- El **modelo OSI**, utilizado como modelo de referencia para comprender el funcionamiento de las comunicaciones.
- El **modelo TCP/IP**, utilizado actualmente por Internet y por la práctica totalidad de las redes informáticas.

Comprender estos modelos permitirá interpretar mejor el funcionamiento de los protocolos y facilitará el estudio de los capítulos siguientes.

---

## Objetivos de aprendizaje

Al finalizar este capítulo serás capaz de:

- Comprender por qué es necesario dividir las comunicaciones en capas.
- Explicar la finalidad de un modelo de referencia.
- Identificar las siete capas del modelo OSI.
- Describir las funciones principales de cada capa.
- Comprender la organización del modelo TCP/IP.
- Relacionar ambos modelos.
- Explicar el proceso de encapsulación y desencapsulación de los datos.

---

## 3.1 ¿Por qué utilizar modelos de referencia?

Imaginemos que una empresa decide construir un automóvil.

Podría encargar a un único equipo de ingenieros el diseño completo del vehículo: el motor, la suspensión, los frenos, la electrónica, la carrocería, el sistema de climatización y el software de control.

Aunque sería posible, el proyecto resultaría extremadamente complejo y muy difícil de mantener.

Por este motivo, los fabricantes dividen el trabajo en departamentos especializados.

Cada departamento desarrolla una parte concreta del vehículo y, posteriormente, todas las piezas se integran para formar el automóvil completo.

En las redes informáticas ocurre exactamente lo mismo.

La comunicación entre dos dispositivos implica numerosas tareas diferentes:

- Generar la información.
- Preparar los datos para su transmisión.
- Identificar el equipo de destino.
- Seleccionar el camino que seguirán los paquetes.
- Transmitir la información por el medio físico.
- Detectar posibles errores.
- Reconstruir los datos en el dispositivo receptor.

Si un único protocolo tuviera que realizar todas estas funciones, sería muy complicado diseñarlo, actualizarlo o corregir errores.

Por este motivo las comunicaciones se organizan mediante **modelos de referencia**, que dividen todo el proceso en varias capas independientes.

Cada capa realiza una tarea concreta y ofrece sus servicios a la capa superior, mientras utiliza los servicios proporcionados por la capa inferior.

Gracias a esta organización es posible modificar una parte del sistema sin necesidad de rediseñar completamente el resto.

---

### Ventajas de utilizar modelos por capas

La organización en capas aporta numerosas ventajas durante el diseño y mantenimiento de las redes.

Entre las más importantes destacan:

- Simplifica el desarrollo de protocolos.
- Facilita la localización de averías.
- Permite que diferentes fabricantes desarrollen productos compatibles.
- Favorece la reutilización de tecnologías existentes.
- Facilita la evolución de las redes sin modificar todo el sistema.
- Hace más sencillo el aprendizaje del funcionamiento de las comunicaciones.

Esta forma de trabajar ha permitido el enorme crecimiento de Internet y el desarrollo de nuevas tecnologías sin perder la compatibilidad con los sistemas existentes.

---

### Un ejemplo cotidiano

Podemos comparar un modelo de referencia con el funcionamiento de una empresa de mensajería.

Cuando enviamos un paquete intervienen distintos departamentos:

- Atención al cliente recoge el envío.
- El centro logístico clasifica los paquetes.
- El transporte los desplaza entre ciudades.
- La delegación de destino organiza el reparto.
- El repartidor entrega finalmente el paquete al destinatario.

Cada departamento realiza una tarea diferente, pero todos colaboran para completar el proceso.

En una red informática sucede exactamente lo mismo.

Cada capa desempeña una función específica y coopera con las demás para conseguir que la información llegue correctamente al destino.

<figure class="figura-libro">
  <img
    src="../../assets/images/parte1/capitulo3/figura3_1.png"
    alt="Organización de una comunicación por capas comparada con una empresa de mensajería"
  >
  <figcaption>
    <strong>Figura 3.1.</strong> Comparación entre el funcionamiento de una empresa de mensajería y una comunicación en red organizada por capas. En ambos casos, un proceso complejo se divide en tareas especializadas que colaboran para alcanzar un objetivo común.
  </figcaption>
</figure>

---

### Los modelos no son protocolos

Es importante no confundir un **modelo de referencia** con un **protocolo**.

Un protocolo define las reglas que siguen dos dispositivos para comunicarse.

Un modelo de referencia, en cambio, únicamente organiza esas comunicaciones en diferentes capas para facilitar su diseño y comprensión.

Los modelos no indican exactamente cómo debe funcionar una red, sino que proporcionan una estructura común sobre la que posteriormente se desarrollan los protocolos.

Esta diferencia será fundamental para comprender el resto del capítulo.

---

!!! note "Recuerda"

    Un modelo de referencia organiza la comunicación en capas.

    Un protocolo define las reglas que siguen los dispositivos para comunicarse.

!!! tip "¿Sabías que...?"

    Aunque el modelo OSI es el más utilizado para explicar redes en libros y cursos, Internet funciona realmente utilizando el modelo TCP/IP.

!!! abstract "🛠️ En el taller..."

    A lo largo del curso comprobarás que muchos problemas de red pueden localizarse identificando primero en qué capa se produce el fallo.

!!! question "Piensa un momento..."

    Si una empresa desarrollara un nuevo tipo de cable de red mucho más rápido que los actuales, ¿sería necesario rediseñar todos los protocolos de Internet o bastaría con modificar una parte del sistema?

## 3.2 El modelo OSI

Una vez comprendida la utilidad de los modelos de referencia, podemos estudiar el más conocido de todos ellos: el **modelo OSI**.

Las siglas **OSI** corresponden a **Open Systems Interconnection** (*Interconexión de Sistemas Abiertos*).

Este modelo fue desarrollado por la **Organización Internacional de Normalización (ISO)** con el objetivo de proporcionar un marco común para describir cómo se comunican los dispositivos de una red.

Es importante comprender que el modelo OSI **no es un protocolo**, ni tampoco un sistema operativo o un programa informático.

Se trata de un **modelo teórico**, es decir, una guía que organiza el proceso de comunicación en diferentes capas para facilitar su estudio, diseño e implementación.

Gracias al modelo OSI, fabricantes, desarrolladores y administradores de redes utilizan un lenguaje común para describir el funcionamiento de una comunicación.

---

### ¿Por qué se creó el modelo OSI?

Durante los primeros años del desarrollo de las redes informáticas, cada fabricante diseñaba sus propios sistemas de comunicación.

Esto provocaba numerosos problemas de compatibilidad.

En muchas ocasiones, equipos de fabricantes diferentes no podían intercambiar información porque utilizaban tecnologías incompatibles.

La ISO propuso entonces un modelo común que permitiera describir cualquier comunicación de forma estructurada, independientemente del fabricante o de la tecnología utilizada.

Aunque Internet terminó adoptando el modelo TCP/IP como base de funcionamiento, el modelo OSI continúa utilizándose en todo el mundo como herramienta de aprendizaje y de análisis de redes.

Por este motivo sigue siendo uno de los pilares fundamentales de la formación de cualquier técnico en redes.

---

### Un lenguaje común para todos

Imaginemos que un técnico informa de la siguiente incidencia:

> "El problema se encuentra en la capa física."

Otro técnico, aunque trabaje con equipos de un fabricante diferente, comprenderá inmediatamente dónde debe buscar la avería.

Esta es una de las mayores ventajas del modelo OSI.

Permite describir el funcionamiento de una red utilizando una terminología común aceptada internacionalmente.

Gracias a ello, resulta mucho más sencillo intercambiar información técnica, elaborar documentación o resolver incidencias.

---

### Una organización jerárquica

El modelo OSI divide la comunicación en **siete capas**.

Cada una de ellas realiza una función específica.

Las capas superiores están orientadas a las aplicaciones utilizadas por el usuario.

Las capas inferiores se ocupan de transportar físicamente la información entre los dispositivos.

Cada capa únicamente necesita conocer los servicios ofrecidos por la capa inmediatamente inferior, sin preocuparse por el funcionamiento interno del resto.

Esta independencia facilita el desarrollo de nuevas tecnologías sin modificar completamente el sistema de comunicación.

En el siguiente apartado estudiaremos detalladamente las funciones de cada una de estas siete capas.

<figure class="figura-libro">
  <img
    src="../../assets/images/parte1/capitulo3/figura3_2.png"
    alt="El modelo OSI como marco de referencia para la comunicación en redes"
  >
  <figcaption>
    <strong>Figura 3.2.</strong> El modelo OSI organiza el proceso de comunicación en siete capas jerárquicas. Cada capa realiza una función específica y proporciona servicios a la capa superior, facilitando el diseño, la interoperabilidad y el análisis de las redes.
  </figcaption>
</figure>

---

### ¿Por qué seguimos estudiando el modelo OSI?

Puede resultar sorprendente que un modelo desarrollado hace varias décadas continúe apareciendo en prácticamente todos los cursos de redes.

La respuesta es sencilla.

El modelo OSI permite comprender con gran claridad cómo se organiza una comunicación.

Aunque Internet utilice el modelo TCP/IP, la mayoría de fabricantes, certificaciones profesionales y manuales técnicos siguen utilizando el modelo OSI para explicar el funcionamiento de las redes y para clasificar las incidencias.

Por este motivo, cualquier técnico en redes debe conocer perfectamente este modelo.

---

!!! note "Recuerda"

    El modelo OSI no define protocolos concretos.

    Su función consiste en organizar el proceso de comunicación en siete capas independientes.

!!! tip "¿Sabías que...?"

    En muchas entrevistas de trabajo para administradores de redes es habitual preguntar por las siete capas del modelo OSI y la función de cada una de ellas.

!!! abstract "🛠️ En el taller..."

    Cuando aparezca una avería en las prácticas del laboratorio, aprenderás a identificar primero en qué capa del modelo OSI se produce el problema antes de buscar la solución.

!!! question "Piensa un momento..."

    Si un ordenador tiene el cable de red desconectado, ¿crees que el problema pertenece a las capas superiores o a las inferiores del modelo OSI?

## 3.3 Las siete capas del modelo OSI

Como hemos visto en el apartado anterior, el modelo OSI organiza el proceso de comunicación en **siete capas**.

Cada una de ellas desempeña una función específica y coopera con las demás para conseguir que la información viaje desde el dispositivo de origen hasta el dispositivo de destino.

Esta división permite que cada capa se especialice en una tarea concreta, simplificando el diseño de los protocolos y facilitando la evolución de las redes.

Las capas se numeran del **1 al 7**.

La **capa 1** es la más cercana al medio físico por el que viajan los datos, mientras que la **capa 7** es la más próxima a las aplicaciones utilizadas por el usuario.

Durante el envío de información, los datos descienden por las capas del equipo emisor hasta llegar al medio físico.

En el equipo receptor ocurre el proceso inverso: la información asciende por las capas hasta llegar a la aplicación correspondiente.

---

### Las siete capas

La siguiente tabla resume las capas del modelo OSI y la función principal de cada una.

| Capa | Nombre | Función principal |
|------:|---------|------------------|
| **7** | Aplicación | Proporciona servicios de red a las aplicaciones utilizadas por el usuario. |
| **6** | Presentación | Traduce el formato de los datos, realiza compresión y cifrado cuando es necesario. |
| **5** | Sesión | Establece, mantiene y finaliza las sesiones de comunicación entre aplicaciones. |
| **4** | Transporte | Garantiza la entrega de la información y controla la comunicación entre origen y destino. |
| **3** | Red | Selecciona la mejor ruta y permite el encaminamiento de los paquetes. |
| **2** | Enlace de datos | Organiza la transmisión entre dispositivos conectados al mismo medio físico y detecta errores de transmisión. |
| **1** | Física | Transmite los bits a través del medio físico utilizando señales eléctricas, ópticas o inalámbricas. |

<figure class="figura-libro">
  <img
    src="../../assets/images/parte1/capitulo3/figura3_3.png"
    alt="Las siete capas del modelo OSI"
  >
  <figcaption>
    <strong>Figura 3.3.</strong> Organización de las siete capas del modelo OSI. Cada capa desempeña una función específica dentro del proceso de comunicación, desde la transmisión física de los bits hasta los servicios utilizados por las aplicaciones.
  </figcaption>
</figure>

No es necesario memorizar todavía todas estas funciones.

Lo importante en este momento es comprender que **cada capa realiza una tarea distinta** y que todas trabajan de forma coordinada.

En los siguientes apartados iremos relacionando estas capas con los protocolos y dispositivos que ya conoces.

---

### Capas superiores y capas inferiores

Habitualmente el modelo OSI se divide en dos grandes grupos.

Las **capas superiores** (5, 6 y 7) están orientadas a las aplicaciones utilizadas por el usuario.

Su misión consiste en preparar la información para que pueda ser utilizada correctamente por los programas.

Las **capas inferiores** (1, 2 y 3) se ocupan del transporte de la información a través de la red.

Son las responsables de que los datos puedan viajar físicamente entre los dispositivos.

La **capa 4**, denominada **Transporte**, actúa como puente entre ambos grupos, asegurando que la comunicación se realice correctamente.

Esta división resulta muy útil para localizar averías.

Por ejemplo:

- Si un cable está dañado, el problema se encontrará en las capas inferiores.
- Si una aplicación no puede interpretar correctamente la información recibida, la incidencia estará relacionada con las capas superiores.

---

### Una comunicación paso a paso

Supongamos que un usuario envía un correo electrónico.

Antes de llegar al destinatario ocurren numerosos procesos.

De forma simplificada:

1. La aplicación genera el mensaje.
2. Las capas superiores preparan la información.
3. La capa de transporte organiza la comunicación.
4. La capa de red decide el camino que seguirán los datos.
5. La capa de enlace prepara la transmisión por la red local.
6. La capa física convierte la información en señales y la transmite.

En el equipo receptor se realiza exactamente el proceso contrario hasta que el mensaje aparece en la pantalla del destinatario.

Este mecanismo se conoce como **encapsulación y desencapsulación**, y lo estudiaremos con detalle más adelante en este capítulo.

<figure class="figura-libro">
  <img
    src="../../assets/images/parte1/capitulo3/figura3_4.png"
    alt="Recorrido de la información a través del modelo OSI"
  >
  <figcaption>
    <strong>Figura 3.4.</strong> Recorrido de la información a través del modelo OSI. En el equipo emisor los datos descienden por las siete capas (encapsulación), atraviesan el medio físico y ascienden por las capas del equipo receptor (desencapsulación).
  </figcaption>
</figure>

---

!!! note "Recuerda"

    Las siete capas del modelo OSI trabajan conjuntamente.

    Ninguna capa puede realizar por sí sola todo el proceso de comunicación.

!!! tip "¿Sabías que...?"

    Muchos técnicos recuerdan las capas del modelo OSI mediante reglas mnemotécnicas. Sin embargo, es mucho más útil comprender la función de cada una que memorizar simplemente su nombre.

!!! abstract "🛠️ En el taller..."

    En las próximas prácticas aprenderás a relacionar routers, switches, tarjetas de red y aplicaciones con las distintas capas del modelo OSI.

!!! question "Piensa un momento..."

    Cuando visitas una página web, ¿crees que interviene únicamente la capa de Aplicación o participan las siete capas del modelo OSI?

## 3.4 El modelo TCP/IP

En el apartado anterior hemos estudiado el modelo OSI, una referencia fundamental para comprender cómo se organiza la comunicación entre dispositivos.

Sin embargo, aunque el modelo OSI es el más utilizado con fines didácticos, las redes actuales funcionan realmente siguiendo otro modelo: el **modelo TCP/IP**.

Este modelo recibe su nombre de la familia de protocolos **TCP/IP**, estudiada en el capítulo anterior, y constituye la base del funcionamiento de Internet y de prácticamente todas las redes informáticas actuales.

Al igual que el modelo OSI, organiza el proceso de comunicación en varias capas, aunque en este caso el número de capas es menor.

Su diseño es más sencillo y está basado en protocolos que se utilizan diariamente en millones de dispositivos de todo el mundo.

---

### Un modelo diseñado para Internet

El modelo TCP/IP comenzó a desarrollarse durante la década de 1970 dentro de un proyecto de investigación financiado por el Departamento de Defensa de los Estados Unidos.

Su objetivo era crear un sistema de comunicaciones capaz de seguir funcionando incluso cuando parte de la red dejara de estar disponible.

Con el paso de los años, este modelo fue evolucionando hasta convertirse en el estándar utilizado por Internet.

Actualmente cualquier ordenador, teléfono móvil, servidor o dispositivo conectado a una red utiliza este modelo para intercambiar información.

---

### Las cuatro capas del modelo TCP/IP

A diferencia del modelo OSI, que organiza la comunicación en siete capas, el modelo TCP/IP agrupa las funciones en **cuatro capas**.

Estas son:

| Capa | Función principal |
|------:|------------------|
| **Aplicación** | Proporciona servicios a las aplicaciones utilizadas por el usuario y agrupa varias funciones del modelo OSI. |
| **Transporte** | Garantiza la comunicación entre los dispositivos mediante protocolos como TCP o UDP. |
| **Internet** | Permite el direccionamiento y el encaminamiento de los paquetes utilizando el protocolo IP. |
| **Acceso a la red** | Gestiona la transmisión física de la información a través del medio de comunicación. |

<figure class="figura-libro">
  <img
    src="../../assets/images/parte1/capitulo3/figura3_5.png"
    alt="Organización del modelo TCP/IP"
  >
  <figcaption>
    <strong>Figura 3.5.</strong> Organización del modelo TCP/IP en cuatro capas. Cada una agrupa diferentes funciones de la comunicación y utiliza protocolos específicos para proporcionar los servicios necesarios en las redes actuales.
  </figcaption>
</figure>

Como puede observarse, el modelo TCP/IP agrupa varias capas del modelo OSI en una sola.

Esta simplificación facilita su implementación práctica.

---

### Un modelo orientado a la realidad

Mientras que el modelo OSI fue concebido principalmente como una referencia teórica, el modelo TCP/IP nació a partir de protocolos reales que ya estaban siendo utilizados.

Por este motivo, cuando configuramos una red, instalamos un servidor o accedemos a una página web, en realidad estamos utilizando el modelo TCP/IP.

No obstante, ambos modelos son perfectamente compatibles desde el punto de vista didáctico.

De hecho, los profesionales de las redes utilizan con frecuencia los dos modelos:

- El modelo **OSI** para explicar el funcionamiento de una comunicación y localizar incidencias.
- El modelo **TCP/IP** para comprender cómo funcionan realmente Internet y las redes actuales.

---

### ¿Por qué seguimos estudiando ambos modelos?

Puede parecer innecesario aprender dos modelos diferentes.

Sin embargo, cada uno aporta una perspectiva distinta.

El modelo OSI facilita el aprendizaje porque divide claramente las funciones en siete capas.

El modelo TCP/IP refleja con mayor fidelidad el funcionamiento de las redes actuales.

Conocer ambos modelos permitirá interpretar documentación técnica, seguir cursos de certificación y comprender mejor el comportamiento de los protocolos que estudiaremos en los próximos capítulos.

---

!!! note "Recuerda"

    El modelo TCP/IP es el utilizado actualmente por Internet y por la inmensa mayoría de las redes informáticas.

!!! tip "¿Sabías que...?"

    Aunque habitualmente hablamos del "modelo TCP/IP", en realidad intervienen muchos más protocolos además de TCP e IP, como UDP, DNS, DHCP o HTTPS.

!!! abstract "🛠️ En el taller..."

    Cuando configures direcciones IP o utilices comandos como `ping` o `tracert`, estarás trabajando con protocolos pertenecientes al modelo TCP/IP.

!!! question "Piensa un momento..."

    Si Internet utiliza realmente el modelo TCP/IP, ¿por qué seguimos estudiando el modelo OSI en prácticamente todos los cursos de redes?

## 3.5 Comparación entre el modelo OSI y el modelo TCP/IP

Después de estudiar los modelos OSI y TCP/IP de forma independiente, es el momento de compararlos.

Aunque ambos modelos organizan la comunicación en capas, presentan algunas diferencias importantes.

El modelo **OSI** fue desarrollado como un modelo de referencia para describir y comprender el funcionamiento de las redes.

Por el contrario, el modelo **TCP/IP** surgió a partir de protocolos reales que ya estaban siendo utilizados en Internet.

En otras palabras, el modelo OSI explica **cómo debería organizarse una comunicación**, mientras que el modelo TCP/IP describe **cómo funcionan realmente las redes actuales**.

Ambos modelos persiguen el mismo objetivo: dividir un proceso complejo en varias capas para facilitar su diseño, implementación y mantenimiento.

---

### Número de capas

La diferencia más evidente entre ambos modelos es el número de capas.

El modelo OSI está formado por **siete capas**.

El modelo TCP/IP utiliza únicamente **cuatro capas**.

Esta diferencia no significa que uno sea más completo que el otro.

Simplemente, el modelo TCP/IP agrupa varias funciones que el modelo OSI mantiene separadas.

Por ejemplo:

- Las capas **Aplicación**, **Presentación** y **Sesión** del modelo OSI se agrupan en una única capa de **Aplicación** en TCP/IP.

- Las capas **Enlace de datos** y **Física** del modelo OSI forman conjuntamente la capa de **Acceso a la red** del modelo TCP/IP.

Las capas de **Transporte** y **Red (Internet)** mantienen prácticamente la misma función en ambos modelos.

---

### Correspondencia entre ambos modelos

La siguiente equivalencia resume la relación entre ambos modelos.

| Modelo OSI | Modelo TCP/IP |
|-------------|---------------|
| Aplicación | Aplicación |
| Presentación | Aplicación |
| Sesión | Aplicación |
| Transporte | Transporte |
| Red | Internet |
| Enlace de datos | Acceso a la red |
| Física | Acceso a la red |

Esta correspondencia facilita comprender cómo se relacionan ambos modelos y por qué es posible utilizar cualquiera de ellos para describir una comunicación.

<figure class="figura-libro">
  <img
    src="../../assets/images/parte1/capitulo3/figura3_6.png"
    alt="Correspondencia entre el modelo OSI y el modelo TCP/IP"
  >
  <figcaption>
    <strong>Figura 3.6.</strong> Correspondencia entre las siete capas del modelo OSI y las cuatro capas del modelo TCP/IP. El modelo TCP/IP agrupa varias capas del modelo OSI, pero ambos describen el mismo proceso de comunicación desde perspectivas diferentes.
  </figcaption>
</figure>

---

### ¿Cuál se utiliza realmente?

En el ámbito académico y en la formación técnica es habitual utilizar el modelo OSI.

Su organización en siete capas facilita enormemente el aprendizaje y el análisis de averías.

Sin embargo, cuando configuramos un ordenador, un router Cisco o un servidor, estamos trabajando realmente con protocolos pertenecientes al modelo TCP/IP.

Por este motivo ambos modelos siguen teniendo una gran importancia.

El modelo OSI ayuda a comprender.

El modelo TCP/IP ayuda a implementar.

Lejos de ser modelos incompatibles, ambos se complementan.

---

### Un ejemplo práctico

Supongamos que un usuario abre su navegador y accede a una página web.

Durante esa comunicación intervienen protocolos como:

- HTTPS
- DNS
- TCP
- IP
- Ethernet

Si analizamos esta comunicación utilizando el modelo OSI, cada protocolo se situará en una de sus siete capas.

Si utilizamos el modelo TCP/IP, esos mismos protocolos quedarán agrupados en únicamente cuatro capas.

La comunicación será exactamente la misma.

Lo único que cambia es la forma de representarla.

---

!!! note "Recuerda"

    El modelo OSI y el modelo TCP/IP describen el mismo proceso de comunicación.

    La diferencia principal reside en la forma en que organizan sus capas.

!!! tip "¿Sabías que...?"

    En los manuales de Cisco es habitual encontrar referencias a ambos modelos. El modelo OSI se utiliza para explicar conceptos, mientras que la configuración práctica se basa en TCP/IP.

!!! abstract "🛠️ En el taller..."

    Cuando estudies una incidencia de red, utilizarás el modelo OSI para localizar el problema. Cuando configures una dirección IP o utilices el comando `ping`, estarás trabajando con el modelo TCP/IP.

!!! question "Piensa un momento..."

    ¿Crees que sería posible configurar una red actual utilizando únicamente el modelo OSI sin emplear los protocolos TCP/IP?

## 3.6 Encapsulación y desencapsulación de datos

Hasta ahora hemos aprendido que tanto el modelo OSI como el modelo TCP/IP organizan la comunicación en diferentes capas.

Sin embargo, todavía no hemos visto cómo colaboran realmente esas capas cuando un dispositivo envía información a otro.

Este proceso recibe el nombre de **encapsulación** cuando los datos salen del equipo emisor y de **desencapsulación** cuando llegan al equipo receptor.

Comprender este mecanismo resulta fundamental para entender el funcionamiento de cualquier red informática.

---

### ¿Qué significa encapsular?

Supongamos que un usuario envía un correo electrónico.

En un primer momento únicamente existe el mensaje escrito por el usuario.

A medida que la información desciende por las distintas capas del modelo de comunicación, cada una de ellas añade información propia necesaria para que los datos puedan viajar correctamente por la red.

Esta información adicional recibe el nombre de **cabecera** (*header*).

Cada cabecera contiene datos específicos relacionados con la función que desempeña la capa correspondiente.

Por ejemplo:

- La capa de Transporte añade información necesaria para garantizar la comunicación entre origen y destino.
- La capa de Internet incorpora las direcciones IP que identifican los equipos.
- La capa de Acceso a la red prepara la transmisión por el medio físico.

Cuando la información llega finalmente al cable de red o al medio inalámbrico, está completamente preparada para su transmisión.

Este proceso de añadir información en cada capa recibe el nombre de **encapsulación**.

---

### ¿Qué ocurre en el equipo receptor?

Cuando los datos llegan al dispositivo de destino ocurre exactamente el proceso contrario.

La información asciende por las diferentes capas.

Cada una de ellas elimina la cabecera que había añadido su capa equivalente en el equipo emisor.

De esta forma, la aplicación receptora recibe únicamente la información original generada por el usuario.

Este proceso inverso se denomina **desencapsulación**.

Gracias a este mecanismo, cada capa solo necesita interpretar la información que le corresponde, simplificando enormemente el funcionamiento de la comunicación.

<figure class="figura-libro">
  <img
    src="../../assets/images/parte1/capitulo3/figura3_7.png"
    alt="Proceso de encapsulación y desencapsulación de datos"
  >
  <figcaption>
    <strong>Figura 3.7.</strong> Durante la encapsulación, cada capa del modelo TCP/IP añade información de control (cabeceras y, en el acceso a la red, un tráiler) a los datos generados por la aplicación. En el equipo receptor se realiza el proceso inverso, eliminando esa información capa a capa hasta recuperar los datos originales.
  </figcaption>
</figure>

---

### Una analogía muy sencilla

Podemos comparar la encapsulación con el envío de un paquete por mensajería.

Imaginemos que queremos enviar un libro a otra ciudad.

Primero introducimos el libro en una caja.

Después colocamos una etiqueta con la dirección del destinatario.

Finalmente la empresa de transporte añade otras etiquetas internas necesarias para clasificar el envío y hacerlo llegar correctamente a su destino.

Cuando el paquete llega al destinatario ocurre el proceso contrario.

Se eliminan las distintas etiquetas y el destinatario recibe únicamente el libro.

En una red informática sucede exactamente lo mismo.

Los datos originales permanecen intactos.

Lo único que cambia es que, durante el viaje, se les añade información necesaria para garantizar una comunicación correcta.

---

### ¿Por qué es necesario este proceso?

Puede parecer que añadir y eliminar información hace la comunicación más lenta.

Sin embargo, sin este mecanismo sería imposible que millones de dispositivos diferentes pudieran intercambiar información de forma fiable.

Gracias a la encapsulación:

- Cada capa realiza únicamente su propia función.
- Los protocolos trabajan de forma independiente.
- Los equipos pueden comunicarse aunque utilicen tecnologías diferentes.
- Es posible detectar y corregir muchos errores durante la transmisión.

Este diseño constituye una de las principales razones por las que Internet puede funcionar a escala mundial.

---

!!! note "Recuerda"

    Durante la encapsulación cada capa añade información propia.

    Durante la desencapsulación cada capa elimina la información correspondiente hasta recuperar los datos originales.

!!! tip "¿Sabías que...?"

    Los analizadores de protocolos, como Wireshark, permiten observar las cabeceras añadidas por cada capa durante el proceso de encapsulación.

!!! abstract "🛠️ En el taller..."

    En cursos posteriores utilizarás Wireshark para visualizar paquetes reales y comprobar cómo aparecen las cabeceras Ethernet, IP y TCP durante una comunicación.

!!! question "Piensa un momento..."

    Cuando envías un mensaje por una aplicación de mensajería, ¿crees que los datos viajan exactamente igual que fueron escritos por el usuario o van acompañados de información adicional?
   
## Práctica guiada con Cisco Packet Tracer

### Objetivos

En esta práctica aprenderás a utilizar el modo **Simulation** de Cisco Packet Tracer para observar cómo circula la información entre dos equipos.

Al finalizar la práctica serás capaz de:

- Comprender el recorrido de un paquete por la red.
- Relacionar los protocolos utilizados con las capas de los modelos OSI y TCP/IP.
- Interpretar la información mostrada por Packet Tracer durante una comunicación.
- Identificar los distintos tipos de paquetes intercambiados entre los dispositivos.

---

### Material necesario

- Un ordenador con Cisco Packet Tracer instalado.
- Una topología sencilla formada por:
  - 2 ordenadores.
  - 1 switch Cisco.
  - Cableado Ethernet.

---

### Paso 1. Crear la topología

<figure class="figura-libro">
  <img
    src="../../assets/images/parte1/capitulo3/figura3_8.png"
    alt="Topología de la práctica en Cisco Packet Tracer"
  >
  <figcaption>
    <strong>Figura 3.8.</strong> Topología utilizada en la práctica guiada de Cisco Packet Tracer. La red está formada por dos ordenadores conectados a un switch Cisco 2960 y configurados con direcciones IP de la misma subred para analizar posteriormente la comunicación mediante el modo <em>Simulation</em>.
  </figcaption>
</figure>

Crea una red con los siguientes elementos:

- PC0
- Switch 2960
- PC1

Conecta ambos ordenadores al switch utilizando cables de cobre directos (*Copper Straight-Through*).

No es necesario añadir ningún router.

---

### Paso 2. Configurar las direcciones IP

Configura las siguientes direcciones:

| Equipo | Dirección IP | Máscara |
|---------|--------------|---------|
| PC0 | 192.168.1.10 | 255.255.255.0 |
| PC1 | 192.168.1.20 | 255.255.255.0 |

No es necesario configurar puerta de enlace.

---

### Paso 3. Comprobar la conectividad

Desde **PC0**, abre la consola de comandos y ejecuta:

```text
ping 192.168.1.20
```

Comprueba que la comunicación se realiza correctamente.

---

### Paso 4. Activar el modo Simulation

Pulsa el botón **Simulation** situado en la parte inferior derecha de Packet Tracer.

El simulador dejará de ejecutar los paquetes en tiempo real y permitirá observar el recorrido de cada uno de ellos.

---

### Paso 5. Repetir el ping

Vuelve a ejecutar:

```text
ping 192.168.1.20
```

Observa que aparecen varios sobres desplazándose entre los dispositivos.

Estos sobres representan los distintos paquetes intercambiados durante la comunicación.

---

### Paso 6. Analizar los eventos

Utiliza los botones:

- **Capture/Forward**
- **Auto Capture/Play**

para avanzar paso a paso por la comunicación.

Selecciona cada paquete para observar la información mostrada por Packet Tracer.

Intenta identificar:

- El protocolo utilizado.
- El dispositivo que envía el paquete.
- El dispositivo que lo recibe.
- La dirección IP de origen.
- La dirección IP de destino.

<figure class="figura-libro">
  <img
    src="../../assets/images/parte1/capitulo3/figura3_9.png"
    alt="Análisis de una comunicación en modo Simulation"
  >
  <figcaption>
    <strong>Figura 3.9.</strong> Análisis de una comunicación mediante el modo <em>Simulation</em> de Cisco Packet Tracer. La lista de eventos permite observar protocolos como ARP e ICMP y relacionarlos con las capas de los modelos OSI y TCP/IP estudiados en este capítulo.
  </figcaption>
</figure>

---

### Paso 7. Relacionar los protocolos con las capas

Completa la siguiente tabla.

| Protocolo observado | Modelo TCP/IP | Modelo OSI |
|----------------------|---------------|------------|
| ARP | | |
| ICMP | | |
| Ethernet | | |

No es necesario conocer todavía todos los detalles de estos protocolos.

El objetivo consiste únicamente en relacionarlos con las capas estudiadas en este capítulo.

---

### Actividades

Responde a las siguientes cuestiones.

1. ¿Qué protocolo aparece antes de que comience el intercambio de mensajes ICMP?

2. ¿Por qué es necesario ese protocolo?

3. ¿Qué información cambia entre un paquete enviado y el siguiente?

4. ¿Cuántos dispositivos participan en la comunicación?

5. ¿Qué ocurriría si ambos equipos pertenecieran a redes diferentes?

---

### Conclusiones

El modo **Simulation** de Packet Tracer constituye una herramienta muy útil para comprender el funcionamiento interno de las comunicaciones.

A lo largo del curso volveremos a utilizar este modo en numerosas ocasiones para analizar nuevos protocolos y comprobar el comportamiento de redes cada vez más complejas.

En los próximos capítulos aprenderás a interpretar con mayor profundidad la información mostrada por el simulador y comprenderás cómo colaboran los distintos protocolos durante una comunicación real.

## Conceptos clave

Antes de continuar con el siguiente capítulo, es importante repasar los conceptos fundamentales estudiados en este.

| Concepto | Descripción |
|-----------|-------------|
| **Modelo de referencia** | Estructura que organiza el proceso de comunicación en diferentes capas para facilitar su diseño, estudio y mantenimiento. |
| **Modelo OSI** | Modelo teórico desarrollado por la ISO que divide la comunicación en siete capas. Se utiliza principalmente con fines didácticos y para el análisis de redes. |
| **Modelo TCP/IP** | Modelo utilizado por Internet y por la mayoría de las redes actuales. Organiza la comunicación en cuatro capas. |
| **Capa** | Nivel funcional dentro de un modelo de comunicación. Cada capa realiza una tarea específica y proporciona servicios a la capa superior. |
| **Capas superiores** | Capas orientadas a las aplicaciones y a la interacción con el usuario. En el modelo OSI corresponden a Aplicación, Presentación y Sesión. |
| **Capas inferiores** | Capas responsables del transporte de la información y de la transmisión por el medio físico. |
| **Encapsulación** | Proceso mediante el cual cada capa añade información de control (cabeceras y, en algunos casos, un tráiler) a los datos antes de transmitirlos. |
| **Desencapsulación** | Proceso inverso a la encapsulación. Cada capa elimina la información de control correspondiente hasta recuperar los datos originales. |
| **Cabecera (Header)** | Información añadida por una capa para permitir que los datos sean tratados correctamente durante la comunicación. |
| **Tráiler (Trailer)** | Información adicional situada al final de la trama. En Ethernet incluye el campo FCS utilizado para detectar errores de transmisión. |
| **Interoperabilidad** | Capacidad de dispositivos y sistemas de diferentes fabricantes para comunicarse utilizando protocolos y estándares comunes. |

!!! tip "Recuerda"

    El modelo OSI y el modelo TCP/IP no compiten entre sí.

    El modelo OSI facilita el aprendizaje y el análisis de las comunicaciones.

    El modelo TCP/IP describe el funcionamiento real de Internet y de las redes actuales.

!!! note "Lo más importante"

    Si recuerdas únicamente una idea de este capítulo, que sea la siguiente:

    **Las comunicaciones en red se organizan por capas. Cada capa realiza una función concreta y colabora con las demás para que la información llegue correctamente a su destino.**

## Resumen del capítulo

En este capítulo hemos estudiado cómo se organiza la comunicación entre los dispositivos de una red mediante **modelos de referencia**.

En primer lugar, hemos comprendido que las comunicaciones actuales son demasiado complejas para ser gestionadas por un único protocolo. Por este motivo, se dividen en **capas**, donde cada una desempeña una función específica y colabora con las demás para completar el proceso de comunicación.

A continuación, hemos conocido el **modelo OSI**, desarrollado por la Organización Internacional de Normalización (ISO). Este modelo organiza la comunicación en **siete capas**, desde la transmisión física de los bits hasta los servicios utilizados por las aplicaciones. Aunque no se utiliza directamente en Internet, constituye la principal herramienta para comprender el funcionamiento de las redes y localizar incidencias.

Posteriormente, hemos estudiado el **modelo TCP/IP**, que organiza la comunicación en **cuatro capas** y constituye la base del funcionamiento de Internet y de la mayoría de las redes actuales. Este modelo está basado en protocolos reales ampliamente implantados y utilizados diariamente en millones de dispositivos.

También hemos comparado ambos modelos, comprobando que describen el mismo proceso de comunicación, aunque con un número diferente de capas. Mientras que el modelo OSI separa claramente cada función, el modelo TCP/IP agrupa varias de ellas para simplificar su implementación.

Finalmente, hemos analizado el proceso de **encapsulación y desencapsulación**, observando cómo cada capa añade o elimina información de control durante la transmisión de los datos. Este mecanismo permite que dispositivos y tecnologías diferentes puedan comunicarse de forma ordenada y fiable.

La práctica realizada con **Cisco Packet Tracer** ha permitido comprobar que todos estos conceptos no son únicamente teóricos. Mediante el modo **Simulation** hemos podido observar el intercambio de paquetes entre dos equipos y relacionar los protocolos utilizados con las distintas capas de los modelos estudiados.

Con los conocimientos adquiridos en este capítulo ya dispones de una base sólida para comprender cómo se organiza la comunicación en cualquier red informática.

En el próximo capítulo estudiaremos las **topologías de red**, analizando las distintas formas de conectar los dispositivos y las ventajas e inconvenientes de cada una de ellas.

## Cuestionario de autoevaluación

Responde a las siguientes preguntas sin consultar el contenido del capítulo. Si tienes dudas en alguna respuesta, vuelve a revisar el apartado correspondiente antes de continuar.

### Preguntas tipo test

**1. ¿Cuál es la principal finalidad de un modelo de referencia?**

a) Sustituir a los protocolos de comunicación.

b) Organizar el proceso de comunicación en diferentes capas.

c) Aumentar la velocidad de transmisión.

d) Configurar automáticamente los dispositivos de red.

---

**2. ¿Qué organismo desarrolló el modelo OSI?**

a) IEEE

b) IETF

c) ISO

d) Cisco

---

**3. ¿Cuántas capas tiene el modelo OSI?**

a) 4

b) 5

c) 6

d) 7

---

**4. ¿Cuántas capas tiene el modelo TCP/IP?**

a) 3

b) 4

c) 5

d) 7

---

**5. ¿Cuál de los siguientes modelos es el utilizado actualmente por Internet?**

a) OSI

b) IEEE 802

c) TCP/IP

d) Ethernet

---

**6. ¿Qué proceso consiste en añadir información de control a los datos antes de transmitirlos?**

a) Multiplexación

b) Conmutación

c) Encapsulación

d) Fragmentación

---

**7. Durante la desencapsulación...**

a) Se añaden nuevas cabeceras.

b) Se eliminan las cabeceras añadidas durante la encapsulación.

c) Se cambia la dirección IP del paquete.

d) Se cifran los datos.

---

### Preguntas de respuesta corta

**8. Explica con tus propias palabras qué es un modelo de referencia.**

---

**9. ¿Por qué resulta útil dividir la comunicación en diferentes capas?**

---

**10. Indica dos diferencias entre el modelo OSI y el modelo TCP/IP.**

---

**11. ¿Qué es una cabecera (*header*) y para qué sirve?**

---

**12. ¿Qué significa que el modelo TCP/IP agrupe varias capas del modelo OSI?**

---

### Relaciona cada concepto con su definición

| Concepto | Definición |
|-----------|------------|
| Modelo OSI | ☐ Modelo utilizado por Internet |
| Modelo TCP/IP | ☐ Modelo teórico de siete capas |
| Encapsulación | ☐ Añadir información de control |
| Desencapsulación | ☐ Eliminar información de control |
| Capa | ☐ Nivel funcional dentro del modelo |

---

### Ordena las capas del modelo OSI

Escribe las capas del modelo OSI desde la más próxima al usuario hasta la más cercana al medio físico.

1. _______________________

2. _______________________

3. _______________________

4. _______________________

5. _______________________

6. _______________________

7. _______________________

---

### Actividad de razonamiento

**13.**

Un técnico afirma:

> "El modelo OSI ya no sirve para nada porque Internet utiliza el modelo TCP/IP."

¿Estás de acuerdo con esta afirmación?

Justifica tu respuesta.

---

### Actividad práctica

**14.**

Un usuario envía un correo electrónico.

Describe, de forma resumida, qué ocurre con la información desde que sale del ordenador emisor hasta que llega al ordenador receptor.

No es necesario indicar protocolos concretos; céntrate en el recorrido de los datos a través de las capas.

---

### Autoevaluación

Marca la opción que mejor refleje tu nivel de aprendizaje.

| Aspecto | 😊 | 😐 | ☹ |
|---------|:--:|:--:|:--:|
| Comprendo qué es un modelo de referencia. | ☐ | ☐ | ☐ |
| Distingo el modelo OSI del modelo TCP/IP. | ☐ | ☐ | ☐ |
| Identifico las capas del modelo OSI. | ☐ | ☐ | ☐ |
| Comprendo el proceso de encapsulación. | ☐ | ☐ | ☐ |
| Soy capaz de interpretar una comunicación en Packet Tracer. | ☐ | ☐ | ☐ |
| Relaciono los protocolos con las capas correspondientes. | ☐ | ☐ | ☐ |

## Reto final

### Analizando una comunicación de red

Una pequeña empresa dispone de una red local formada por dos ordenadores conectados a un switch Cisco 2960.

El administrador desea comprobar que la comunicación entre ambos equipos funciona correctamente y comprender qué ocurre durante el envío de un simple mensaje.

Para ello utilizará Cisco Packet Tracer y el modo **Simulation**.

Tu misión consiste en analizar esa comunicación utilizando los conocimientos adquiridos en este capítulo.

---

### Material disponible

- Cisco Packet Tracer.
- 2 ordenadores.
- 1 switch Cisco 2960.
- Cables Ethernet.
- Direcciones IP configuradas dentro de la misma red.

---

## Parte 1. Construcción de la red

Crea la siguiente topología:

- PC0
- Switch Cisco 2960
- PC1

Asigna las siguientes direcciones IP:

| Equipo | Dirección IP | Máscara |
|---------|--------------|---------|
| PC0 | 192.168.1.10 | 255.255.255.0 |
| PC1 | 192.168.1.20 | 255.255.255.0 |

Comprueba que ambos equipos pueden comunicarse correctamente mediante el comando:

```text
ping 192.168.1.20
```

---

## Parte 2. Observación de la comunicación

Activa el modo **Simulation**.

Ejecuta nuevamente el comando **ping** y observa el intercambio de paquetes.

Responde:

1. ¿Qué protocolos aparecen durante la comunicación?

2. ¿Cuál de ellos aparece antes de que se envíen los mensajes ICMP?

3. ¿Qué función desempeña ese protocolo?

4. ¿Qué dispositivos intervienen en el proceso?

---

## Parte 3. Relacionando protocolos y capas

Completa la siguiente tabla.

| Protocolo | Modelo TCP/IP | Modelo OSI |
|------------|---------------|------------|
| Ethernet | | |
| ARP | | |
| ICMP | | |

Justifica brevemente cada respuesta.

---

## Parte 4. Encapsulación

Explica qué ocurre con la información durante el envío de un paquete.

Describe, utilizando tus propias palabras:

- Qué sucede en el ordenador emisor.
- Qué información añade cada capa.
- Qué ocurre durante la transmisión.
- Qué sucede cuando el paquete llega al ordenador receptor.

No es necesario indicar todos los campos de cada cabecera; basta con explicar el proceso general.

---

## Parte 5. Localización de incidencias

Indica en qué capa del modelo OSI se localizaría inicialmente cada uno de los siguientes problemas.

| Incidencia | Capa |
|-------------|------|
| Cable Ethernet desconectado | |
| Dirección IP incorrecta | |
| Error en una aplicación web | |
| Router incapaz de encontrar la ruta hacia otra red | |

Justifica brevemente tus respuestas.

---

## Parte 6. Reflexión final

Responde razonadamente.

¿Por qué crees que los profesionales de redes continúan utilizando el modelo OSI para analizar averías si Internet funciona realmente utilizando el modelo TCP/IP?

---

## Objetivo del reto

Si has sido capaz de completar correctamente este reto, significa que ya comprendes cómo se organiza la comunicación en una red informática y eres capaz de relacionar protocolos, modelos de referencia y capas durante una comunicación real.

Estos conocimientos constituirán la base de los próximos capítulos, donde estudiarás las diferentes topologías de red y comenzarás a analizar con mayor profundidad el funcionamiento de Ethernet y de las redes locales.