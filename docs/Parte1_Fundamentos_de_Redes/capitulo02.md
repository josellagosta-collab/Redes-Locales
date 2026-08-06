# Capítulo 2. Estándares y protocolos de comunicación

## Introducción

En el capítulo anterior hemos aprendido qué es una red informática, cuáles son sus componentes principales y cómo viaja la información entre los dispositivos. Sin embargo, todavía queda una pregunta fundamental por responder:

> **¿Cómo es posible que un ordenador de un fabricante pueda comunicarse con un teléfono móvil de otro fabricante, un servidor con un sistema operativo diferente o una impresora de una marca distinta?**

La respuesta se encuentra en la existencia de **estándares** y **protocolos de comunicación**.

Imaginemos por un momento que cada fabricante diseñara sus propios cables, conectores y reglas de comunicación. En ese caso, un ordenador HP podría no ser capaz de comunicarse con un router Cisco o con una impresora Epson. Las redes informáticas serían incompatibles entre sí y el crecimiento de Internet habría sido imposible.

Para evitar esta situación, distintos organismos internacionales elaboran normas técnicas que todos los fabricantes pueden seguir al diseñar sus productos. Gracias a estos estándares, dispositivos desarrollados por empresas diferentes pueden intercambiar información de forma transparente.

Además de los estándares físicos, los dispositivos deben seguir unas reglas comunes durante la comunicación. Estas reglas reciben el nombre de **protocolos de comunicación** y especifican cómo deben enviarse, recibirse e interpretarse los datos.

En este capítulo estudiaremos los principales organismos de normalización, comprenderemos qué es un protocolo y conoceremos la familia de protocolos **TCP/IP**, utilizada actualmente por Internet y por prácticamente todas las redes informáticas.

---

## Objetivos de aprendizaje

Al finalizar este capítulo serás capaz de:

- Comprender la importancia de los estándares en las redes informáticas.
- Identificar los principales organismos internacionales de normalización.
- Explicar qué es un protocolo de comunicación.
- Diferenciar entre un protocolo y una suite de protocolos.
- Comprender la función de la familia de protocolos TCP/IP.
- Identificar algunos de los protocolos más utilizados en las redes actuales.
- Relacionar distintos protocolos con los servicios que utilizamos diariamente.

---

## 2.1 La necesidad de los estándares

Vivimos rodeados de dispositivos electrónicos desarrollados por fabricantes muy diferentes. Un mismo hogar puede disponer de ordenadores HP o Lenovo, teléfonos Samsung o Apple, televisores LG, impresoras Epson y un router suministrado por un operador de telecomunicaciones.

A pesar de pertenecer a fabricantes distintos, todos estos dispositivos son capaces de comunicarse entre sí sin que el usuario tenga que realizar ninguna configuración especial.

Esto es posible porque todos ellos respetan una serie de normas técnicas comunes.

Un **estándar** es un conjunto de especificaciones técnicas que define cómo debe diseñarse un producto o cómo debe realizarse un determinado proceso para garantizar que sea compatible con otros productos similares.

En el ámbito de las redes informáticas, los estándares permiten que dispositivos fabricados por empresas diferentes puedan conectarse utilizando los mismos cables, los mismos conectores y las mismas reglas de comunicación.

Gracias a ellos podemos sustituir un switch por otro de un fabricante distinto sin necesidad de cambiar el resto de la instalación.

<figure class="figura-libro">
  <img
    src="/assets/images/parte1/capitulo2/figura2_1.png"
    alt="Dispositivos de distintos fabricantes comunicándose gracias a los estándares"
  >
  <figcaption>
    <strong>Figura 2.1.</strong> Dispositivos de distintos fabricantes comunicándose gracias al uso de estándares comunes.
  </figcaption>
</figure>

### Un ejemplo cotidiano

Imaginemos que cada fabricante de automóviles decidiera diseñar una señalización de tráfico diferente.

Un conductor debería aprender unas normas nuevas cada vez que cambiara de vehículo. Circular por carretera sería prácticamente imposible.

Con las redes ocurre exactamente lo mismo.

Si cada fabricante utilizara sus propias reglas de comunicación, los dispositivos serían incompatibles y no podrían intercambiar información.

Los estándares evitan este problema estableciendo unas normas comunes aceptadas por toda la industria.

<figure class="figura-libro">
  <img
    src="/assets/images/parte1/capitulo2/figura2_2.png"
    alt="Problemas de compatibilidad cuando no existen estándares"
  >
  <figcaption>
    <strong>Figura 2.2.</strong> Comparación entre una red sin estándares comunes y otra en la que todos los dispositivos utilizan especificaciones compatibles.
  </figcaption>
</figure>

### Ventajas de los estándares

La utilización de estándares aporta numerosas ventajas tanto a fabricantes como a usuarios.

Entre las más importantes destacan:

- Garantizan la compatibilidad entre dispositivos.
- Facilitan la sustitución de equipos.
- Favorecen la competencia entre fabricantes.
- Reducen los costes de producción.
- Aceleran el desarrollo de nuevas tecnologías.
- Permiten la interoperabilidad entre redes de todo el mundo.

Gracias a estas ventajas, hoy en día es posible construir una red informática utilizando equipos de fabricantes diferentes sin que existan problemas de compatibilidad.

!!! note "Recuerda"

    Los estándares permiten que dispositivos desarrollados por fabricantes diferentes puedan trabajar conjuntamente utilizando las mismas normas técnicas.

!!! tip "¿Sabías que...?"

    Internet no pertenece a ninguna empresa ni a ningún país. Su funcionamiento es posible gracias a miles de estándares acordados internacionalmente y utilizados por millones de dispositivos en todo el mundo.

!!! abstract "🛠️ En el taller..."

    Durante las prácticas del módulo trabajarás con routers Cisco serie 1800, switches Cisco Catalyst 2900 y ordenadores con distintos sistemas operativos.

    Todos ellos podrán comunicarse entre sí porque respetan los mismos estándares de red, independientemente del fabricante o del sistema operativo instalado.

!!! example "💻 En Packet Tracer..."

    En la primera práctica de este capítulo conectarás dispositivos Cisco y comprobarás que pueden comunicarse con ordenadores y servidores gracias al uso de protocolos y estándares comunes.

!!! question "Piensa un momento..."

    Imagina que un fabricante desarrollara un nuevo tipo de cable Ethernet incompatible con el resto del mercado.

    - ¿Qué problemas ocasionaría a los usuarios?
    - ¿Sería fácil que esa tecnología tuviera éxito?
    - ¿Por qué crees que la mayoría de los fabricantes prefieren seguir los estándares internacionales?

## 2.2 Organismos de normalización

Los estándares que hacen posible el funcionamiento de las redes informáticas no aparecen de forma espontánea. Detrás de cada cable, conector, protocolo o tecnología existe el trabajo de organizaciones internacionales que elaboran, revisan y actualizan las normas utilizadas por fabricantes de todo el mundo.

Estos organismos están formados por expertos procedentes de universidades, centros de investigación, empresas tecnológicas y administraciones públicas. Su objetivo es desarrollar especificaciones técnicas abiertas que permitan la interoperabilidad entre dispositivos fabricados por compañías diferentes.

