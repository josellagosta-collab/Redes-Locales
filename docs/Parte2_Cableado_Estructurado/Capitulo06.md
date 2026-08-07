# Capítulo 6. Medios de transmisión

## Introducción

Hasta ahora hemos aprendido cómo se organiza una instalación de cableado estructurado y cuáles son los subsistemas que la componen.

Sin embargo, todavía queda una pregunta fundamental:

**¿Qué tipo de cable o medio de transmisión debemos utilizar para conectar los distintos dispositivos de la red?**

La respuesta dependerá de numerosos factores, como la distancia entre los equipos, la velocidad de transmisión requerida, el presupuesto disponible, las interferencias electromagnéticas del entorno o la necesidad de conectar diferentes edificios.

No existe un medio de transmisión válido para todas las situaciones.

Por este motivo, un técnico de redes debe conocer las características, ventajas y limitaciones de cada uno de ellos antes de diseñar una instalación.

En este capítulo estudiaremos los principales medios de transmisión utilizados en las redes locales actuales, prestando especial atención al cable de par trenzado y a la fibra óptica, que constituyen la base de la mayoría de las infraestructuras profesionales.

---

## Objetivos de aprendizaje

Al finalizar este capítulo serás capaz de:

- Explicar qué es un medio de transmisión y cuál es su función en una red.
- Diferenciar entre medios guiados y no guiados.
- Identificar los principales tipos de cable utilizados en redes locales.
- Seleccionar el medio de transmisión más adecuado según las características de una instalación.
- Comprender las ventajas e inconvenientes del cable de cobre y de la fibra óptica.

---

## 6.1 ¿Qué es un medio de transmisión?

Cuando un ordenador envía información a otro dispositivo de la red, los datos deben desplazarse desde el equipo emisor hasta el receptor.

El elemento encargado de transportar esa información recibe el nombre de **medio de transmisión**.

Un medio de transmisión es el soporte físico o inalámbrico por el que viajan las señales que contienen los datos.

Dependiendo del tipo de medio utilizado, la información puede transmitirse mediante señales eléctricas, pulsos de luz u ondas electromagnéticas.

La elección del medio de transmisión influye directamente en aspectos como:

- La velocidad de comunicación.
- La distancia máxima entre dispositivos.
- La resistencia frente a interferencias.
- El coste de la instalación.
- La facilidad de mantenimiento.

Por este motivo, seleccionar correctamente el medio de transmisión constituye una de las decisiones más importantes durante el diseño de una red.

---

### Los datos necesitan un camino

Podemos imaginar una red informática como una red de carreteras.

Los vehículos representan la información y las carreteras constituyen el medio que permite desplazarse de un lugar a otro.

Del mismo modo que no todas las carreteras son iguales, tampoco todos los medios de transmisión ofrecen las mismas prestaciones.

Algunos permiten recorrer largas distancias a gran velocidad.

Otros resultan más económicos, pero soportan menores velocidades o son más sensibles a las interferencias.

La elección dependerá siempre de las necesidades de la instalación.

---

### Un mismo edificio puede utilizar varios medios

En una instalación profesional es habitual encontrar diferentes medios de transmisión trabajando conjuntamente.

Por ejemplo:

- El cableado horizontal suele realizarse con cable de par trenzado.
- El backbone entre plantas puede utilizar fibra óptica.
- La conexión entre el portátil y el punto de acceso puede realizarse mediante Wi-Fi.

Todos ellos forman parte de la misma infraestructura de comunicaciones y cada uno desempeña la función para la que resulta más adecuado.

<figure class="figura-libro">
  <img
    src="../../assets/images/parte2/capitulo6/figura6_1.png"
    alt="Principales medios de transmisión utilizados en una red local"
  >
  <figcaption>
    <strong>Figura 6.1.</strong> Principales medios de transmisión utilizados en una red local. El cable de par trenzado transporta señales eléctricas y se emplea habitualmente en el cableado horizontal; la fibra óptica transmite pulsos de luz y se utiliza en enlaces de alta velocidad y largas distancias; el Wi-Fi utiliza ondas de radio para proporcionar conectividad inalámbrica a dispositivos móviles.
  </figcaption>
</figure>

---

!!! note "Recuerda"

    Un medio de transmisión es el soporte por el que viajan las señales que transportan la información entre los dispositivos de una red.

!!! tip "¿Sabías que...?"

    Una misma red puede utilizar simultáneamente cable de cobre, fibra óptica y comunicaciones inalámbricas, aprovechando las ventajas de cada medio.

!!! abstract "🛠️ En el taller..."

    Durante las prácticas aprenderás a identificar los distintos medios de transmisión utilizados en una instalación real y a seleccionar el más adecuado para cada situación.

!!! question "Piensa un momento..."

    ¿Crees que sería razonable utilizar el mismo tipo de cable para conectar dos ordenadores situados en la misma aula y para comunicar dos edificios separados por varios cientos de metros? ¿Por qué?
## 6.2 Medios guiados y medios no guiados

Los medios de transmisión pueden clasificarse en dos grandes grupos según la forma en que las señales se propagan desde el emisor hasta el receptor:

- **Medios guiados.**
- **Medios no guiados.**

La principal diferencia entre ambos es la existencia o no de un soporte físico que conduzca la señal.

Comprender esta clasificación resulta fundamental para seleccionar el medio más adecuado en función de las necesidades de cada instalación.

---

### Medios guiados

En los **medios guiados**, la señal viaja a través de un soporte físico que dirige su recorrido.

Este soporte puede estar formado por conductores metálicos o por fibras ópticas.

Al existir un camino perfectamente definido, la transmisión suele ser más estable y menos sensible a interferencias externas.

Los medios guiados son los más utilizados en el cableado estructurado de edificios, centros educativos, oficinas e instalaciones industriales.

Los principales medios guiados son:

- Cable de par trenzado.
- Cable coaxial.
- Fibra óptica.

En los próximos apartados estudiaremos con detalle cada uno de ellos.

---

### Medios no guiados

En los **medios no guiados**, también llamados **medios inalámbricos**, la señal se propaga por el aire o por el espacio sin necesidad de un cable físico.

La comunicación se realiza mediante ondas electromagnéticas.

Este tipo de medios proporciona una gran flexibilidad y permite conectar dispositivos móviles sin necesidad de realizar instalaciones de cableado.

Entre los sistemas inalámbricos más habituales encontramos:

- Redes Wi-Fi.
- Bluetooth.
- Radioenlaces.
- Redes móviles 4G y 5G.
- Comunicaciones por satélite.

Aunque ofrecen una gran movilidad, también presentan algunas limitaciones, como una mayor sensibilidad a interferencias y un rendimiento que puede variar según las condiciones del entorno.

<figure class="figura-libro">
  <img
    src="../../assets/images/parte2/capitulo6/figura6_2.png"
    alt="Clasificación de los medios de transmisión"
  >
  <figcaption>
    <strong>Figura 6.2.</strong> Clasificación de los medios de transmisión en guiados y no guiados. Los medios guiados utilizan un soporte físico para conducir la señal, mientras que los medios no guiados transmiten la información mediante ondas electromagnéticas a través del aire o del espacio.
  </figcaption>
</figure>

---

### Comparación entre ambos tipos