Gracias a este trabajo conjunto, hoy podemos conectar un ordenador de una marca, un switch Cisco, un punto de acceso Ubiquiti y un servidor Dell dentro de la misma red sin problemas de compatibilidad.

Cada organismo trabaja sobre aspectos diferentes de las tecnologías de la información y las comunicaciones. Algunos definen el cableado físico, otros desarrollan protocolos de Internet y otros establecen modelos de referencia o estándares industriales.

En los siguientes apartados estudiaremos los organismos más importantes relacionados con las redes informáticas.

### IEEE (Institute of Electrical and Electronics Engineers)

El **IEEE** es probablemente la organización más conocida dentro del ámbito de las redes de computadores.

Se trata de una asociación internacional formada por ingenieros e investigadores que desarrolla estándares relacionados con la electrónica, las telecomunicaciones, la informática y la ingeniería eléctrica.

En redes locales, el IEEE es responsable de la familia de estándares **IEEE 802**, donde se definen tecnologías ampliamente utilizadas como:

- **IEEE 802.3** → Ethernet.
- **IEEE 802.11** → Wi-Fi.
- **IEEE 802.15** → Bluetooth.
- **IEEE 802.1Q** → VLAN.

Estos estándares especifican aspectos como:

- El tipo de cable utilizado.
- La velocidad de transmisión.
- Los conectores.
- El formato de las tramas Ethernet.
- El funcionamiento de las redes inalámbricas.

Actualmente prácticamente todas las redes locales del mundo utilizan algún estándar desarrollado por el IEEE.

---

### ISO (International Organization for Standardization)

La **ISO** es una organización internacional independiente encargada de elaborar estándares para multitud de sectores industriales.

Aunque desarrolla normas para ámbitos muy diversos, dentro de las redes informáticas es especialmente conocida por haber definido el **modelo de referencia OSI**, que estudiaremos en el siguiente capítulo.

El modelo OSI no describe una tecnología concreta, sino una forma ordenada de entender cómo se produce la comunicación entre dispositivos mediante diferentes capas funcionales.

Además del modelo OSI, la ISO publica miles de normas relacionadas con la calidad, la seguridad, la gestión documental, la industria y la tecnología.

---

### IETF (Internet Engineering Task Force)

La **IETF** es la organización responsable del desarrollo de la mayoría de protocolos utilizados actualmente en Internet.

A diferencia de otras organizaciones más formales, la IETF funciona como una comunidad internacional de ingenieros, investigadores y empresas que colaboran para mejorar continuamente el funcionamiento de Internet.

Muchos de los protocolos que utilizamos diariamente han sido desarrollados por la IETF, entre ellos:

- IP.
- TCP.
- UDP.
- DNS.
- DHCP.
- HTTP.
- HTTPS.
- SMTP.
- FTP.

La documentación oficial de la IETF se publica mediante documentos denominados **RFC (Request For Comments)**.

Cada RFC describe detalladamente el funcionamiento de un protocolo o una recomendación técnica.

---

### TIA/EIA (Telecommunications Industry Association)

La **TIA** desarrolla estándares relacionados con las infraestructuras de telecomunicaciones y el cableado estructurado.

Dentro del ámbito de las redes locales es especialmente conocida por publicar las normas que definen:

- Las categorías de cable UTP.
- Los conectores RJ-45.
- Las normas de cableado estructurado.
- La distribución del cableado en edificios.

Uno de los estándares más conocidos es **TIA/EIA-568**, que especifica aspectos tan importantes como:

- Los colores de los conductores.
- El orden de los ocho hilos del conector RJ-45.
- Las normas de conexión T568A y T568B.

Durante las prácticas de taller de este módulo utilizaremos continuamente estas normas al fabricar y comprobar cables Ethernet.

---

### ANSI (American National Standards Institute)

El **ANSI** coordina el desarrollo de estándares nacionales en Estados Unidos y colabora con numerosas organizaciones internacionales.

En muchas ocasiones no desarrolla directamente los estándares, sino que valida y coordina normas elaboradas por otras entidades como la TIA o el IEEE.

Gracias a esta colaboración, muchos estándares terminan siendo aceptados internacionalmente y utilizados por fabricantes de todo el mundo.

<figure class="figura-libro">
  <img
    src="/assets/images/parte1/capitulo2/figura2_3.png"
    alt="Principales organismos de normalización en redes"
  >
  <figcaption>
    <strong>Figura 2.3.</strong> Principales organismos de normalización relacionados con las redes informáticas y sus ámbitos de trabajo.
  </figcaption>
</figure>

<figure class="figura-libro">
  <img
    src="/assets/images/parte1/capitulo2/figura2_4.png"
    alt="Proceso desde la creación de un estándar hasta la compatibilidad entre dispositivos"
  >
  <figcaption>
    <strong>Figura 2.4.</strong> Proceso mediante el cual un estándar definido por un organismo de normalización termina siendo implementado por los fabricantes y permite la compatibilidad entre dispositivos.
  </figcaption>
</figure>

---

!!! note "Recuerda"

    Ningún fabricante decide por sí solo cómo debe funcionar una red informática.

    Los estándares internacionales son el resultado del trabajo conjunto de miles de expertos pertenecientes a organismos de normalización.

!!! tip "¿Sabías que...?"

    Cada vez que aparece una nueva tecnología de red, como Wi-Fi 7 o Ethernet de 800 Gbps, los organismos de normalización trabajan durante años antes de publicar el estándar definitivo.

!!! abstract "🛠️ En el taller..."

    En los próximos capítulos utilizarás conectores RJ-45, cable UTP de categoría 6 y switches Cisco Catalyst.

    Todos estos elementos han sido diseñados siguiendo estándares internacionales que garantizan su compatibilidad.

!!! example "💻 En Packet Tracer..."

    Aunque Packet Tracer simplifica muchos aspectos del funcionamiento de la red, todos los dispositivos virtuales utilizan los mismos estándares y protocolos que los equipos reales.

!!! question "Piensa un momento..."

    Si una empresa desarrollara una nueva tecnología Wi-Fi mucho más rápida que las actuales, ¿crees que podría tener éxito si no fuera compatible con el resto de dispositivos existentes?

## 2.3 ¿Qué es un protocolo?

En el apartado anterior hemos visto que los estándares permiten que dispositivos fabricados por empresas diferentes puedan conectarse y ser compatibles entre sí.

Sin embargo, utilizar el mismo cable o el mismo conector no es suficiente para garantizar la comunicación.

Imaginemos dos personas que desean hablar entre sí.

Aunque ambas dispongan de un teléfono idéntico, la conversación será imposible si una habla español y la otra únicamente entiende japonés. Ambos teléfonos funcionan correctamente, pero las personas no comparten un mismo idioma.

En las redes informáticas ocurre exactamente lo mismo.

Los dispositivos necesitan un conjunto de reglas comunes que indiquen cómo iniciar una comunicación, cómo intercambiar información y cómo finalizarla correctamente.

Estas reglas reciben el nombre de **protocolos de comunicación**.

Un **protocolo de comunicación** es un conjunto de normas que define cómo deben comunicarse dos o más dispositivos conectados a una red.

Gracias a los protocolos, los dispositivos saben:

- Cómo iniciar una comunicación.
- Cómo identificar al destinatario.
- Cómo dividir la información en paquetes.
- Cómo comprobar que los datos llegan correctamente.
- Qué hacer cuando se produce un error.
- Cómo finalizar la comunicación.

Sin protocolos, cada fabricante desarrollaría sus propias reglas y los dispositivos no podrían entenderse entre sí.

---

### Un ejemplo cotidiano

Cuando dos personas mantienen una conversación siguen, normalmente sin darse cuenta, una serie de normas sociales.

Primero una persona saluda.

La otra responde al saludo.

Después ambos hablan por turnos.

Si uno no entiende algo, pide que se repita.

Finalmente ambos se despiden.

La conversación ha seguido un protocolo.

En una red informática sucede algo muy parecido.

Los ordenadores también siguen una secuencia ordenada de acciones para intercambiar información de forma fiable.

<figure class="figura-libro">
  <img
    src="/assets/images/parte1/capitulo2/figura2_5.png"
    alt="Comparación entre una conversación humana y un protocolo de comunicación"
  >
  <figcaption>
    <strong>Figura 2.5.</strong> Comparación entre una conversación humana y el funcionamiento de un protocolo de comunicación entre dos dispositivos.
  </figcaption>
</figure>

---

### ¿Qué define un protocolo?

Aunque cada protocolo tiene una finalidad diferente, la mayoría especifican aspectos como los siguientes:

- El formato que deben tener los mensajes.
- El orden en que deben enviarse.
- El tamaño máximo de los datos.
- Cómo detectar errores durante la transmisión.
- Cómo solicitar el reenvío de información perdida.
- Cómo finalizar correctamente la comunicación.

Gracias a estas reglas, dispositivos desarrollados por fabricantes completamente distintos pueden comunicarse sin problemas.

<figure class="figura-libro">
  <img
    src="/assets/images/parte1/capitulo2/figura2_6.png"
    alt="Funciones principales de un protocolo de comunicación"
  >
  <figcaption>
    <strong>Figura 2.6.</strong> Funciones principales que desempeña un protocolo durante una comunicación de red.
  </figcaption>
</figure>

---

### Protocolos en nuestra vida diaria

Aunque normalmente no somos conscientes de ello, utilizamos protocolos constantemente.

Cada vez que:

- Abrimos una página web.
- Enviamos un correo electrónico.
- Vemos un vídeo en Internet.
- Enviamos un mensaje por WhatsApp.
- Compartimos un archivo en una red local.

...nuestro ordenador o teléfono está utilizando varios protocolos diferentes al mismo tiempo.

Cada uno se encarga de una tarea concreta.

Más adelante estudiaremos algunos de los más importantes, como:

- IP.
- TCP.
- UDP.
- HTTP.
- HTTPS.
- DNS.
- DHCP.

Todos ellos forman parte de la familia de protocolos TCP/IP.

---

### ¿Por qué existen tantos protocolos?

Podría parecer que sería suficiente utilizar un único protocolo para todas las comunicaciones.

Sin embargo, cada servicio de red tiene necesidades diferentes.

Por ejemplo:

- Una videollamada necesita transmitir información rápidamente, aunque se pierda algún dato durante el camino.
- Una transferencia bancaria exige que toda la información llegue correctamente, aunque el proceso sea algo más lento.
- Una página web necesita localizar primero el servidor donde está alojada antes de descargar su contenido.

Por este motivo existen numerosos protocolos especializados, cada uno diseñado para resolver un problema concreto.

Trabajando conjuntamente permiten que Internet funcione de forma eficiente.

---

!!! note "Recuerda"

    Un protocolo define las reglas que deben seguir los dispositivos para poder comunicarse correctamente.

!!! tip "¿Sabías que...?"

    Cuando escribes una dirección web en el navegador intervienen varios protocolos distintos antes de que aparezca la página en la pantalla.

!!! abstract "🛠️ En el taller..."

    Durante este curso utilizarás herramientas capaces de mostrar los protocolos que circulan por una red en tiempo real.

    Podrás observar cómo un mismo ordenador utiliza simultáneamente decenas de protocolos diferentes.

!!! example "💻 En Packet Tracer..."

    Packet Tracer permite visualizar el recorrido de los paquetes y observar qué protocolos intervienen en cada comunicación mediante el modo **Simulation**.

!!! question "Piensa un momento..."

    Cuando envías una fotografía por WhatsApp, ¿crees que interviene un único protocolo o varios trabajando conjuntamente?

    ¿Qué funciones diferentes podría desempeñar cada uno de ellos?

## 2.4 Suites de protocolos

En el apartado anterior hemos aprendido que un protocolo define las reglas que deben seguir los dispositivos para poder comunicarse correctamente.

Sin embargo, un único protocolo no puede resolver todas las necesidades que aparecen durante una comunicación a través de una red.

Pensemos en el envío de un correo electrónico.

Para que el mensaje llegue correctamente al destinatario es necesario realizar numerosas tareas diferentes:

- Localizar el servidor donde se encuentra el buzón de correo.
- Identificar el ordenador de destino.
- Dividir la información en paquetes.
- Transportar los paquetes por la red.
- Comprobar que todos llegan correctamente.
- Reconstruir el mensaje original.
- Mostrar finalmente el correo al usuario.

Ningún protocolo es capaz de realizar por sí solo todas estas funciones.

Por este motivo los protocolos trabajan en equipo.

A este conjunto organizado de protocolos que colaboran entre sí para proporcionar un servicio de comunicación se le denomina **suite de protocolos**.

Una **suite de protocolos** es un conjunto de protocolos diseñados para trabajar conjuntamente, donde cada uno desempeña una función específica dentro del proceso de comunicación.

Cada protocolo se especializa en una tarea concreta y coopera con el resto para conseguir que la transmisión de información sea fiable, eficiente y transparente para el usuario.

---

### Un trabajo en equipo

Podemos comparar una suite de protocolos con el funcionamiento de un hospital.

Cuando un paciente llega al servicio de urgencias intervienen numerosos profesionales:

- El personal administrativo registra los datos del paciente.
- El personal de enfermería realiza una primera valoración.
- El médico establece el diagnóstico.
- El laboratorio analiza las muestras.
- El servicio de radiología obtiene imágenes.
- La farmacia suministra la medicación.

Cada profesional realiza una tarea diferente, pero todos colaboran para atender correctamente al paciente.

Con las redes ocurre exactamente lo mismo.

Cada protocolo desempeña una función específica y el conjunto hace posible la comunicación.

<figure class="figura-libro">
  <img
    src="/assets/images/parte1/capitulo2/figura2_7.png"
    alt="Comparación entre una suite de protocolos y un equipo de trabajo"
  >
  <figcaption>
    <strong>Figura 2.7.</strong> Comparación entre una suite de protocolos y un equipo de trabajo, donde cada elemento desempeña una función específica para conseguir un objetivo común.
  </figcaption>
</figure>

---

### La familia TCP/IP

La suite de protocolos más utilizada en la actualidad es **TCP/IP**.