Cada tipo de medio presenta ventajas e inconvenientes.

Los medios guiados destacan por:

- Mayor estabilidad.
- Velocidades elevadas.
- Menor influencia de las interferencias.
- Mayor seguridad física.

Por su parte, los medios no guiados ofrecen:

- Movilidad.
- Facilidad de instalación.
- Flexibilidad para conectar dispositivos portátiles.
- Ausencia de cableado físico.

En muchas instalaciones modernas ambos tipos de medios trabajan conjuntamente para aprovechar las ventajas de cada uno.

<figure class="figura-libro">
  <img
    src="../../assets/images/parte2/capitulo6/figura6_3.png"
    alt="Comparación entre un medio guiado y un medio no guiado"
  >
  <figcaption>
    <strong>Figura 6.3.</strong> Comparación entre un medio guiado y un medio no guiado. Los medios guiados proporcionan una transmisión más estable a través de un soporte físico, mientras que los medios inalámbricos ofrecen mayor movilidad y flexibilidad al transmitir las señales por el aire.
  </figcaption>
</figure>

---

### ¿Cuál es mejor?

No existe un medio de transmisión universalmente mejor que otro.

La elección dependerá de factores como:

- La distancia entre los equipos.
- La velocidad necesaria.
- El presupuesto disponible.
- La movilidad requerida.
- Las condiciones del entorno.
- La existencia de interferencias electromagnéticas.

Por ejemplo:

- Un ordenador de sobremesa suele conectarse mediante cable de par trenzado.
- Un teléfono móvil utiliza normalmente una conexión Wi-Fi.
- La comunicación entre edificios suele realizarse mediante fibra óptica.

Como puede observarse, cada medio resulta más adecuado para unas aplicaciones determinadas.

---

!!! note "Recuerda"

    Los medios guiados utilizan un soporte físico para conducir la señal, mientras que los medios no guiados transmiten la información mediante ondas electromagnéticas.

!!! tip "¿Sabías que...?"

    La mayoría de las redes actuales combinan medios guiados e inalámbricos para aprovechar las ventajas de ambos sistemas.

!!! abstract "🛠️ En el taller..."

    Durante las prácticas identificarás qué medios de transmisión utiliza cada parte de una instalación y justificarás por qué se ha elegido esa solución.

!!! question "Piensa un momento..."

    En una biblioteca universitaria, ¿utilizarías únicamente conexiones Wi-Fi para todos los ordenadores o combinarías conexiones cableadas e inalámbricas? Razona tu respuesta.

## 6.3 Cable de par trenzado

El **cable de par trenzado** es el medio de transmisión más utilizado en las redes locales actuales.

Se emplea en viviendas, oficinas, centros educativos, hospitales, industrias y, en general, en cualquier instalación de cableado estructurado.

Su popularidad se debe a que ofrece un excelente equilibrio entre coste, facilidad de instalación, velocidad de transmisión y fiabilidad.

Actualmente, prácticamente todo el **cableado horizontal** de una red local se realiza mediante este tipo de cable.

---

### ¿Por qué se denomina "par trenzado"?

Si observamos el interior de un cable Ethernet, veremos que está formado por **ocho conductores de cobre**, agrupados en **cuatro pares**.

Cada pareja de conductores se encuentra trenzada sobre sí misma.

Este trenzado no tiene únicamente una finalidad mecánica.

Su función principal consiste en reducir las interferencias electromagnéticas que pueden afectar a la transmisión de los datos.

Al trenzar los conductores, los campos electromagnéticos generados por cada hilo tienden a compensarse, mejorando la calidad de la comunicación.

Gracias a este diseño es posible transmitir datos a velocidades muy elevadas utilizando un cable relativamente económico.

---

### Estructura interna

Un cable de par trenzado está formado por los siguientes elementos:

- Cubierta exterior de protección.
- Cuatro pares de conductores de cobre.
- Aislamiento individual para cada conductor.
- Elementos de separación o refuerzo (según la categoría del cable).

Cada par está identificado mediante un código de colores normalizado que facilita la instalación y el conexionado.

Los cuatro pares utilizados habitualmente son:

| Par | Colores |
|------|----------|
| 1 | Blanco/Naranja – Naranja |
| 2 | Blanco/Verde – Verde |
| 3 | Blanco/Azul – Azul |
| 4 | Blanco/Marrón – Marrón |

Este código de colores resulta imprescindible para crimpar correctamente un conector RJ-45, operación que estudiaremos en el capítulo siguiente.

<figure class="figura-libro">
  <img
    src="../../assets/images/parte2/capitulo6/figura6_4.png"
    alt="Estructura interna de un cable de par trenzado"
  >
  <figcaption>
    <strong>Figura 6.4.</strong> Estructura interna de un cable de par trenzado. Se observan la cubierta exterior, los cuatro pares de conductores de cobre trenzados, el aislamiento individual de cada hilo y, en algunos cables de categorías superiores, el separador interno que mejora el comportamiento frente a interferencias.
  </figcaption>
</figure>

---

### Ventajas del cable de par trenzado

El cable de par trenzado presenta numerosas ventajas que explican su enorme difusión.

Entre las más importantes destacan:

- Precio reducido.
- Fácil instalación.
- Gran disponibilidad comercial.
- Elevadas velocidades de transmisión.
- Flexibilidad.
- Facilidad para sustituir o ampliar instalaciones.
- Compatibilidad con la mayoría de los equipos de red.

Estas características lo convierten en la opción preferida para conectar ordenadores, impresoras, teléfonos IP, cámaras de videovigilancia y puntos de acceso Wi-Fi.

---

### Limitaciones

A pesar de sus ventajas, el cable de par trenzado también presenta algunas limitaciones.

Las más importantes son:

- La distancia máxima recomendada es de **100 metros** para un enlace Ethernet.
- Puede verse afectado por interferencias electromagnéticas si no dispone del apantallamiento adecuado.
- Su capacidad para largas distancias es inferior a la de la fibra óptica.

Por este motivo, cuando es necesario conectar edificios diferentes o recorrer grandes distancias, suele utilizarse fibra óptica en lugar de cable de cobre.

---

### Aplicaciones más habituales

El cable de par trenzado se utiliza principalmente en:

- Cableado horizontal.
- Conexión de ordenadores.
- Conexión de impresoras de red.
- Teléfonos IP.
- Cámaras IP.
- Puntos de acceso Wi-Fi.
- Equipos de automatización y control industrial compatibles con Ethernet.

Su versatilidad hace que sea el medio predominante en las redes LAN actuales.

<figure class="figura-libro">
  <img
    src="../../assets/images/parte2/capitulo6/figura6_5.png"
    alt="Ventajas e inconvenientes del cable de par trenzado"
  >
  <figcaption>
    <strong>Figura 6.5.</strong> Principales ventajas, limitaciones y aplicaciones del cable de par trenzado. Su bajo coste, facilidad de instalación y compatibilidad con Ethernet lo convierten en el medio más utilizado en redes locales, aunque presenta limitaciones de distancia y puede verse afectado por interferencias electromagnéticas según su tipo de construcción.
  </figcaption>
</figure>

---

!!! note "Recuerda"

    El cable de par trenzado constituye el medio de transmisión más utilizado en las redes locales gracias a su bajo coste, facilidad de instalación y elevado rendimiento.