No se trata de un único protocolo, sino de un conjunto formado por decenas de protocolos especializados.

Algunos de los más importantes son:

| Protocolo | Función principal |
|-----------|-------------------|
| IP | Identificar los equipos y transportar los paquetes. |
| TCP | Garantizar que la información llegue correctamente. |
| UDP | Transmitir información rápidamente cuando la velocidad es prioritaria. |
| DNS | Traducir nombres de dominio en direcciones IP. |
| DHCP | Asignar automáticamente direcciones IP a los dispositivos. |
| HTTP | Transferir páginas web. |
| HTTPS | Transferir páginas web de forma segura. |

En el siguiente apartado estudiaremos con más detalle la familia TCP/IP y comprenderemos por qué constituye la base del funcionamiento de Internet.

<figure class="figura-libro">
  <img
    src="/assets/images/parte1/capitulo2/figura2_8.png"
    alt="Funcionamiento conjunto de la suite TCP/IP"
  >
  <figcaption>
    <strong>Figura 2.8.</strong> Ejemplo de cómo distintos protocolos de la suite TCP/IP colaboran durante la carga de una página web.
  </figcaption>
</figure>

---

### ¿Por qué utilizar una suite y no un único protocolo?

Dividir las funciones entre varios protocolos presenta numerosas ventajas.

Entre ellas destacan:

- Cada protocolo puede evolucionar de forma independiente.
- Es posible sustituir un protocolo sin modificar toda la red.
- Se simplifica el diseño de las aplicaciones.
- Los fabricantes pueden desarrollar nuevos protocolos compatibles con los existentes.
- La comunicación resulta más flexible y escalable.

Este enfoque modular ha permitido que Internet evolucione durante décadas incorporando nuevas tecnologías sin necesidad de rediseñar completamente su funcionamiento.

---

!!! note "Recuerda"

    Una suite de protocolos es un conjunto de protocolos que colaboran entre sí para realizar una comunicación completa.

!!! tip "¿Sabías que...?"

    Cuando visitas una página web suelen intervenir simultáneamente protocolos como DNS, TCP, IP y HTTPS, aunque el usuario únicamente perciba que la página aparece en su navegador.

!!! abstract "🛠️ En el taller..."

    Durante las prácticas con Wireshark observarás que una única comunicación genera paquetes pertenecientes a varios protocolos diferentes.

    Esto permitirá comprobar cómo trabajan conjuntamente dentro de la suite TCP/IP.

!!! example "💻 En Packet Tracer..."

    En el modo **Simulation** podrás seguir paso a paso el recorrido de un paquete y observar qué protocolos intervienen en cada fase de la comunicación.

!!! question "Piensa un momento..."

    Si desapareciera el protocolo DNS, ¿seguiría funcionando Internet?

    ¿Qué tendría que hacer un usuario para acceder a una página web?

## 2.5 La familia TCP/IP

En los apartados anteriores hemos aprendido qué son los protocolos y por qué es necesario que trabajen conjuntamente formando una **suite de protocolos**.

La suite más utilizada actualmente en todo el mundo es **TCP/IP**.

Aunque muchas personas piensan que TCP/IP es un único protocolo, en realidad se trata de un conjunto de protocolos que colaboran entre sí para hacer posible la comunicación entre dispositivos conectados a una red.

Prácticamente toda la información que circula por Internet viaja utilizando protocolos pertenecientes a esta familia.

Gracias a TCP/IP podemos navegar por páginas web, enviar correos electrónicos, realizar videollamadas, compartir archivos o visualizar vídeos en streaming.

En definitiva, TCP/IP constituye el lenguaje común utilizado por Internet.

---

### ¿Qué significa TCP/IP?

El nombre **TCP/IP** procede de dos de los protocolos más importantes de la familia:

- **TCP (Transmission Control Protocol)**.
- **IP (Internet Protocol)**.

Ambos protocolos fueron desarrollados durante la década de 1970 como parte de un proyecto de investigación financiado por el Departamento de Defensa de los Estados Unidos.

Su objetivo era crear un sistema de comunicaciones capaz de seguir funcionando incluso aunque parte de la red dejara de estar disponible.

Con el paso de los años, esta tecnología fue evolucionando hasta convertirse en la base de Internet.

Actualmente millones de dispositivos utilizan diariamente la familia TCP/IP para comunicarse.

---

### Los protocolos trabajan en equipo

Cada protocolo de la familia TCP/IP realiza una tarea concreta.

Por ejemplo:

- **IP** se encarga de transportar los paquetes hasta su destino.
- **TCP** garantiza que la información llegue completa y en el orden correcto.
- **UDP** transmite información cuando la velocidad es más importante que la fiabilidad.
- **DNS** traduce los nombres de dominio en direcciones IP.
- **DHCP** asigna automáticamente la configuración de red a los dispositivos.
- **HTTP** y **HTTPS** permiten acceder a páginas web.

Ninguno de estos protocolos podría realizar por sí solo todas las funciones necesarias para establecer una comunicación completa.

Su verdadero potencial reside precisamente en que trabajan de forma coordinada.

<figure class="figura-libro">
  <img
    src="/assets/images/parte1/capitulo2/figura2_9.png"
    alt="Visión general de la familia TCP/IP"
  >
  <figcaption>
    <strong>Figura 2.9.</strong> Principales protocolos que forman la familia TCP/IP y la función básica que desempeña cada uno durante una comunicación.
  </figcaption>
</figure>

---

### Un ejemplo de funcionamiento

Supongamos que un alumno abre el navegador y escribe la dirección:

```
www.wikipedia.org
```

Aunque el usuario únicamente observa cómo aparece la página en la pantalla, internamente suceden numerosas operaciones.

De forma simplificada ocurre lo siguiente:

1. El ordenador consulta al servidor DNS para conocer la dirección IP correspondiente.
2. Se establece una comunicación con el servidor remoto.
3. Se solicita la página web.
4. El servidor responde enviando la información.
5. Los datos llegan al navegador y se muestran en pantalla.

Todo este proceso suele completarse en menos de un segundo.

Lo más sorprendente es que el usuario no necesita conocer ninguno de los protocolos implicados.

Toda la complejidad queda oculta gracias al funcionamiento conjunto de la familia TCP/IP.

<figure class="figura-libro">
  <img
    src="/assets/images/parte1/capitulo2/figura2_10.png"
    alt="Recorrido simplificado de una petición web"
  >
  <figcaption>
    <strong>Figura 2.10.</strong> Recorrido simplificado de una petición web utilizando distintos protocolos de la familia TCP/IP.
  </figcaption>
</figure>

---

### ¿Por qué ha tenido tanto éxito?

La familia TCP/IP se ha convertido en el estándar mundial de las comunicaciones por numerosos motivos.

Entre ellos destacan:

- Es un estándar abierto.
- Puede utilizarse en redes de cualquier tamaño.
- Es independiente del fabricante.
- Funciona sobre diferentes medios físicos (fibra, cable UTP, Wi-Fi...).
- Es muy flexible.
- Continúa evolucionando para adaptarse a las nuevas tecnologías.

Gracias a estas características, actualmente resulta prácticamente imposible encontrar una red informática que no utilice TCP/IP.

---

!!! note "Recuerda"

    TCP/IP no es un único protocolo.

    Es una familia formada por numerosos protocolos especializados que colaboran entre sí para hacer posible las comunicaciones en Internet.

!!! tip "¿Sabías que...?"

    Se estima que en Internet circulan diariamente billones de paquetes IP transportando información entre miles de millones de dispositivos repartidos por todo el mundo.

!!! abstract "🛠️ En el taller..."

    En las próximas prácticas configurarás direcciones IP en ordenadores, switches y routers Cisco.

    Todos ellos utilizarán la familia TCP/IP para poder comunicarse.

!!! example "💻 En Packet Tracer..."

    A medida que avances en el curso construirás redes cada vez más complejas utilizando exclusivamente protocolos pertenecientes a la familia TCP/IP.

!!! question "Piensa un momento..."

    Si todos los fabricantes utilizan la misma familia de protocolos, ¿por qué existen routers, switches y ordenadores de marcas diferentes que pueden comunicarse sin ningún problema?

## 2.6 Protocolos más utilizados en las redes actuales

A lo largo de este capítulo hemos visto que una red informática funciona gracias a la colaboración de numerosos protocolos.

Cada uno de ellos está especializado en una tarea concreta y todos trabajan conjuntamente para que la comunicación sea rápida, segura y fiable.

Aunque existen cientos de protocolos diferentes, algunos de ellos aparecen prácticamente en cualquier red informática, desde una pequeña red doméstica hasta Internet.

En este apartado conoceremos los más importantes y descubriremos en qué situaciones intervienen.

---

### IP (Internet Protocol)

El protocolo **IP** constituye la base de todas las comunicaciones en Internet.

Su principal función consiste en identificar cada dispositivo mediante una dirección IP y transportar los paquetes desde el origen hasta el destino.

Puede compararse con el servicio de correos.

Cuando enviamos una carta, el cartero necesita conocer la dirección del destinatario para poder entregarla correctamente.

En una red ocurre exactamente lo mismo.

Los paquetes de datos incorporan una dirección IP de origen y otra de destino para que los routers puedan encaminarlos correctamente.

Sin IP, los dispositivos no sabrían dónde enviar la información.

---

### TCP (Transmission Control Protocol)

TCP se encarga de garantizar que toda la información llegue correctamente.

Antes de comenzar la transmisión establece una comunicación entre ambos dispositivos y, durante el envío, comprueba continuamente que no se pierda ningún dato.

Si detecta que un paquete no ha llegado correctamente, solicita automáticamente su reenvío.

Gracias a este funcionamiento, TCP resulta ideal para aplicaciones donde la fiabilidad es fundamental, como:

- Navegación web.
- Correo electrónico.
- Transferencia de archivos.
- Operaciones bancarias.

---

### UDP (User Datagram Protocol)

UDP también transporta información, pero lo hace de una forma mucho más sencilla.

A diferencia de TCP, no comprueba si los paquetes llegan correctamente.

Su principal ventaja es la velocidad.

Por este motivo se utiliza en aplicaciones donde resulta preferible recibir la información rápidamente, aunque pueda perderse algún paquete.

Algunos ejemplos son:

- Videollamadas.
- Juegos en línea.
- Retransmisiones deportivas.
- Streaming de audio y vídeo.

---

### DNS (Domain Name System)

Las personas recordamos fácilmente nombres como:

- www.wikipedia.org
- www.monlau.com
- www.google.es

Sin embargo, los ordenadores utilizan direcciones IP.

El protocolo **DNS** actúa como una agenda telefónica.

Cuando escribimos un nombre de dominio, DNS busca cuál es la dirección IP correspondiente para que el ordenador pueda localizar el servidor adecuado.

Sin DNS tendríamos que memorizar direcciones IP para acceder a cualquier página web.

---

### DHCP (Dynamic Host Configuration Protocol)

Cuando conectamos un ordenador o un teléfono móvil a una red, normalmente no tenemos que configurar manualmente la dirección IP.

Esto es posible gracias al protocolo **DHCP**.

DHCP asigna automáticamente:

- Dirección IP.
- Máscara de red.
- Puerta de enlace.
- Servidores DNS.

Gracias a ello, la incorporación de nuevos dispositivos a una red resulta rápida y sencilla.

---

### HTTP y HTTPS

HTTP es el protocolo utilizado para transferir páginas web.

Cuando escribimos una dirección en el navegador, normalmente se utiliza HTTP o su versión segura, HTTPS.

La diferencia principal es que HTTPS cifra la información intercambiada entre el navegador y el servidor.

Este cifrado protege los datos frente a posibles interceptaciones durante la transmisión.

Por este motivo, actualmente prácticamente todas las páginas web utilizan HTTPS.

---

### ¿Qué protocolo utiliza cada aplicación?

La siguiente tabla resume algunos de los protocolos más utilizados en situaciones cotidianas.

| Situación | Protocolos principales |
|-----------|------------------------|
| Navegar por Internet | DNS, TCP, IP, HTTPS |
| Ver un vídeo en streaming | DNS, UDP, IP |
| Enviar un correo electrónico | DNS, TCP, IP |
| Descargar un archivo | TCP, IP |
| Conectarse a una red Wi-Fi | DHCP, IP |

Como puede observarse, una única aplicación suele utilizar varios protocolos simultáneamente.

Cada uno realiza una función distinta y todos colaboran para ofrecer el servicio solicitado por el usuario.

<figure class="figura-libro">
  <img
    src="/assets/images/parte1/capitulo2/figura2_11.png"
    alt="Protocolos más utilizados en las redes actuales"
  >
  <figcaption>
    <strong>Figura 2.11.</strong> Resumen de los principales protocolos utilizados en las redes actuales, indicando su función, aplicaciones habituales y características más importantes.
  </figcaption>
</figure>

<figure class="figura-libro">
  <img
    src="/assets/images/parte1/capitulo2/figura2_12.png"
    alt="Cómo colaboran los protocolos al cargar una página web"
  >
  <figcaption>
    <strong>Figura 2.12.</strong> Ejemplo simplificado del orden en que intervienen distintos protocolos de la familia TCP/IP cuando un usuario accede a una página web.
  </figcaption>
</figure>

---

!!! note "Recuerda"

    Ningún protocolo realiza todas las funciones necesarias para una comunicación.

    El funcionamiento de Internet depende del trabajo conjunto de numerosos protocolos especializados.

!!! tip "¿Sabías que...?"

    Cada vez que abres una página web intervienen varios protocolos distintos en apenas unas décimas de segundo, aunque el usuario únicamente perciba el resultado final.

!!! abstract "🛠️ En el taller..."

    Durante las prácticas con Packet Tracer y Wireshark identificarás estos protocolos en comunicaciones reales y aprenderás a reconocer cuándo interviene cada uno de ellos.

!!! example "💻 En Packet Tracer..."

    En el modo **Simulation** podrás observar cómo un único acceso a una página web genera paquetes correspondientes a DNS, TCP, IP y HTTP/HTTPS.

!!! question "Piensa un momento..."

    Cuando reproduces un vídeo en directo desde Internet, ¿por qué crees que puede ser preferible utilizar UDP en lugar de TCP?