!!! tip "¿Sabías que...?"

    Aunque exteriormente todos los cables Ethernet pueden parecer iguales, existen diferentes categorías y tipos de apantallamiento que determinan sus prestaciones. Estos aspectos se estudiarán en los próximos apartados.

!!! abstract "🛠️ En el taller..."

    Muy pronto aprenderás a pelar un cable de red, identificar sus ocho conductores y crimpar correctamente un conector RJ-45 siguiendo las normas T568A y T568B.

!!! question "Piensa un momento..."

    Si una empresa necesita conectar dos ordenadores separados por 150 metros, ¿seguirías utilizando cable de par trenzado o elegirías otro medio de transmisión? Razona tu respuesta.

## 6.4 Categorías del cable de par trenzado

Aunque externamente muchos cables Ethernet parecen iguales, no todos ofrecen las mismas prestaciones.

Con el paso de los años han aparecido nuevas aplicaciones que requieren transmitir mayores cantidades de información y alcanzar velocidades cada vez más elevadas.

Para dar respuesta a estas necesidades se han desarrollado diferentes **categorías de cable**, cada una con unas características técnicas específicas.

Estas categorías definen aspectos como:

- El ancho de banda.
- La velocidad máxima de transmisión.
- La calidad de fabricación.
- El comportamiento frente a interferencias.
- Las aplicaciones para las que resulta adecuada.

Elegir la categoría correcta es fundamental para garantizar el buen funcionamiento de una instalación de red.

---

### ¿Por qué existen distintas categorías?

Las primeras redes Ethernet funcionaban a velocidades relativamente bajas.

Con el tiempo aparecieron aplicaciones como:

- Vídeo en alta definición.
- Telefonía IP.
- Virtualización.
- Copias de seguridad de gran tamaño.
- Centros de datos.
- Redes de 10 Gigabit Ethernet y superiores.

Estas nuevas necesidades hicieron imprescindible mejorar las prestaciones del cableado.

Por este motivo surgieron nuevas categorías capaces de soportar mayores frecuencias y velocidades de transmisión.

<figure class="figura-libro">
  <img
    src="../../assets/images/parte2/capitulo6/figura6_6.png"
    alt="Evolución de las categorías del cable Ethernet"
  >
  <figcaption>
    <strong>Figura 6.6.</strong> Evolución de las principales categorías de cable de par trenzado. El aumento progresivo del ancho de banda y de la velocidad soportada permite adaptar el cableado a las nuevas necesidades de las redes locales.
  </figcaption>
</figure>

---

### Categorías más utilizadas

En las redes locales actuales las categorías más habituales son las siguientes:

| Categoría | Ancho de banda | Velocidad habitual | Uso recomendado |
|------------|----------------|--------------------|-----------------|
| **Cat 5e** | 100 MHz | Hasta 1 Gbit/s | Instalaciones existentes y pequeñas redes. |
| **Cat 6** | 250 MHz | Hasta 1 Gbit/s (10 Gbit/s en distancias reducidas) | Oficinas, centros educativos y empresas. |
| **Cat 6A** | 500 MHz | Hasta 10 Gbit/s | Instalaciones profesionales y nuevas infraestructuras. |
| **Cat 7** | 600 MHz | Hasta 10 Gbit/s | Entornos con elevadas exigencias de apantallamiento. |
| **Cat 8** | 2.000 MHz | Hasta 25/40 Gbit/s (distancias reducidas) | Centros de datos y aplicaciones de muy alta velocidad. |

Aunque todas estas categorías utilizan conectores similares, sus prestaciones y su construcción interna son diferentes.

<figure class="figura-libro">
  <img
    src="../../assets/images/parte2/capitulo6/figura6_7.png"
    alt="Comparación entre las categorías de cable Ethernet"
  >
  <figcaption>
    <strong>Figura 6.7.</strong> Comparación de las principales categorías de cable de par trenzado según su ancho de banda, velocidad máxima, distancia de utilización, apantallamiento habitual y aplicaciones recomendadas.
  </figcaption>
</figure>

---

### ¿Qué categoría elegir?

No siempre resulta conveniente instalar el cable de categoría más alta.

La elección debe basarse en las necesidades reales de la instalación.

Por ejemplo:

- En una pequeña oficina, un cable **Cat 6** suele ser suficiente.
- En una empresa que despliega una infraestructura nueva con previsión de crecimiento, **Cat 6A** representa una excelente inversión.
- En un centro de datos donde se requieren velocidades muy elevadas y enlaces cortos, puede ser necesario utilizar **Cat 8**.

Seleccionar una categoría superior sin una necesidad justificada puede incrementar el coste de la instalación sin aportar ventajas reales.

---

### Compatibilidad entre categorías

Una característica importante del cableado estructurado es que las diferentes categorías mantienen un alto grado de compatibilidad.

Por ejemplo:

- Un ordenador con una tarjeta Gigabit Ethernet funcionará correctamente conectado mediante un cable Cat 6A.
- Un switch compatible con 1 Gbit/s también podrá utilizar cable Cat 6A o Cat 7.

Sin embargo, la velocidad final de la comunicación siempre estará limitada por el elemento con menores prestaciones.

En otras palabras:

> **Una red solo será tan rápida como su componente más lento.**

---

### Pensando en el futuro

Cuando se diseña una nueva instalación conviene valorar no solo las necesidades actuales, sino también las futuras.

El coste del cable suele representar una pequeña parte del coste total de una instalación.

En cambio, sustituir todo el cableado unos años después puede resultar muy costoso.

Por este motivo, muchas organizaciones optan por instalar categorías superiores que permitan soportar futuras ampliaciones sin necesidad de modificar la infraestructura.

---

!!! note "Recuerda"

    La categoría del cable determina las prestaciones máximas que puede ofrecer la instalación, pero la velocidad final dependerá también de los equipos de red conectados.

!!! tip "¿Sabías que...?"

    En la actualidad, **Cat 6A** se considera una de las opciones más equilibradas para nuevas instalaciones de cableado estructurado, ya que permite trabajar con enlaces de 10 Gbit/s y ofrece un buen margen de crecimiento.

!!! abstract "🛠️ En el taller..."

    En las próximas prácticas aprenderás a identificar la categoría de un cable mediante su marcado exterior y a seleccionar la más adecuada para diferentes escenarios.

!!! question "Piensa un momento..."

    Si una empresa instala hoy una nueva red y espera utilizarla durante los próximos quince años, ¿crees que merece la pena invertir en una categoría superior a la estrictamente necesaria? Justifica tu respuesta.

## 6.5 Fibra óptica

La **fibra óptica** es un medio de transmisión guiado que transporta la información mediante **pulsos de luz** en lugar de señales eléctricas.

Gracias a esta característica es capaz de alcanzar velocidades muy elevadas y transmitir datos a grandes distancias con una pérdida mínima de señal.

Por este motivo, la fibra óptica se ha convertido en el medio de transmisión habitual para el **backbone** de edificios, la conexión entre centros de datos y las redes de los operadores de telecomunicaciones.

En la actualidad también comienza a utilizarse en instalaciones domésticas y empresariales donde se requieren altas prestaciones.

---