## Práctica guiada con Cisco Packet Tracer

### Objetivos

En esta práctica aprenderás a identificar cómo colaboran distintos protocolos para permitir la comunicación entre equipos de una red.

Aunque todavía no configuraremos direcciones IP manualmente ni routers, utilizaremos el **modo Simulation** de Cisco Packet Tracer para observar qué ocurre cuando un ordenador intenta comunicarse con otro dispositivo.

Al finalizar la práctica serás capaz de:

- Crear una pequeña red en Cisco Packet Tracer.
- Conectar correctamente los dispositivos.
- Utilizar el modo **Realtime** y **Simulation**.
- Observar el intercambio de paquetes entre dispositivos.
- Identificar algunos de los protocolos estudiados en este capítulo.

---

### Material necesario

- Cisco Packet Tracer (versión 8.x o superior).
- Un ordenador con Windows, Linux o macOS.

---

### Escenario de la práctica

Construiremos la siguiente red:

```
PC0 ─────────────── Switch0 ─────────────── Server0
```

Todos los dispositivos pertenecerán a la misma red local.

En este capítulo no es necesario configurar manualmente direcciones IP, ya que Packet Tracer asignará automáticamente la configuración necesaria para simplificar la práctica.

El objetivo principal consiste en observar la comunicación, no en aprender todavía el direccionamiento IP.

<figure class="figura-libro">
  <img
    src="/assets/images/parte1/capitulo2/figura2_13.png"
    alt="Escenario de la práctica en Cisco Packet Tracer"
  >
  <figcaption>
    <strong>Figura 2.13.</strong> Topología utilizada en la práctica guiada: un PC, un switch Cisco 2960 y un servidor conectados en la misma red local.
  </figcaption>
</figure>

---

### Paso 1. Crear un nuevo proyecto

1. Abre Cisco Packet Tracer.
2. Selecciona **File → New**.
3. Guarda el proyecto con el nombre:

```
P2_Protocolos.pkt
```

Es recomendable guardar el proyecto desde el principio para evitar pérdidas de información.

---

### Paso 2. Añadir los dispositivos

Desde la parte inferior izquierda de Packet Tracer incorpora:

- Un PC.
- Un switch Cisco 2960.
- Un servidor.

Sitúalos aproximadamente como muestra el siguiente esquema.

```
PC0          Switch0          Server0
```

No es necesario que las posiciones sean exactamente iguales.

---

### Paso 3. Conectar los dispositivos

Selecciona la herramienta **Connections**.

Utiliza cable de cobre directo (**Copper Straight-Through**) para realizar las conexiones:

- PC0 → Switch0
- Server0 → Switch0

Cuando ambos enlaces aparezcan en color verde significará que la conexión física funciona correctamente.

---

### Paso 4. Cambiar al modo Simulation

En la esquina inferior derecha de Packet Tracer selecciona:

```
Simulation
```

La simulación permite observar todos los paquetes que circulan por la red.

Este modo resulta especialmente útil para comprender el funcionamiento interno de los protocolos.

---

### Paso 5. Generar una comunicación

Selecciona la herramienta:

```
Add Simple PDU
```

A continuación:

1. Haz clic sobre **PC0**.
2. Haz clic sobre **Server0**.

Packet Tracer generará automáticamente una comunicación entre ambos dispositivos.

---

### Paso 6. Observar los eventos

Pulsa el botón:

```
Auto Capture / Play
```

Observa atentamente cómo aparecen distintos paquetes desplazándose entre los equipos.

Haz clic sobre cualquiera de ellos para examinar la información que contiene.

Aunque todavía no conozcas todos los detalles, intenta identificar:

- El dispositivo origen.
- El dispositivo destino.
- El recorrido seguido por el paquete.

En los próximos capítulos aprenderemos a interpretar toda esta información.

<figure class="figura-libro">
  <img
    src="/assets/images/parte1/capitulo2/figura2_14.png"
    alt="Visualización de paquetes en el modo Simulation"
  >
  <figcaption>
    <strong>Figura 2.14.</strong> Visualización del intercambio de paquetes mediante el modo <em>Simulation</em> de Cisco Packet Tracer, permitiendo observar el recorrido de la comunicación y los protocolos implicados.
  </figcaption>
</figure>

---

### ¿Qué estamos observando?

Cuando dos dispositivos comienzan a comunicarse no intercambian únicamente los datos solicitados.

Antes de ello pueden intervenir diferentes protocolos encargados de:

- Localizar el destinatario.
- Resolver direcciones.
- Establecer la comunicación.
- Transportar la información.

Todo este proceso ocurre automáticamente en apenas unas décimas de segundo.

Packet Tracer nos permite visualizar un proceso que normalmente permanece oculto para el usuario.

---

### Actividades propuestas

Realiza las siguientes actividades:

1. Repite la comunicación varias veces.
2. Observa si siempre aparecen los mismos paquetes.
3. Cambia el dispositivo origen.
4. Cambia el dispositivo destino.
5. Intenta explicar qué función podría desempeñar cada protocolo observado.

---

### Reflexiona

Responde a las siguientes preguntas en tu cuaderno:

1. ¿Por qué aparecen varios paquetes si únicamente hemos enviado una comunicación?
2. ¿Qué ventajas ofrece el modo **Simulation** frente al modo **Realtime**?
3. ¿Crees que un usuario normal es consciente de todos estos intercambios de información?
4. ¿Por qué resulta útil visualizar el funcionamiento interno de la red durante el aprendizaje?

---

### ¿Qué hemos aprendido?

Después de realizar esta práctica ya eres capaz de:

- Construir una red sencilla en Cisco Packet Tracer.
- Conectar correctamente distintos dispositivos.
- Utilizar el modo **Simulation**.
- Visualizar el intercambio de paquetes.
- Comprender que una comunicación utiliza varios protocolos trabajando conjuntamente.

En los próximos capítulos aprenderás a configurar manualmente las direcciones IP y a interpretar con detalle cada uno de los paquetes que acabas de observar.

## Práctica de taller: Primer contacto con equipos Cisco

### Objetivos

En esta práctica realizarás tu primer contacto con equipos Cisco reales.

Al finalizar la sesión serás capaz de:

- Identificar un router Cisco serie 1800 y un switch Cisco Catalyst 2900.
- Reconocer los distintos puertos de cada dispositivo.
- Conectar correctamente los equipos mediante cables Ethernet.
- Acceder por consola al sistema operativo Cisco IOS.
- Ejecutar comandos básicos de consulta.
- Interpretar la información mostrada por el sistema.

En esta práctica **no modificaremos ninguna configuración**. El objetivo consiste únicamente en conocer el funcionamiento básico del hardware y del sistema operativo IOS.

---

### Material necesario (por pareja)

<figure class="figura-libro">
  <img
    src="/assets/images/parte1/capitulo2/figura2_15.png"
    alt="Material utilizado en la práctica de taller"
  >
  <figcaption>
    <strong>Figura 2.15.</strong> Material suministrado a cada pareja para la práctica de laboratorio: dos routers Cisco 1800, dos switches Cisco Catalyst 2900, dos ordenadores, cables Ethernet, cables de consola y regleta de alimentación.
  </figcaption>