### ¿Cómo funciona la fibra óptica?

A diferencia del cable de cobre, donde la información viaja mediante corriente eléctrica, en una fibra óptica los datos se transmiten mediante pequeños pulsos de luz.

Estos pulsos son generados por un emisor óptico y recorren el interior de una fibra de vidrio o plástico de gran pureza.

Aunque la fibra es extremadamente fina, la luz permanece confinada en su interior gracias a las propiedades ópticas del material, permitiendo recorrer grandes distancias con muy poca atenuación.

Este sistema hace posible transmitir enormes cantidades de información a velocidades muy superiores a las alcanzadas por los cables de cobre.

---

### Estructura de una fibra óptica

Una fibra óptica está formada por varias capas, cada una con una función específica:

- **Núcleo (core):** zona central por la que se propagan los pulsos de luz.
- **Revestimiento (cladding):** mantiene la luz confinada dentro del núcleo.
- **Recubrimiento protector:** protege la fibra frente a pequeños esfuerzos mecánicos.
- **Cubierta exterior:** proporciona protección frente a golpes, humedad y agentes externos.

A pesar de su reducido diámetro, una fibra óptica correctamente instalada puede ofrecer una gran resistencia y una vida útil muy prolongada.

<figure class="figura-libro">
  <img
    src="../../assets/images/parte2/capitulo6/figura6_8.png"
    alt="Estructura de una fibra óptica"
  >
  <figcaption>
    <strong>Figura 6.8.</strong> Estructura de un cable de fibra óptica. Se distinguen la cubierta exterior, el recubrimiento protector, el revestimiento (*cladding*) y el núcleo (*core*), por el que se propagan los pulsos de luz que transportan la información.
  </figcaption>
</figure>

---

### Ventajas de la fibra óptica

La fibra óptica ofrece numerosas ventajas frente al cable de cobre:

- Muy elevada velocidad de transmisión.
- Gran ancho de banda.
- Posibilidad de cubrir largas distancias.
- Inmunidad a las interferencias electromagnéticas.
- Mayor seguridad frente a escuchas mediante inducción eléctrica.
- Menor atenuación de la señal.

Estas características la convierten en la opción preferida para redes troncales, centros de datos e infraestructuras de altas prestaciones.

---

### Limitaciones

Aunque presenta importantes ventajas, la fibra óptica también tiene algunos inconvenientes:

- Coste superior al del cable de cobre.
- Instalación más delicada.
- Necesidad de conectores y herramientas específicas.
- Mayor dificultad para realizar reparaciones en campo.

Sin embargo, la reducción progresiva de los costes ha favorecido su implantación en un número creciente de instalaciones.

---

### Aplicaciones más habituales

La fibra óptica se utiliza principalmente en:

- Backbone de edificios.
- Conexión entre armarios de comunicaciones.
- Redes de operadores de Internet.
- Centros de datos.
- Enlaces entre edificios.
- Redes industriales de altas prestaciones.
- Redes FTTH (Fiber To The Home).

En estas aplicaciones resulta especialmente importante su capacidad para transmitir información a largas distancias sin degradar la calidad de la señal.

<figure class="figura-libro">
  <img
    src="../../assets/images/parte2/capitulo6/figura6_9.png"
    alt="Comparación entre cable de cobre y fibra óptica"
  >
  <figcaption>
    <strong>Figura 6.9.</strong> Comparación entre el cable de par trenzado y la fibra óptica. Mientras el cobre transmite señales eléctricas y se utiliza principalmente en el cableado horizontal, la fibra óptica emplea pulsos de luz, ofrece mayor ancho de banda, soporta largas distancias y es inmune a las interferencias electromagnéticas.
  </figcaption>
</figure>

---

!!! note "Recuerda"

    La fibra óptica transmite los datos mediante pulsos de luz, ofreciendo mayores velocidades, mayores distancias y una inmunidad prácticamente total frente a las interferencias electromagnéticas.

!!! tip "¿Sabías que...?"

    Un único cable de fibra óptica puede transportar simultáneamente enormes cantidades de información, muy superiores a las que puede transmitir un cable de cobre convencional.

!!! abstract "🛠️ En el taller..."

    Aprenderás a reconocer distintos tipos de cables y conectores de fibra óptica, identificando las situaciones en las que resulta más adecuada que el cable de cobre.

!!! question "Piensa un momento..."

    Si tuvieras que conectar dos edificios situados a 500 metros de distancia, ¿elegirías un cable de par trenzado o una fibra óptica? Explica las razones de tu elección.

## 6.6 Tipos de fibra óptica

No todas las fibras ópticas son iguales.

Aunque todas transmiten la información mediante pulsos de luz, existen diferentes tipos de fibra diseñados para cubrir necesidades distintas de distancia, velocidad y coste.

En las redes locales y metropolitanas se utilizan principalmente dos tipos:

- **Fibra multimodo (MMF, Multimode Fiber).**
- **Fibra monomodo (SMF, Singlemode Fiber).**

La principal diferencia entre ambas radica en el diámetro del núcleo y en la forma en que se propaga la luz.

---

### Fibra multimodo

La fibra **multimodo** posee un núcleo de mayor diámetro que la fibra monomodo.

Gracias a ello, varios rayos de luz pueden propagarse simultáneamente por su interior siguiendo trayectorias diferentes.

Esta característica facilita el acoplamiento de la luz emitida por el transmisor y reduce el coste de los equipos ópticos.

Sin embargo, al recorrer trayectorias distintas, los pulsos de luz llegan al receptor con pequeñas diferencias de tiempo, lo que limita la distancia máxima de transmisión.

Por este motivo, la fibra multimodo se utiliza principalmente en:

- Redes locales.
- Centros educativos.
- Oficinas.
- Centros de datos.
- Backbone de edificios.

---

### Fibra monomodo

La fibra **monomodo** posee un núcleo mucho más estrecho.

En su interior únicamente se propaga un único modo de luz, evitando prácticamente la dispersión de la señal.

Gracias a ello puede transmitir información a distancias muy superiores manteniendo una excelente calidad de comunicación.

La fibra monomodo es la opción habitual para:

- Redes de operadores de telecomunicaciones.
- Conexión entre edificios.
- Redes metropolitanas.
- Redes de larga distancia.
- Infraestructuras FTTH (Fiber To The Home).

Los equipos necesarios para trabajar con fibra monomodo suelen ser más costosos, aunque ofrecen mayores prestaciones.

<figure class="figura-libro">
  <img
    src="../../assets/images/parte2/capitulo6/figura6_10.png"
    alt="Diferencias entre fibra multimodo y fibra monomodo"
  >
  <figcaption>
    <strong>Figura 6.10.</strong> Comparación del recorrido de la luz en una fibra multimodo y una fibra monomodo. La fibra multimodo dispone de un núcleo de mayor diámetro por el que se propagan varios modos de luz, mientras que la fibra monomodo utiliza un núcleo mucho más estrecho que permite la propagación de un único modo, reduciendo la dispersión y facilitando las comunicaciones a largas distancias.
  </figcaption>
</figure>

---

### Comparación entre ambos tipos

La siguiente tabla resume las principales diferencias.

| Característica | Fibra multimodo | Fibra monomodo |
|----------------|-----------------|----------------|
| Diámetro del núcleo | Mayor | Menor |
| Número de trayectorias de luz | Varias | Una sola |
| Distancia habitual | Cientos de metros | Kilómetros |
| Coste de los equipos | Menor | Mayor |
| Aplicaciones | LAN, campus y centros de datos | Operadores, FTTH y largas distancias |

Aunque ambas fibras pueden transportar enormes cantidades de información, la elección dependerá principalmente de la distancia y del presupuesto disponible.

<figure class="figura-libro">
  <img
    src="../../assets/images/parte2/capitulo6/figura6_11.png"
    alt="Comparación entre fibra multimodo y fibra monomodo"
  >
  <figcaption>
    <strong>Figura 6.11.</strong> Comparación entre la fibra multimodo y la fibra monomodo. Se muestran sus principales diferencias en diámetro del núcleo, distancia de transmisión, fuente de luz, coste de los equipos y aplicaciones habituales, facilitando la selección del tipo de fibra más adecuado para cada instalación.
  </figcaption>
</figure>

---

### ¿Cuál utilizar?

No existe un tipo de fibra mejor que otro.

Cada una ha sido diseñada para un entorno diferente.

Como regla general:

- Si la comunicación se realiza dentro de un edificio o entre edificios próximos, suele utilizarse **fibra multimodo**.
- Si la distancia es de varios kilómetros, normalmente se emplea **fibra monomodo**.

Por ello, antes de diseñar una instalación es necesario conocer las necesidades reales del proyecto.

---

!!! note "Recuerda"

    La fibra multimodo está pensada para distancias cortas o medias, mientras que la fibra monomodo se utiliza cuando se requieren enlaces de larga distancia.

!!! tip "¿Sabías que...?"

    Muchas universidades, hospitales y grandes empresas utilizan fibra multimodo para conectar edificios de un mismo campus y fibra monomodo para enlazar sedes situadas en diferentes ciudades.

!!! abstract "🛠️ En el taller..."

    Aprenderás a identificar cables multimodo y monomodo mediante el color de su cubierta, las inscripciones del fabricante y el tipo de conectores instalados.

!!! question "Piensa un momento..."

    Una empresa dispone de dos edificios separados por 2 kilómetros. ¿Qué tipo de fibra óptica elegirías? ¿Cambiaría tu elección si ambos edificios estuvieran separados únicamente por 80 metros?

## 6.7 Selección del medio de transmisión

Después de estudiar el cable de par trenzado, la fibra óptica y los medios inalámbricos, podemos comprobar que cada tecnología presenta características diferentes.

Por este motivo, una de las tareas más importantes de un técnico de redes consiste en seleccionar el medio de transmisión más adecuado para cada situación.

La elección no debe basarse únicamente en la velocidad.

También es necesario valorar factores como:

- La distancia del enlace.
- El ancho de banda necesario.
- Las interferencias presentes en el entorno.
- El coste de la instalación.
- La facilidad de mantenimiento.
- La necesidad de movilidad.
- La posibilidad de ampliar la red en el futuro.

En muchas instalaciones profesionales se utilizan varios medios de transmisión simultáneamente, aprovechando las ventajas de cada uno.

---

### Comparación general de los principales medios

La siguiente tabla resume las características más importantes de los medios estudiados.

| Característica | Par trenzado | Fibra óptica | Wi-Fi |
|----------------|--------------|--------------|-------|
| Tipo de señal | Eléctrica | Luz | Ondas de radio |
| Soporte físico | Sí | Sí | No |
| Distancia habitual | Hasta 100 m en Ethernet | Cientos de metros o kilómetros | Decenas de metros |
| Velocidad | Alta | Muy alta | Variable según estándar y entorno |
| Interferencias electromagnéticas | Puede verse afectado | Inmune | Puede verse afectado |
| Instalación | Sencilla | Más especializada | Muy sencilla |
| Movilidad | No | No | Sí |
| Coste | Bajo o medio | Medio o alto | Bajo o medio |
| Uso habitual | Cableado horizontal | Backbone y largas distancias | Dispositivos móviles |

Esta tabla no pretende indicar que un medio sea mejor que otro.

Cada uno responde a unas necesidades diferentes.

---

### Escenario 1. Puestos de trabajo de una oficina

Supongamos que debemos conectar treinta ordenadores distribuidos por una planta de oficinas.

La distancia entre el armario de comunicaciones y cada puesto es inferior a 60 metros.

En este caso, una solución habitual sería utilizar **cable de par trenzado Cat 6 o Cat 6A**.

Las razones principales son:

- Distancia reducida.
- Coste razonable.
- Fácil instalación.
- Excelente compatibilidad con Ethernet.
- Posibilidad de alimentar determinados dispositivos mediante PoE.

La fibra óptica funcionaría perfectamente, pero supondría un coste y una complejidad innecesarios para este escenario.

---

### Escenario 2. Conexión entre dos plantas

Imaginemos ahora que debemos conectar los armarios de comunicaciones de dos plantas de un edificio.

En este caso podría utilizarse cable de cobre si las distancias fueran reducidas.

Sin embargo, en instalaciones profesionales suele ser recomendable utilizar **fibra óptica** para el backbone.

Esto proporciona:

- Mayor capacidad de crecimiento.
- Mayor ancho de banda.
- Inmunidad frente a interferencias electromagnéticas.
- Mayor distancia disponible.

---

### Escenario 3. Conexión entre edificios

Si necesitamos comunicar dos edificios separados por varios cientos de metros, el cable de par trenzado deja de ser una solución adecuada.

La opción más apropiada suele ser la **fibra óptica**.

Dependiendo de la distancia, podrían utilizarse:

- Fibra multimodo para distancias relativamente cortas.
- Fibra monomodo para distancias largas.

Además, al no transportar corriente eléctrica, la fibra evita determinados problemas asociados a diferencias de potencial entre edificios.

---

### Escenario 4. Dispositivos móviles

Un portátil, una tableta o un teléfono móvil necesitan poder desplazarse libremente.

En estos casos la conexión mediante cable resultaría poco práctica.

La solución habitual es utilizar **Wi-Fi**.

El medio inalámbrico proporciona movilidad y flexibilidad, aunque su rendimiento puede variar debido a:

- Obstáculos.
- Distancia al punto de acceso.
- Interferencias.
- Número de usuarios conectados.
- Características del propio dispositivo.

Por este motivo, en una instalación profesional el Wi-Fi suele complementar al cableado, no sustituirlo completamente.

---

### Escenario 5. Entorno industrial

En una fábrica pueden existir motores eléctricos, variadores de frecuencia, maquinaria pesada y otros equipos capaces de generar fuertes interferencias electromagnéticas.

En estas situaciones puede ser recomendable:

- Utilizar cable de cobre correctamente apantallado.
- Separar físicamente los cables de datos de los cables eléctricos.
- Utilizar fibra óptica en los enlaces especialmente sensibles.

La elección dependerá del nivel de interferencias y de las necesidades de la instalación.

---

### Una red puede combinar diferentes medios

En una red empresarial es habitual encontrar una combinación como esta:

```text
Internet
   │
Fibra óptica
   │
Sala de equipos
   │
Backbone de fibra
   │
Switch de planta
   │
Cable Cat 6 / Cat 6A
   │
Puestos de trabajo

              └── Punto de acceso Wi-Fi
                        │
                  Portátiles y móviles
```