</figure>

Cada grupo de dos alumnos dispondrá del siguiente material:

- 2 routers Cisco serie 1800.
- 2 switches Cisco Catalyst 2900.
- 2 ordenadores.
- 4 cables Ethernet RJ-45.
- 2 cables de consola.
- Regleta de alimentación.

Antes de comenzar verifica que todo el material se encuentra en buen estado.

---

### Conociendo el hardware

Observa detenidamente los equipos suministrados.

En el router identifica:

- Puerto de consola.
- Interfaces FastEthernet.
- Indicadores LED.
- Interruptor de encendido.
- Conector de alimentación.

En el switch identifica:

- Puerto de consola.
- Puertos FastEthernet.
- Puertos Gigabit (si existen).
- Indicadores LED.
- Botón Mode.

Anota en tu cuaderno la función que crees que desempeña cada elemento.

---

### Montaje de la red

<figure class="figura-libro">
  <img
    src="/assets/images/parte1/capitulo2/figura2_16.png"
    alt="Montaje de la red y acceso por consola"
  >
  <figcaption>
    <strong>Figura 2.16.</strong> Esquema de montaje de la práctica mostrando las conexiones Ethernet entre ordenadores, switches y routers, así como el acceso por consola para consultar Cisco IOS.
  </figcaption>
</figure>

Realiza las siguientes conexiones:

- PC0 → Switch0
- PC1 → Switch1
- Router0 → Switch0
- Router1 → Switch1

No conectes todavía ambos routers entre sí.

Comprueba que todos los cables quedan firmemente insertados y que los LEDs de enlace comienzan a iluminarse.

Si algún LED permanece apagado, revisa la conexión antes de continuar.

---

### Acceso por consola

Conecta un cable de consola entre:

- PC0 y Router0.
- PC1 y Switch1.

Abre el programa de terminal correspondiente.

Cuando aparezca el símbolo del sistema pulsa la tecla **Intro**.

Debería mostrarse el indicador del sistema Cisco IOS.

Si no aparece ningún mensaje:

- Comprueba el cable de consola.
- Revisa el puerto utilizado.
- Verifica que el equipo está encendido.

---

### Primeros comandos IOS

Introduce los siguientes comandos uno a uno.

```
enable
```

Accede al modo privilegiado.

---

```
show version
```

Observa la información mostrada.

Identifica:

- Modelo del equipo.
- Versión de IOS.
- Memoria instalada.
- Tiempo de funcionamiento.

---

```
show running-config
```

Visualiza la configuración actualmente cargada en memoria.

No es necesario comprender todavía todo su contenido.

Simplemente observa cómo IOS almacena la configuración del dispositivo.

---

```
show ip interface brief
```

Examina las interfaces disponibles.

Anota:

- Nombre de cada interfaz.
- Estado.
- Dirección IP (si existe).

---

```
show inventory
```

Si el equipo admite este comando, observa el inventario del hardware instalado.

---

### Actividades

Responde en tu cuaderno:

1. ¿Qué diferencias físicas observas entre un router y un switch?

2. ¿Cuál de los dos equipos dispone de un mayor número de puertos Ethernet?

3. ¿Qué información proporciona el comando `show version`?

4. ¿Qué significa que una interfaz aparezca en estado **up**?

5. ¿Para qué sirve el puerto de consola?

6. ¿Qué ventajas ofrece acceder por consola frente a utilizar una interfaz web?

---

### Buenas prácticas durante el laboratorio

Durante todas las prácticas del módulo deberás seguir estas recomendaciones:

- Manipula los equipos con cuidado.
- Nunca desconectes un cable tirando de él.
- Mantén ordenado el cableado.
- No apagues ningún equipo sin autorización.
- Comprueba siempre los LEDs antes de pensar que existe una avería.
- Anota cualquier incidencia observada.

El orden y la documentación son tan importantes como la propia configuración de la red.

---

### ¿Qué hemos aprendido?

Después de esta práctica ya eres capaz de:

- Reconocer el hardware Cisco utilizado durante el curso.
- Identificar los principales puertos de routers y switches.
- Acceder al sistema operativo Cisco IOS.
- Ejecutar comandos básicos de consulta.
- Obtener información sobre el estado del dispositivo.

En los próximos capítulos comenzarás a modificar la configuración de estos equipos y construirás redes reales cada vez más complejas.

## Conceptos clave

Al finalizar este capítulo debes ser capaz de comprender y explicar los siguientes conceptos:

| Concepto | Descripción |
|-----------|-------------|
| **Estándar** | Conjunto de especificaciones técnicas que garantizan la compatibilidad entre dispositivos de diferentes fabricantes. |
| **Protocolo** | Conjunto de reglas que define cómo se comunican los dispositivos de una red. |
| **Suite de protocolos** | Grupo de protocolos que colaboran entre sí para proporcionar un servicio completo de comunicación. |
| **IEEE** | Organismo responsable de numerosos estándares de redes, entre ellos Ethernet (IEEE 802.3) y Wi-Fi (IEEE 802.11). |
| **ISO** | Organización internacional que desarrolló el modelo de referencia OSI. |
| **IETF** | Organismo encargado del desarrollo de la mayoría de protocolos utilizados en Internet. |
| **TIA** | Asociación que publica normas relacionadas con el cableado estructurado y los conectores de red. |
| **ANSI** | Organismo que coordina y valida estándares nacionales e internacionales. |
| **TCP/IP** | Familia de protocolos utilizada actualmente por Internet y por la mayoría de las redes informáticas. |
| **IP** | Protocolo encargado del direccionamiento y transporte de paquetes entre dispositivos. |
| **TCP** | Protocolo que garantiza la entrega fiable y ordenada de la información. |
| **UDP** | Protocolo orientado a la velocidad, utilizado cuando la rapidez es más importante que la fiabilidad. |
| **DNS** | Servicio que traduce nombres de dominio en direcciones IP. |
| **DHCP** | Protocolo que asigna automáticamente la configuración de red a los dispositivos. |
| **HTTP / HTTPS** | Protocolos utilizados para acceder a páginas web, siendo HTTPS la versión segura mediante cifrado. |

!!! tip "Recuerda"

    Comprender estos conceptos resulta fundamental para interpretar el funcionamiento de cualquier red informática.

---

## Resumen del capítulo

En este capítulo hemos descubierto que las redes informáticas no funcionan únicamente gracias al cableado o a los dispositivos que las forman.

La verdadera comunicación es posible porque todos los equipos utilizan **estándares internacionales** y **protocolos comunes**.

En primer lugar hemos comprendido la importancia de los estándares y cómo permiten que dispositivos desarrollados por fabricantes diferentes puedan comunicarse sin problemas de compatibilidad.

A continuación hemos conocido los principales organismos de normalización, entre ellos el **IEEE**, la **ISO**, la **IETF**, la **TIA** y el **ANSI**, responsables del desarrollo de numerosas especificaciones utilizadas actualmente en las redes.

Posteriormente hemos estudiado el concepto de **protocolo de comunicación**, entendiendo que se trata del conjunto de reglas que siguen los dispositivos para intercambiar información correctamente.