Esta combinación aprovecha las ventajas de cada tecnología:

- **Fibra óptica** para los enlaces principales.
- **Cable de par trenzado** para los puestos fijos.
- **Wi-Fi** para proporcionar movilidad.

En lugar de elegir un único medio para toda la instalación, el técnico selecciona el más adecuado para cada tramo.

<figure class="figura-libro">
  <img
    src="../../assets/images/parte2/capitulo6/figura6_12.png"
    alt="Selección del medio de transmisión según el escenario"
  >
  <figcaption>
    <strong>Figura 6.12.</strong> Selección del medio de transmisión según las necesidades de la instalación. La elección depende de factores como la distancia, el ancho de banda requerido, las interferencias, la movilidad, el coste y el crecimiento previsto de la red.
  </figcaption>
</figure>

---

### Una decisión técnica y económica

Elegir correctamente el medio de transmisión implica encontrar un equilibrio entre prestaciones y coste.

Una instalación sobredimensionada puede resultar innecesariamente cara.

Una instalación insuficiente puede quedar obsoleta demasiado pronto.

Por ello, antes de tomar una decisión deben analizarse tanto las necesidades actuales como el crecimiento previsto de la red.

---

!!! note "Recuerda"

    No existe un medio de transmisión perfecto para todas las situaciones.

    La solución más habitual consiste en combinar cobre, fibra óptica y comunicaciones inalámbricas según las necesidades de cada tramo de la red.

!!! tip "¿Sabías que...?"

    En muchas redes empresariales la información puede comenzar su recorrido mediante Wi-Fi, continuar por cable de cobre y atravesar posteriormente varios kilómetros de fibra óptica sin que el usuario sea consciente de los cambios de medio.

!!! abstract "🛠️ En el taller..."

    Cuando diseñes una instalación tendrás que justificar no solo qué cable utilizarás, sino también por qué ese medio es el más adecuado teniendo en cuenta distancia, velocidad, interferencias y coste.

!!! question "Piensa un momento..."

    Debes instalar una red en un edificio de tres plantas con ordenadores fijos, teléfonos IP, puntos de acceso Wi-Fi y un armario de comunicaciones en cada planta. ¿Utilizarías el mismo medio de transmisión para todas las conexiones? Justifica tu respuesta.

## Práctica guiada: Selección del medio de transmisión

### Objetivos

En esta práctica aprenderás a identificar los principales medios de transmisión utilizados en una red local y a seleccionar el más adecuado en función de las características de cada instalación.

Al finalizar la práctica serás capaz de:

- Identificar distintos tipos de cables de red.
- Diferenciar entre cable de par trenzado, fibra óptica y medios inalámbricos.
- Reconocer las principales categorías de cable Ethernet.
- Seleccionar el medio de transmisión más adecuado según la distancia, el entorno y las necesidades de la red.
- Justificar técnicamente la elección realizada.

---

## Material necesario

- Muestras de cables de red (Cat 5e, Cat 6 o Cat 6A, si están disponibles).
- Un latiguillo de fibra óptica (multimodo o monomodo).
- Fotografías o muestras de conectores RJ-45 y de fibra óptica.
- Fichas técnicas de diferentes tipos de cable (facilitadas por el profesor).

---

## Paso 1. Identificar los medios de transmisión

<figure class="figura-libro">
  <img
    src="../../assets/images/parte2/capitulo6/figura6_13.png"
    alt="Identificación de los principales medios de transmisión"
  >
  <figcaption>
    <strong>Figura 6.13.</strong> Identificación de los principales medios de transmisión utilizados en redes locales. Se muestran un cable de par trenzado con conector RJ-45, un latiguillo de fibra óptica con conectores ópticos y un punto de acceso Wi-Fi como ejemplo de comunicación inalámbrica.
  </figcaption>
</figure>

Observa los materiales disponibles e identifica:

- Cable de par trenzado.
- Fibra óptica.
- Dispositivos que utilizan comunicaciones inalámbricas.

Completa una tabla como la siguiente:

| Medio de transmisión | Tipo de señal | Medio guiado / no guiado |
|----------------------|---------------|---------------------------|
| | | |

---

## Paso 2. Identificar un cable de par trenzado

Examina el marcado exterior de un cable Ethernet.

Anota:

- Categoría del cable.
- Tipo de apantallamiento (si aparece).
- Fabricante.
- Longitud (si está indicada).

Si es posible, identifica también el conector RJ-45 instalado en sus extremos.

---

## Paso 3. Observar una fibra óptica

Observa un cable de fibra óptica o una fotografía de este.

Intenta identificar:

- Cubierta exterior.
- Tipo de fibra (si aparece indicado).
- Tipo de conector (si es visible).
- Aplicación para la que podría utilizarse.

---

## Paso 4. Resolver distintos escenarios

<figure class="figura-libro">
  <img
    src="../../assets/images/parte2/capitulo6/figura6_14.png"
    alt="Selección del medio de transmisión en distintos escenarios"
  >
  <figcaption>
    <strong>Figura 6.14.</strong> Ejemplos de selección del medio de transmisión según distintos escenarios habituales. La elección depende de factores como la distancia, el ancho de banda necesario, la movilidad, las interferencias y el coste de la instalación.
  </figcaption>
</figure>

Indica qué medio de transmisión utilizarías en cada uno de los siguientes casos y justifica tu respuesta.

| Escenario | Medio recomendado | Justificación |
|-----------|-------------------|---------------|
| Ordenador situado a 20 m del switch | | |
| Armarios de comunicaciones separados por 80 m | | |
| Dos edificios separados por 700 m | | |
| Portátiles de una biblioteca | | |
| Cámaras IP distribuidas por una planta | | |

---

## Paso 5. Comparar prestaciones

Completa la siguiente tabla utilizando la información estudiada en el capítulo.

| Característica | Par trenzado | Fibra óptica | Wi-Fi |
|----------------|--------------|--------------|-------|
| Tipo de señal | | | |
| Distancia habitual | | | |
| Resistencia a interferencias | | | |
| Movilidad | | | |
| Coste aproximado | | | |

---

## Actividades

1. ¿Por qué la fibra óptica no suele utilizarse para conectar directamente un ordenador situado junto al switch?

2. ¿Qué ventajas ofrece un cable Cat 6A frente a un Cat 5e?

3. ¿En qué situaciones elegirías una fibra monomodo?

4. ¿Por qué el Wi-Fi no sustituye completamente al cableado en una empresa?

5. ¿Qué medio utilizarías para conectar un punto de acceso Wi-Fi instalado en el techo de un aula? Explica tu respuesta.

---

## Conclusiones

La selección del medio de transmisión no depende únicamente de la velocidad.

Un técnico de redes debe analizar la distancia, el entorno, el coste, la posibilidad de crecimiento y las necesidades de cada instalación antes de decidir qué tecnología utilizar.

En la mayoría de las redes profesionales conviven el cable de par trenzado, la fibra óptica y las comunicaciones inalámbricas, aprovechando las ventajas de cada uno de estos medios.

## Conceptos clave

En este capítulo has estudiado los principales **medios de transmisión** utilizados en las redes locales y has comprobado que la elección del medio adecuado influye directamente en el rendimiento, la fiabilidad y el coste de una instalación.

Has aprendido que los medios de transmisión pueden clasificarse en **guiados**, cuando utilizan un soporte físico para transportar la información, y **no guiados**, cuando la comunicación se realiza mediante ondas electromagnéticas.

También has conocido las características del **cable de par trenzado**, el medio más utilizado en el cableado horizontal de las redes Ethernet, así como las distintas categorías de cable y su influencia en la velocidad y el ancho de banda disponibles.

Posteriormente has estudiado la **fibra óptica**, comprendiendo su funcionamiento, su estructura y las diferencias entre la fibra **multimodo** y la **monomodo**, además de las aplicaciones más habituales de cada una.

Por último, has aprendido que una instalación profesional suele combinar varios medios de transmisión, seleccionando en cada caso la solución que mejor se adapta a la distancia, el ancho de banda necesario, las interferencias del entorno, la movilidad requerida y el presupuesto disponible.

La siguiente tabla resume los conceptos más importantes del capítulo.

| Concepto | Descripción |
|-----------|-------------|
| **Medio de transmisión** | Soporte por el que viajan las señales que transportan la información entre los dispositivos de una red. |
| **Medio guiado** | Utiliza un soporte físico, como un cable de cobre o una fibra óptica, para conducir la señal. |
| **Medio no guiado** | Transmite la información mediante ondas electromagnéticas, sin necesidad de un cable físico. |
| **Cable de par trenzado** | Medio guiado formado por cuatro pares de conductores de cobre trenzados. Es el más utilizado en redes locales. |
| **Categoría del cable** | Clasificación que determina las prestaciones máximas del cable, como el ancho de banda y la velocidad soportada. |
| **Fibra óptica** | Medio guiado que transmite los datos mediante pulsos de luz, ofreciendo grandes velocidades y largas distancias. |
| **Fibra multimodo** | Fibra con núcleo de mayor diámetro, utilizada principalmente en redes locales y enlaces de corta o media distancia. |
| **Fibra monomodo** | Fibra con núcleo muy estrecho, utilizada en enlaces de larga distancia y redes de operadores. |
| **Backbone** | Enlace principal que conecta armarios de comunicaciones, plantas o edificios. Habitualmente utiliza fibra óptica. |
| **Wi-Fi** | Tecnología inalámbrica que utiliza ondas de radio para conectar dispositivos móviles a una red local. |
| **Interferencias electromagnéticas (EMI)** | Perturbaciones producidas por campos electromagnéticos que pueden afectar a la transmisión de datos, especialmente en cables de cobre. |
| **PoE (Power over Ethernet)** | Tecnología que permite suministrar alimentación eléctrica y datos a través de un mismo cable Ethernet. |

!!! note "Recuerda"

    No existe un medio de transmisión mejor que otro para todas las situaciones. La elección depende de las necesidades de la instalación y, en la mayoría de las redes profesionales, se combinan varios medios para aprovechar las ventajas de cada uno.

!!! tip "Lo más importante"

    Si recuerdas una única idea de este capítulo, que sea esta:

    **Seleccionar correctamente el medio de transmisión es tan importante como elegir los equipos de red, ya que condiciona la velocidad, la fiabilidad, la distancia máxima y las posibilidades de crecimiento de toda la instalación.**

## Resumen del capítulo

En este capítulo hemos estudiado los **medios de transmisión**, es decir, los soportes que permiten transportar la información entre los dispositivos de una red informática.

En primer lugar, hemos aprendido que los medios de transmisión pueden clasificarse en **guiados**, cuando utilizan un soporte físico para conducir la señal, y **no guiados**, cuando la comunicación se realiza mediante ondas electromagnéticas.

A continuación, hemos analizado el **cable de par trenzado**, el medio más utilizado en las redes Ethernet actuales. Hemos conocido su estructura interna, sus principales ventajas, sus limitaciones y las aplicaciones para las que resulta más adecuado.

Posteriormente hemos estudiado las diferentes **categorías del cable de cobre**, comprendiendo que no todos los cables Ethernet ofrecen las mismas prestaciones y que la elección de una categoría u otra depende de las necesidades presentes y futuras de la instalación.

También hemos conocido la **fibra óptica**, un medio de transmisión que utiliza pulsos de luz para transportar la información y que destaca por su gran velocidad, su elevada capacidad de transmisión y su inmunidad frente a las interferencias electromagnéticas.

Después hemos diferenciado los dos principales tipos de fibra óptica:

- **Fibra multimodo**, utilizada principalmente en redes locales y enlaces de corta o media distancia.
- **Fibra monomodo**, destinada a comunicaciones de larga distancia y a las redes de los operadores de telecomunicaciones.

Finalmente, hemos aprendido que no existe un medio de transmisión universalmente mejor que otro. La elección depende de factores como la distancia, el ancho de banda necesario, las interferencias del entorno, la movilidad, el coste de la instalación y las posibilidades de crecimiento de la red.

En la práctica guiada hemos aplicado todos estos conocimientos identificando diferentes medios de transmisión y seleccionando la solución más adecuada para distintos escenarios reales.

Gracias a estos conocimientos ya estás preparado para comenzar a trabajar con los **componentes físicos del cableado estructurado**, que estudiarás en el siguiente capítulo, donde aprenderás a reconocer y utilizar conectores RJ-45, tomas de red, paneles de parcheo, latiguillos y otros elementos fundamentales de una instalación profesional.

## Cuestionario de autoevaluación

Responde a las siguientes preguntas sin consultar el contenido del capítulo. Si tienes dudas, revisa el apartado correspondiente antes de continuar.

### Preguntas tipo test

**1. ¿Qué es un medio de transmisión?**

a) Un dispositivo que almacena datos.

b) El soporte por el que viajan las señales que transportan la información entre dispositivos.

c) Un programa utilizado para configurar una red.

d) Un tipo de switch.

---

**2. ¿Cuál de los siguientes es un medio de transmisión guiado?**

a) Wi-Fi.

b) Bluetooth.

c) Fibra óptica.

d) 5G.

---

**3. ¿Qué medio transmite la información mediante pulsos de luz?**

a) Cable coaxial.

b) Cable de par trenzado.

c) Fibra óptica.

d) Wi-Fi.

---

**4. ¿Cuál es la distancia máxima recomendada para un enlace Ethernet sobre cable de par trenzado?**

a) 10 m.

b) 50 m.

c) 100 m.

d) 500 m.

---

**5. ¿Qué categoría de cable permite enlaces de 10 Gbit/s y es una de las opciones más recomendables para nuevas instalaciones?**

a) Cat 5.

b) Cat 5e.

c) Cat 6A.

d) Cat 3.

---

**6. ¿Qué ventaja presenta la fibra óptica frente al cable de cobre?**

a) Permite transmitir alimentación eléctrica mediante PoE.

b) Es inmune a las interferencias electromagnéticas.

c) Resulta siempre más económica.

d) Utiliza señales eléctricas.

---

**7. ¿Qué tipo de fibra se emplea normalmente para enlaces de larga distancia?**

a) Fibra multimodo.

b) Fibra monomodo.

c) Cable coaxial.