También hemos visto que un único protocolo no es suficiente para realizar una comunicación completa y que, por ello, los protocolos trabajan conjuntamente formando una **suite de protocolos**.

La familia **TCP/IP** constituye actualmente la base de Internet y agrupa numerosos protocolos especializados que colaboran entre sí para proporcionar servicios de comunicación fiables y eficientes.

Finalmente hemos conocido algunos de los protocolos más utilizados, como **IP**, **TCP**, **UDP**, **DNS**, **DHCP**, **HTTP** y **HTTPS**, comprendiendo cuál es la función que desempeña cada uno de ellos.

Las prácticas realizadas con **Cisco Packet Tracer** y con **equipos Cisco reales** han permitido comprobar que todos estos protocolos trabajan simultáneamente durante cualquier comunicación de red, aunque el usuario normalmente no sea consciente de ello.

Con los conocimientos adquiridos en este capítulo ya dispones de la base necesaria para comprender el funcionamiento interno de las comunicaciones.

En el próximo capítulo estudiaremos cómo se organiza toda esta comunicación mediante los **modelos de referencia OSI y TCP/IP**, analizando el papel que desempeña cada una de sus capas.

## Cuestionario de autoevaluación

Responde a las siguientes preguntas sin consultar el contenido del capítulo. Si tienes dudas en alguna respuesta, vuelve a revisar el apartado correspondiente antes de continuar.

### Preguntas tipo test

**1. ¿Cuál es la principal finalidad de un estándar de red?**

a) Aumentar la velocidad de Internet.  
b) Garantizar la compatibilidad entre dispositivos de distintos fabricantes.  
c) Reducir el consumo eléctrico de los equipos.  
d) Sustituir a los protocolos de comunicación.

---

**2. ¿Qué organismo desarrolla los estándares Ethernet y Wi-Fi?**

a) ISO  
b) ANSI  
c) IEEE  
d) IETF

---

**3. ¿Qué organización desarrolla la mayoría de los protocolos utilizados en Internet?**

a) TIA  
b) IEEE  
c) IETF  
d) Cisco

---

**4. ¿Qué protocolo traduce un nombre de dominio en una dirección IP?**

a) TCP  
b) HTTP  
c) DHCP  
d) DNS

---

**5. ¿Qué protocolo asigna automáticamente una dirección IP a un equipo?**

a) UDP  
b) DHCP  
c) DNS  
d) FTP

---

**6. ¿Cuál de los siguientes protocolos garantiza que los datos lleguen completos y en el orden correcto?**

a) UDP  
b) TCP  
c) IP  
d) HTTP

---

**7. ¿Qué protocolo se utiliza normalmente para acceder de forma segura a una página web?**

a) HTTP  
b) HTTPS  
c) FTP  
d) DNS

---

### Preguntas de respuesta corta

**8. Explica con tus propias palabras qué es un protocolo de comunicación.**

---

**9. ¿Por qué un único protocolo no puede realizar por sí solo todas las funciones necesarias durante una comunicación?**

---

**10. ¿Qué es una suite de protocolos?**

---

**11. Indica dos diferencias entre TCP y UDP.**

---

**12. ¿Cuál es la función principal del protocolo IP?**

---

**13. ¿Qué ventajas ofrecen los estándares internacionales a fabricantes y usuarios?**

---

### Relaciona cada protocolo con su función

| Protocolo | Función |
|-----------|----------|
| IP | ☐ Traducción de nombres |
| TCP | ☐ Asignación automática de IP |
| DNS | ☐ Transporte fiable |
| DHCP | ☐ Direccionamiento |
| HTTPS | ☐ Comunicación web segura |

---

### Actividad de reflexión

Un alumno afirma:

> "Si todos los fabricantes crean productos diferentes, cada uno debería utilizar también sus propios protocolos."

¿Estás de acuerdo con esa afirmación?

Justifica tu respuesta utilizando los conceptos estudiados en este capítulo.

---

### Autoevaluación

Valora tu grado de aprendizaje marcando una opción en cada apartado.

| Aspecto | 😊 | 😐 | ☹ |
|---------|:--:|:--:|:--:|
| Comprendo qué es un estándar. | ☐ | ☐ | ☐ |
| Sé explicar qué es un protocolo. | ☐ | ☐ | ☐ |
| Conozco los principales organismos de normalización. | ☐ | ☐ | ☐ |
| Comprendo qué es TCP/IP. | ☐ | ☐ | ☐ |
| Identifico la función de los principales protocolos. | ☐ | ☐ | ☐ |
| Soy capaz de seguir una comunicación en Packet Tracer. | ☐ | ☐ | ☐ |

## Reto final

### Una red para una pequeña empresa

Una empresa acaba de inaugurar una nueva oficina con dos puestos de trabajo y necesita disponer de una red local que permita compartir información y acceder a Internet.

El departamento técnico dispone del siguiente material:

- 2 routers Cisco serie 1800.
- 2 switches Cisco Catalyst 2900.
- 2 ordenadores.
- Cables Ethernet.
- Cables de consola.

Antes de comenzar la configuración, el responsable del proyecto desea comprobar que el equipo técnico comprende los conceptos básicos estudiados en este capítulo.

Responde a las siguientes cuestiones.

### Parte 1. Analiza la situación

1. ¿Por qué es importante que todos los equipos respeten los mismos estándares de comunicación?

2. ¿Qué organismo es responsable de los estándares Ethernet utilizados por los switches Cisco?

3. ¿Qué protocolo permitirá traducir una dirección como:

```
www.monlau.com
```

en la dirección IP correspondiente?

4. ¿Qué protocolo asignará automáticamente una dirección IP a los ordenadores?

5. ¿Qué protocolo garantizará que un documento importante llegue correctamente al servidor?

---

### Parte 2. Packet Tracer

Construye en Cisco Packet Tracer una red formada por:

- Un switch.
- Dos ordenadores.
- Un servidor.

Utiliza el modo **Simulation** para observar la comunicación entre los dispositivos.

Responde:

- ¿Qué protocolos aparecen durante la simulación?
- ¿Todos los paquetes tienen la misma función?

---

### Parte 3. Laboratorio

Con los equipos reales del aula:

- Identifica todos los puertos del router Cisco 1800.
- Identifica todos los puertos del switch Cisco Catalyst 2900.
- Accede por consola a uno de los dispositivos.
- Ejecuta el comando:

```
show version
```

Anota:

- Modelo del equipo.
- Versión de Cisco IOS.
- Tiempo de funcionamiento.

---

### Ampliación

Investiga qué otros protocolos pertenecen a la familia TCP/IP además de los estudiados en este capítulo.

Elabora una tabla indicando:

- Nombre del protocolo.
- Función principal.
- Situación en la que se utiliza.

No es necesario comprender todavía su funcionamiento; basta con identificar su utilidad.

---

### Objetivo del reto

Si eres capaz de completar correctamente todas las actividades de este reto, significará que dominas los conceptos fundamentales relacionados con los estándares y los protocolos de comunicación, y estarás preparado para comenzar el estudio de los modelos de referencia OSI y TCP/IP en el siguiente capítulo.