d) Cat 8.

---

**8. ¿Qué medio de transmisión proporciona mayor movilidad a los usuarios?**

a) Cable Cat 6.

b) Fibra óptica.

c) Wi-Fi.

d) Backbone.

---

### Preguntas de respuesta corta

**9. Explica con tus propias palabras la diferencia entre un medio guiado y un medio no guiado.**

---

**10. ¿Por qué los conductores de un cable de par trenzado están trenzados?**

---

**11. ¿Qué diferencias existen entre una fibra multimodo y una fibra monomodo?**

---

**12. ¿Por qué una empresa puede combinar cable de cobre, fibra óptica y Wi-Fi en una misma instalación?**

---

### Relaciona cada medio con su aplicación

| Medio de transmisión | Aplicación más habitual |
|-----------------------|-------------------------|
| Cable Cat 6A | ☐ Conexión de puestos de trabajo. |
| Fibra multimodo | ☐ Backbone entre plantas. |
| Fibra monomodo | ☐ Enlaces de larga distancia. |
| Wi-Fi | ☐ Dispositivos móviles. |

---

### Caso práctico

**13.**

Una empresa va a instalar una nueva red con las siguientes características:

- 40 ordenadores distribuidos en dos plantas.
- 6 puntos de acceso Wi-Fi.
- Un armario de comunicaciones por planta.
- Dos edificios separados por 600 metros.

Selecciona el medio de transmisión más adecuado para cada uno de los siguientes enlaces y justifica tu respuesta.

| Enlace | Medio recomendado |
|---------|-------------------|
| Ordenadores ↔ Switch de planta | |
| Backbone entre plantas | |
| Enlace entre edificios | |
| Portátiles | |

---

### Actividad práctica

**14.**

Observa los cables disponibles en el aula o las imágenes proporcionadas por el profesor e identifica:

- La categoría del cable de par trenzado.
- El tipo de conector instalado.
- El tipo de fibra óptica (si aparece indicado).
- Los dispositivos que utilizan comunicaciones inalámbricas.

Anota tus observaciones.

---

### Actividad de razonamiento

**15.**

Dos empresas necesitan instalar una nueva red.

- **Empresa A:** una oficina de una sola planta con 20 puestos de trabajo.
- **Empresa B:** un campus con tres edificios separados entre sí por varios cientos de metros.

Explica qué medios de transmisión utilizarías en cada caso y justifica tus decisiones teniendo en cuenta la distancia, el coste, las prestaciones y las posibilidades de ampliación.

---

### Autoevaluación

Marca la opción que mejor refleje tu nivel de aprendizaje.

| Aspecto | 😊 | 😐 | ☹ |
|---------|:--:|:--:|:--:|
| Comprendo qué es un medio de transmisión. | ☐ | ☐ | ☐ |
| Distingo entre medios guiados y no guiados. | ☐ | ☐ | ☐ |
| Identifico las principales categorías del cable de par trenzado. | ☐ | ☐ | ☐ |
| Comprendo las diferencias entre fibra multimodo y monomodo. | ☐ | ☐ | ☐ |
| Soy capaz de seleccionar el medio de transmisión más adecuado para una instalación. | ☐ | ☐ | ☐ |
| Justifico técnicamente la elección de un medio de transmisión. | ☐ | ☐ | ☐ |

## Reto final

### Diseñando los medios de transmisión de un instituto

Un instituto de Formación Profesional va a renovar completamente su infraestructura de red.

El edificio dispone de:

- Tres plantas.
- 24 aulas.
- 6 talleres.
- Biblioteca.
- Salón de actos.
- Gimnasio.
- Secretaría.
- Sala de profesores.
- Departamento de administración.
- Sala de servidores.

Además, el centro contará con:

- Más de **300 ordenadores**.
- 25 impresoras de red.
- 40 puntos de acceso Wi-Fi.
- 60 teléfonos IP.
- 35 cámaras IP.
- Varias pantallas informativas conectadas a la red.

El instituto desea que la instalación tenga una vida útil mínima de **15 años** y permita futuras ampliaciones sin necesidad de sustituir el cableado principal.

Tu misión consiste en seleccionar los medios de transmisión más adecuados para toda la infraestructura.

---

## Parte 1. Identificación de necesidades

Antes de comenzar el diseño, responde a las siguientes preguntas:

1. ¿Qué requisitos debe cumplir la instalación?

Valora aspectos como:

- Velocidad.
- Fiabilidad.
- Escalabilidad.
- Coste.
- Facilidad de mantenimiento.
- Posibilidad de ampliación.

---

## Parte 2. Selección del medio de transmisión

Indica qué medio utilizarías en cada uno de los siguientes enlaces.

| Enlace | Medio seleccionado | Justificación |
|--------|--------------------|---------------|
| Puestos de trabajo ↔ Switch de planta | | |
| Teléfonos IP | | |
| Cámaras IP | | |
| Puntos de acceso Wi-Fi | | |
| Backbone entre plantas | | |
| Sala de servidores ↔ Switch principal | | |

Justifica cada decisión teniendo en cuenta:

- Distancia.
- Velocidad.
- Interferencias.
- Coste.
- Posibilidad de crecimiento.

---

## Parte 3. Selección de la categoría del cable

Supón que vas a instalar una nueva infraestructura de cobre.

¿Qué categoría elegirías?

- Cat 5e.
- Cat 6.
- Cat 6A.
- Cat 7.
- Cat 8.

Explica por qué descartas las demás opciones.

---

## Parte 4. Fibra óptica

La sala de servidores debe conectarse con un edificio anexo situado a **800 metros**.

Responde:

1. ¿Utilizarías fibra multimodo o monomodo?

2. ¿Por qué?

3. ¿Qué ventajas ofrece frente al cable de par trenzado en este caso?

---

## Parte 5. Red inalámbrica

El instituto necesita proporcionar cobertura Wi-Fi a todo el edificio.

Responde:

1. ¿Por qué el Wi-Fi no sustituye completamente al cableado estructurado?

2. ¿Qué dispositivos conectarías mediante Wi-Fi?

3. ¿Qué dispositivos mantendrías conectados mediante cable?

Justifica tus respuestas.

---

## Parte 6. Diseño global

Realiza un esquema sencillo indicando:

- Sala de servidores.
- Backbone.
- Armarios de comunicaciones.
- Cableado horizontal.
- Puntos de acceso Wi-Fi.
- Puestos de trabajo.

Utiliza flechas para representar el recorrido de las comunicaciones.

---

## Reflexión final

Después de completar este reto, responde a la siguiente pregunta:

> **¿Por qué una instalación profesional combina distintos medios de transmisión en lugar de utilizar uno solo para toda la red?**

Justifica tu respuesta utilizando los conceptos estudiados en este capítulo.

---

## Objetivo del reto

Si has completado este reto, ya eres capaz de identificar, comparar y seleccionar los principales medios de transmisión utilizados en redes locales, justificando técnicamente la elección más adecuada para cada escenario.

Estos conocimientos constituyen la base necesaria para comenzar el siguiente capítulo, donde aprenderás a trabajar con los **componentes físicos del cableado estructurado**, como conectores RJ-45, tomas de red, paneles de parcheo, latiguillos y armarios de comunicaciones.
