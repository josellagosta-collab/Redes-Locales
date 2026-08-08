# Capítulo 12. Protocolos de la capa de aplicación

Cada vez que utilizamos Internet estamos utilizando numerosos protocolos de red, aunque normalmente no seamos conscientes de ello.

Cuando encendemos un ordenador y este obtiene automáticamente una dirección IP, interviene un protocolo.

Cuando escribimos:

```text
www.wikipedia.org
```

en el navegador, otro protocolo permite averiguar la dirección IP correspondiente.

Cuando visitamos una página web, enviamos un correo electrónico o descargamos un archivo, también utilizamos protocolos específicos.

En este capítulo conoceremos algunos de los **protocolos de la capa de aplicación más utilizados**.

Nos centraremos especialmente en:

```text
DHCP  → configuración automática de red

DNS   → resolución de nombres

HTTP  → acceso a páginas web

SMTP  → envío de correo electrónico

POP3
IMAP  → recepción y consulta del correo

FTP   → transferencia de archivos
```

No estudiaremos estos protocolos con el objetivo de conocer todos sus detalles internos.

Nuestro objetivo será comprender:

```text
¿Para qué sirve?

¿Cómo funciona de forma básica?

¿Qué dispositivos intervienen?

¿Qué puerto utiliza?

¿Dónde lo encontramos en una red real?
```

Al finalizar el capítulo seremos capaces de relacionar muchas de las acciones que realizamos diariamente con los protocolos de red que las hacen posibles.

---

## 12.1 La capa de aplicación

En capítulos anteriores hemos visto que la comunicación en una red se organiza mediante diferentes capas.

Cada una realiza determinadas funciones y proporciona servicios a la capa superior.

En el modelo TCP/IP podemos representar de forma simplificada las capas como:

```text
┌─────────────────────────┐
│      APLICACIÓN         │
├─────────────────────────┤
│      TRANSPORTE         │
├─────────────────────────┤
│       INTERNET          │
├─────────────────────────┤
│   ACCESO A LA RED       │
└─────────────────────────┘
```

En este capítulo nos centraremos en la capa situada en la parte superior:

```text
CAPA DE APLICACIÓN
```

Esta capa es la más cercana a los programas utilizados por el usuario.

Por ejemplo:

```text
Navegador web

Cliente de correo

Programa de transferencia
de archivos
```

Estos programas utilizan protocolos de la capa de aplicación para comunicarse con otros dispositivos de la red.

---

## Aplicación y protocolo no son lo mismo

Es importante distinguir entre una **aplicación** y un **protocolo**.

Por ejemplo, un navegador web es una aplicación.

Podemos utilizar:

```text
Chrome
Firefox
Edge
Safari
```

Todos ellos son programas diferentes.

Sin embargo, pueden utilizar protocolos comunes para comunicarse con los servidores web:

```text
HTTP
HTTPS
```

Por tanto:

```text
APLICACIÓN
    ↓
utiliza
    ↓
PROTOCOLO
```

Otro ejemplo lo encontramos en el correo electrónico.

Podemos utilizar diferentes aplicaciones de correo, pero estas necesitan protocolos para enviar o recibir los mensajes.

Por ejemplo:

```text
Aplicación de correo
        │
        ├── SMTP
        │
        ├── POP3
        │
        └── IMAP
```

!!! note "Aplicación y protocolo"

    Una aplicación es el programa que utiliza el usuario.

    Un protocolo es el conjunto de reglas que permite que los dispositivos intercambien información de una determinada manera.

---

## Los protocolos proporcionan servicios

Cada protocolo de aplicación ha sido diseñado para realizar una determinada función.

Por ejemplo:

| Protocolo | Servicio principal |
|-----------|--------------------|
| DHCP | Obtener automáticamente la configuración de red |
| DNS | Convertir nombres en direcciones IP |
| HTTP/HTTPS | Acceder a contenidos web |
| SMTP | Enviar correo electrónico |
| POP3/IMAP | Acceder al correo recibido |
| FTP | Transferir archivos |

Por eso, cuando hablamos de los **servicios de una red**, normalmente encontramos uno o varios protocolos que permiten proporcionarlos.

---

## Un ejemplo cotidiano

Supongamos que encendemos un ordenador conectado a la red del centro.

Poco después abrimos el navegador y escribimos:

```text
www.ejemplo.com
```

Finalmente aparece la página web.

Desde el punto de vista del usuario únicamente hemos hecho:

```text
ENCENDER EL PC
      ↓
ABRIR EL NAVEGADOR
      ↓
ESCRIBIR UNA DIRECCIÓN
      ↓
VER LA PÁGINA
```

Pero en la red han ocurrido muchas más cosas.

De forma simplificada:

```text
ENCENDEMOS EL PC
       ↓
      DHCP
       ↓
El equipo obtiene
su configuración de red
       ↓
Escribimos
www.ejemplo.com
       ↓
      DNS
       ↓
Se obtiene la dirección IP
del servidor
       ↓
   HTTP / HTTPS
       ↓
Se solicita la página
       ↓
SERVIDOR WEB
       ↓
La página llega
al navegador
```

En una acción aparentemente sencilla han intervenido varios protocolos.

Esta es una idea fundamental:

> **Los protocolos de red trabajan conjuntamente para proporcionar los servicios que utiliza el usuario.**

<figure class="figura-libro">
  <img
    src="../../assets/images/parte3/capitulo12/figura12_1.png"
    alt="Intervención de DHCP, DNS y HTTP o HTTPS al acceder a una página web"
  >
  <figcaption>
    <strong>Figura 12.1.</strong> Protocolos de aplicación en una actividad cotidiana. Al conectarse a la red, el equipo puede obtener automáticamente su configuración mediante DHCP; posteriormente utiliza DNS para resolver el nombre del servidor y HTTP o HTTPS para solicitar la página web.
  </figcaption>
</figure>

---

## 12.2 El modelo cliente-servidor

Muchos de los servicios que estudiaremos en este capítulo utilizan un modelo denominado:

```text
CLIENTE-SERVIDOR
```

En este modelo encontramos dos participantes principales:

```text
CLIENTE
   │
   │ petición
   ↓
SERVIDOR

CLIENTE
   ↑
   │ respuesta
   │
SERVIDOR
```

El **cliente** solicita un servicio.

El **servidor** proporciona ese servicio.

---

## ¿Qué es un cliente?

Un cliente es un dispositivo o programa que solicita un determinado servicio.

Por ejemplo, cuando utilizamos un navegador:

```text
NAVEGADOR
    ↓
CLIENTE WEB
```

El navegador puede solicitar una página a un servidor.

También podemos tener:

```text
Cliente de correo
Cliente FTP
Cliente DNS
```

El término cliente no siempre se refiere al ordenador completo.

Muchas veces hablamos específicamente del **programa que realiza la petición**.

---

## ¿Qué es un servidor?

Un servidor es un dispositivo o programa preparado para proporcionar un servicio a otros equipos de la red.

Por ejemplo:

```text
Servidor DHCP
Servidor DNS
Servidor web
Servidor de correo
Servidor FTP
```

Un servidor normalmente permanece esperando solicitudes de los clientes.

Cuando recibe una petición, la procesa y devuelve la respuesta correspondiente.

---

## Ejemplo: acceder a una página web

Supongamos que desde nuestro ordenador queremos acceder a una página.

El navegador actúa como cliente:

```text
CLIENTE WEB
     │
     │ Solicitud
     ↓
SERVIDOR WEB
```

El servidor recibe la solicitud y responde:

```text
CLIENTE WEB
     ↑
     │ Página web
     │
SERVIDOR WEB
```

De forma simplificada:

```text
CLIENTE                         SERVIDOR

Navegador                       Servidor web

    │                               │
    │──── Solicita una página ─────>│
    │                               │
    │<──── Envía la página ─────────│
    │                               │
```

Este modelo aparecerá continuamente durante el capítulo.

<figure class="figura-libro">
  <img
    src="../../assets/images/parte3/capitulo12/figura12_2.png"
    alt="Funcionamiento básico del modelo cliente-servidor"
  >
  <figcaption>
    <strong>Figura 12.2.</strong> Funcionamiento básico del modelo cliente-servidor. El cliente solicita un servicio utilizando un protocolo de aplicación y el servidor procesa la petición y devuelve la respuesta correspondiente.
  </figcaption>
</figure>

---

## Un servidor puede proporcionar varios servicios

No debemos imaginar necesariamente un ordenador diferente para cada servicio.

Un mismo servidor puede ejecutar diferentes programas y proporcionar varios servicios.

Por ejemplo:

```text
┌─────────────────────────┐
│        SERVIDOR         │
│                         │
│   ┌─────────────────┐   │
│   │ Servicio DNS    │   │
│   └─────────────────┘   │
│                         │
│   ┌─────────────────┐   │
│   │ Servicio HTTP   │   │
│   └─────────────────┘   │
│                         │
│   ┌─────────────────┐   │
│   │ Servicio FTP    │   │
│   └─────────────────┘   │
│                         │
└─────────────────────────┘
```

Por tanto, debemos distinguir entre:

```text
SERVIDOR
```

como dispositivo, y:

```text
SERVICIO
```

como función que ese dispositivo proporciona.

---

!!! tip "Piensa en el servicio"

    Cuando estudies un protocolo de aplicación, hazte siempre tres preguntas:

    ```text
    ¿Quién solicita el servicio?

    ¿Quién proporciona el servicio?

    ¿Qué información intercambian?
    ```

    Esto facilita mucho la comprensión del funcionamiento de los protocolos.

---

## 12.3 Puertos y servicios

Un servidor puede proporcionar varios servicios simultáneamente.

Por ejemplo, un mismo equipo podría proporcionar:

```text
Servidor web
Servidor FTP
Servidor de correo
```

Todos estos servicios utilizan la misma dirección IP del servidor.

Entonces surge una pregunta:

> **¿Cómo sabe el servidor a qué servicio debe entregar los datos recibidos?**

Para ello se utilizan los **números de puerto**.

---

## Dirección IP y puerto

Podemos utilizar una analogía sencilla.

Imaginemos un edificio:

```text
Dirección del edificio
        ↓
Dirección IP

Número de puerta
        ↓
Puerto
```

La dirección IP permite localizar el dispositivo.

El puerto permite identificar el servicio o aplicación dentro de ese dispositivo.

Podemos representarlo como:

```text
        192.168.1.10
              │
       ┌──────┼───────┐
       │      │       │
    Puerto   Puerto   Puerto
      80      21       25
       │      │       │
      WEB    FTP     CORREO
```

<figure class="figura-libro">
  <img
    src="../../assets/images/parte3/capitulo12/figura12_3.png"
    alt="Relación entre dirección IP, número de puerto y servicio de red"
  >
  <figcaption>
    <strong>Figura 12.3.</strong> Relación entre dirección IP, puerto y servicio. La dirección IP identifica al dispositivo dentro de la red, mientras que el número de puerto permite identificar el servicio al que deben entregarse los datos.
  </figcaption>
</figure>

Por tanto:

```text
IP     → identifica el dispositivo

Puerto → identifica el servicio
```

---

## Puertos conocidos

Muchos protocolos utilizan tradicionalmente números de puerto determinados.

Por ejemplo:

| Protocolo | Puerto habitual | Servicio |
|-----------|:---------------:|----------|
| FTP | 20/21 | Transferencia de archivos |
| SSH | 22 | Acceso remoto seguro |
| SMTP | 25 | Envío de correo |
| DNS | 53 | Resolución de nombres |
| DHCP | 67/68 | Configuración automática |
| HTTP | 80 | Web |
| POP3 | 110 | Recepción de correo |
| IMAP | 143 | Acceso al correo |
| HTTPS | 443 | Web segura |

No es necesario memorizar toda la tabla inmediatamente.

A medida que estudiemos los diferentes protocolos iremos relacionando:

```text
PROTOCOLO
    ↓
SERVICIO
    ↓
PUERTO
```

---

## ¿Por qué necesitamos los puertos?

Supongamos que un servidor tiene:

```text
192.168.1.100
```

y proporciona simultáneamente una página web y un servicio FTP.

Si un cliente establece una comunicación dirigida al servicio web:

```text
192.168.1.100
Puerto 80
```

el sistema sabe que los datos corresponden al servicio HTTP.

Si la comunicación se dirige a:

```text
192.168.1.100
Puerto 21
```

los datos corresponden al servicio FTP.

La dirección IP es la misma:

```text
192.168.1.100
```

pero el puerto permite diferenciar los servicios.

---

## Una forma sencilla de recordarlo

Podemos resumir:

```text
¿A QUÉ EQUIPO?
      ↓
 DIRECCIÓN IP

¿A QUÉ SERVICIO?
      ↓
    PUERTO
```

Ambos elementos trabajan conjuntamente.

Por ejemplo:

```text
192.168.1.100:80
```

puede interpretarse de forma conceptual como:

```text
192.168.1.100
      │
      └── equipo

80
│
└── servicio HTTP
```

---

!!! note "Los puertos pertenecen a la capa de transporte"

    Los números de puerto son utilizados por protocolos de transporte como TCP y UDP.

    En este capítulo los veremos asociados a los protocolos de aplicación porque permiten identificar el servicio al que se dirige una comunicación.

    Más adelante podremos profundizar en su funcionamiento cuando sea necesario.

---

## Relacionando los conceptos

Ya podemos unir tres ideas:

```text
APLICACIÓN
     ↓
utiliza un
     ↓
PROTOCOLO
     ↓
asociado a un
     ↓
SERVICIO
     ↓
identificado mediante
     ↓
PUERTO
```

Por ejemplo:

```text
NAVEGADOR
    ↓
HTTP
    ↓
Servicio web
    ↓
Puerto 80
```

o:

```text
CLIENTE DE CORREO
       ↓
      SMTP
       ↓
Envío de correo
       ↓
   Puerto 25
```

---

## ¿Qué protocolos vamos a estudiar?

Durante el resto del capítulo iremos respondiendo a situaciones muy habituales.

### ¿Cómo obtiene un PC automáticamente su configuración?

```text
DHCP
```

### ¿Cómo sabe el ordenador qué IP corresponde a un nombre?

```text
DNS
```

### ¿Cómo solicitamos una página web?

```text
HTTP / HTTPS
```

### ¿Cómo enviamos un correo electrónico?

```text
SMTP
```

### ¿Cómo accedemos al correo recibido?

```text
POP3 / IMAP
```

### ¿Cómo transferimos archivos?

```text
FTP / SFTP
```

Al final podremos observar que una tarea aparentemente sencilla puede necesitar la colaboración de varios de estos protocolos.

---

!!! question "Comprueba lo aprendido"

    Relaciona cada situación con el protocolo que crees que interviene:

    **A.** Un ordenador recibe automáticamente una dirección IP.

    **B.** Escribimos `www.ejemplo.com` y el equipo necesita conocer su dirección IP.

    **C.** El navegador solicita una página a un servidor.

    **D.** Enviamos un correo electrónico.

    **E.** Consultamos los mensajes almacenados en nuestro servidor de correo.

    **F.** Transferimos un archivo a un servidor.

    Utiliza:

    ```text
    DHCP
    DNS
    HTTP
    SMTP
    IMAP
    FTP
    ```

---

!!! abstract "🛠️ A continuación..."

    Ya sabemos qué es la capa de aplicación, cómo funciona el modelo cliente-servidor y para qué sirven los puertos.

    Ahora estudiaremos el primer gran servicio del capítulo:

    ```text
    DHCP
    ```

    Gracias a DHCP, un equipo puede conectarse a una red y obtener automáticamente los parámetros necesarios para comenzar a comunicarse.

## 12.4 DHCP: configuración automática de red

En capítulos anteriores hemos aprendido que un equipo necesita disponer de una configuración IP correcta para poder comunicarse en una red.

Por ejemplo, podríamos configurar manualmente un ordenador con:

```text
Dirección IPv4:  192.168.1.20
Máscara:         255.255.255.0
Gateway:         192.168.1.1
Servidor DNS:    192.168.1.10
```

En una red pequeña podemos introducir estos valores manualmente.

Pero imaginemos una red con:

```text
20 equipos
50 equipos
200 equipos
500 equipos
```

Configurar manualmente todos los dispositivos sería lento y aumentaría la posibilidad de cometer errores.

Además, cada vez que se conectase un nuevo equipo tendríamos que decidir qué dirección IP asignarle.

Para solucionar este problema se utiliza:

```text
DHCP
```

---

## ¿Qué es DHCP?

**DHCP** significa:

```text
Dynamic Host Configuration Protocol
```

o:

```text
Protocolo de configuración dinámica de host
```

Su función principal es proporcionar automáticamente a los dispositivos la configuración necesaria para utilizar una red TCP/IP.

De forma simplificada:

```text
PC
│
│ Necesito configuración
↓
SERVIDOR DHCP
│
│ Proporciona configuración
↓
PC CONFIGURADO
```

Gracias a DHCP, normalmente podemos conectar un ordenador a una red y comenzar a utilizarla sin introducir manualmente una dirección IP.

---

## Configuración manual y configuración automática

Podemos configurar un equipo de dos formas.

### Configuración estática

Los parámetros se introducen manualmente:

```text
IP
Máscara
Gateway
DNS
```

Por ejemplo:

```text
IP:       192.168.1.20
Máscara:  255.255.255.0
Gateway:  192.168.1.1
DNS:      192.168.1.10
```

La dirección permanecerá configurada hasta que alguien la modifique.

---

### Configuración mediante DHCP

El equipo solicita automáticamente los parámetros a un servidor DHCP.

```text
        RED

PC ─────────────── SERVIDOR DHCP
│                        │
│    solicitud           │
│───────────────────────>│
│                        │
│    configuración       │
│<───────────────────────│
│                        │
```

El usuario no necesita introducir manualmente los parámetros.

!!! note "DHCP no significa IP aleatoria"

    El servidor DHCP administra un conjunto de direcciones que puede entregar a los clientes.

    De esta manera puede controlar qué direcciones se están utilizando y reducir los problemas producidos por configuraciones manuales incorrectas.

---

## ¿Qué información puede proporcionar DHCP?

Aunque solemos relacionar DHCP únicamente con la dirección IP, puede proporcionar varios parámetros.

Los más importantes para nosotros son:

```text
┌─────────────────────────┐
│         DHCP            │
├─────────────────────────┤
│ Dirección IPv4          │
│ Máscara de subred       │
│ Gateway                 │
│ Servidor DNS            │
└─────────────────────────┘
```

Veamos un ejemplo.

Un PC se conecta a una red y recibe:

```text
Dirección IPv4:  192.168.10.25
Máscara:         255.255.255.0
Gateway:         192.168.10.1
DNS:             192.168.10.5
```

Con estos datos el equipo ya conoce:

```text
SU DIRECCIÓN
      ↓
192.168.10.25

SU SUBRED
      ↓
255.255.255.0

CÓMO SALIR A OTRAS REDES
      ↓
192.168.10.1

A QUIÉN PREGUNTAR POR NOMBRES
      ↓
192.168.10.5
```

En los siguientes apartados veremos con más detalle el papel del servidor DNS.

<figure class="figura-libro">
  <img
    src="../../assets/images/parte3/capitulo12/figura12_4.png"
    alt="Configuración automática de los dispositivos de una red mediante DHCP"
  >
  <figcaption>
    <strong>Figura 12.4.</strong> Configuración automática mediante DHCP. Los clientes solicitan su configuración al servidor DHCP, que puede proporcionarles automáticamente una dirección IPv4, la máscara de subred, la puerta de enlace y el servidor DNS.
  </figcaption>
</figure>

---

## Cliente DHCP y servidor DHCP

En una comunicación DHCP encontramos principalmente:

```text
CLIENTE DHCP
```

y:

```text
SERVIDOR DHCP
```

El cliente es el dispositivo que necesita obtener una configuración.

Puede ser:

```text
Ordenador
Portátil
Teléfono móvil
Tablet
Impresora
```

El servidor DHCP es el encargado de proporcionar esa configuración.

Conceptualmente:

```text
CLIENTE DHCP                 SERVIDOR DHCP

Necesito una IP
      │
      │──────────────────────────>
      │
      │     Puedes utilizar
      │     esta configuración
      │<──────────────────────────
      │
Ya puedo utilizar
la red
```

---

## ¿Dónde está el servidor DHCP?

En una red doméstica, normalmente el propio **router** proporciona el servicio DHCP.

Por ejemplo:

```text
                  ROUTER
              Servidor DHCP
                    │
                  Switch
            ┌───────┼───────┐
            │       │       │
           PC1     PC2     PC3
```

También puede proporcionar direcciones a los dispositivos conectados mediante Wi-Fi.

En redes mayores puede existir un servidor dedicado encargado de este servicio.

Para nosotros, lo importante es comprender que debe existir algún dispositivo proporcionando el **servicio DHCP**.

---

## Un conjunto de direcciones disponibles

El servidor no puede entregar cualquier dirección.

El administrador configura un conjunto de direcciones que pueden asignarse a los clientes.

Por ejemplo:

```text
192.168.1.100
        ↓
192.168.1.199
```

Podemos imaginarlo como una reserva de direcciones:

```text
SERVIDOR DHCP

192.168.1.100  → disponible
192.168.1.101  → disponible
192.168.1.102  → disponible
192.168.1.103  → disponible
...
192.168.1.199  → disponible
```

Cuando llega un cliente, el servidor puede asignarle una de ellas.

Por ejemplo:

```text
PC-A → 192.168.1.100

PC-B → 192.168.1.101

PC-C → 192.168.1.102
```

Este conjunto de direcciones suele denominarse:

```text
POOL DHCP
```

o **rango DHCP**.

---

## Algunas direcciones pueden quedar fuera del rango DHCP

No siempre queremos que todas las direcciones de una subred se asignen automáticamente.

Por ejemplo, podríamos reservar determinadas direcciones para dispositivos que necesitan mantener una configuración conocida:

```text
192.168.1.1   → Router

192.168.1.10  → Servidor

192.168.1.20  → Impresora

192.168.1.100 - 192.168.1.199
              ↓
          Clientes DHCP
```

Así evitamos que DHCP entregue accidentalmente una dirección que queremos utilizar de forma estática.

!!! tip "Estático o dinámico"

    De forma general, los dispositivos de usuario pueden utilizar DHCP porque facilita enormemente la administración.

    Algunos dispositivos que deben encontrarse siempre en una dirección conocida pueden utilizar una configuración fija.

    La decisión depende del diseño de la red.

---

## 12.5 ¿Cómo obtiene una dirección un cliente? El proceso DORA

Ya sabemos que el cliente solicita una configuración al servidor DHCP.

Pero aparece una pregunta interesante:

> **Si el ordenador todavía no tiene dirección IP, ¿cómo puede pedir una?**

DHCP utiliza un proceso de intercambio de mensajes que suele resumirse mediante las letras:

```text
D O R A
```

Estas letras corresponden a:

```text
D → DISCOVER

O → OFFER

R → REQUEST

A → ACK
```

Vamos a verlo paso a paso.

---

## Paso 1. DHCP Discover

El cliente acaba de conectarse y necesita localizar un servidor DHCP.

Envía un mensaje:

```text
DHCP DISCOVER
```

que podemos interpretar como:

> **¿Hay algún servidor DHCP en esta red?**

Representación:

```text
CLIENTE                        SERVIDOR DHCP

   │
   │────── DHCP DISCOVER ──────────>
   │
```

En este momento el cliente todavía no dispone de una configuración IPv4 válida proporcionada por el servidor.

---

## Paso 2. DHCP Offer

El servidor recibe la petición y puede ofrecer una configuración al cliente.

Envía:

```text
DHCP OFFER
```

Podemos interpretarlo como:

> **Sí. Puedo ofrecerte esta configuración.**

Por ejemplo:

```text
IP:       192.168.1.105
Máscara:  255.255.255.0
Gateway:  192.168.1.1
DNS:      192.168.1.10
```

Representación:

```text
CLIENTE                        SERVIDOR DHCP

   │<──────── DHCP OFFER ───────────│
   │
```

---

## Paso 3. DHCP Request

El cliente responde indicando que quiere utilizar la configuración ofrecida.

Envía:

```text
DHCP REQUEST
```

Podemos interpretarlo como:

> **Quiero utilizar la dirección que me has ofrecido.**

```text
CLIENTE                        SERVIDOR DHCP

   │────── DHCP REQUEST ────────────>
   │
```

---

## Paso 4. DHCP ACK

Finalmente, el servidor confirma la asignación mediante:

```text
DHCP ACK
```

`ACK` procede de:

```text
Acknowledgement
```

y podemos interpretarlo como una confirmación.

```text
CLIENTE                        SERVIDOR DHCP

   │<───────── DHCP ACK ────────────│
   │
```

A partir de ese momento el cliente puede utilizar la configuración asignada.

---

## El proceso completo

Podemos representar DORA como:

```text
CLIENTE                         SERVIDOR DHCP

   │                                   │
   │────── DISCOVER ──────────────────>│
   │                                   │
   │<──────── OFFER ───────────────────│
   │                                   │
   │────── REQUEST ───────────────────>│
   │                                   │
   │<──────── ACK ─────────────────────│
   │                                   │

             CONFIGURACIÓN
                OBTENIDA
```

<figure class="figura-libro">
  <img
    src="../../assets/images/parte3/capitulo12/figura12_5.png"
    alt="Proceso DORA utilizado por DHCP para proporcionar la configuración de red a un cliente"
  >
  <figcaption>
    <strong>Figura 12.5.</strong> Proceso DORA de DHCP. El cliente busca un servidor mediante DHCP Discover, recibe una oferta mediante DHCP Offer, solicita la configuración con DHCP Request y finalmente el servidor confirma la asignación mediante DHCP ACK.
  </figcaption>
</figure>

Una forma sencilla de recordarlo es:

```text
DISCOVER → BUSCO

OFFER    → TE OFREZCO

REQUEST  → LA QUIERO

ACK      → CONFIRMADO
```

---

## Los puertos de DHCP

DHCP utiliza UDP.

Los puertos asociados al servicio son:

```text
Servidor DHCP → UDP 67

Cliente DHCP  → UDP 68
```

Por tanto:

| Elemento | Protocolo de transporte | Puerto |
|----------|:-----------------------:|:------:|
| Servidor DHCP | UDP | 67 |
| Cliente DHCP | UDP | 68 |

Para este nivel no necesitamos estudiar en profundidad por qué DHCP utiliza estos dos puertos.

Lo importante es recordar:

```text
DHCP
 ↓
UDP
 ↓
67 / 68
```

---

## ¿La dirección obtenida es para siempre?

Normalmente no.

Las direcciones proporcionadas mediante DHCP se asignan durante un determinado periodo.

Esta asignación temporal recibe el nombre de:

```text
CONCESIÓN
```

o:

```text
LEASE
```

Podemos imaginarla así:

```text
SERVIDOR DHCP

192.168.1.105
      ↓
asignada a PC-A
      ↓
durante un tiempo
```

El cliente puede renovar la concesión para continuar utilizando la dirección.

No necesitamos conocer ahora todos los detalles de este proceso.

Lo importante es comprender que:

> **DHCP administra dinámicamente las direcciones disponibles de la red.**

---

## ¿Qué ocurre si no hay servidor DHCP?

Supongamos que configuramos nuestro ordenador para obtener automáticamente una dirección IP:

```text
Obtener una dirección IP
automáticamente
```

pero no existe ningún servidor DHCP disponible.

El cliente puede enviar:

```text
DHCP DISCOVER
```

pero no recibe:

```text
DHCP OFFER
```

Por tanto, no puede completar el proceso DORA.

En algunos sistemas puede aparecer entonces una dirección automática especial del rango:

```text
169.254.0.0/16
```

Este mecanismo se conoce habitualmente como:

```text
APIPA
```

En Windows podemos encontrarnos, por ejemplo, con una dirección similar a:

```text
169.254.35.27
```

Cuando observamos una dirección:

```text
169.254.x.x
```

en un equipo que debería recibir su configuración mediante DHCP, es una pista muy importante:

> **Puede existir un problema para contactar con el servidor DHCP.**

<figure class="figura-libro">
  <img
    src="../../assets/images/parte3/capitulo12/figura12_6.png"
    alt="Comparación entre la obtención correcta de una dirección mediante DHCP y la asignación automática de una dirección APIPA"
  >
  <figcaption>
    <strong>Figura 12.6.</strong> Ausencia de un servidor DHCP disponible. Si el cliente no puede contactar con un servidor DHCP, no completa el proceso de asignación y, en determinados sistemas, puede autoconfigurarse con una dirección APIPA del rango 169.254.0.0/16.
  </figcaption>
</figure>

!!! warning "169.254.x.x"

    Si esperabas recibir una dirección de tu red mediante DHCP y Windows muestra una dirección `169.254.x.x`, comprueba que:

    ```text
    el equipo está conectado,
    existe un servidor DHCP
    y el servicio está disponible.
    ```

---

## Consultar la configuración obtenida en Windows

Podemos comprobar fácilmente qué configuración tiene nuestro ordenador.

Abre:

```text
Símbolo del sistema
```

y ejecuta:

```cmd
ipconfig
```

Entre la información mostrada podremos encontrar datos como:

```text
Dirección IPv4
Máscara de subred
Puerta de enlace predeterminada
```

Para obtener más información podemos utilizar:

```cmd
ipconfig /all
```

Este comando permite consultar, entre otros datos, información relacionada con:

```text
DHCP
DNS
dirección física
configuración IPv4
```

No necesitamos analizar todavía toda la salida.

Por ahora simplemente queremos comprobar que DHCP puede proporcionar al equipo los parámetros de red automáticamente.

---

!!! question "Comprueba lo aprendido"

    Un servidor DHCP dispone del siguiente rango:

    ```text
    192.168.50.100 - 192.168.50.150
    ```

    y proporciona:

    ```text
    Máscara: 255.255.255.0
    Gateway: 192.168.50.1
    DNS:     192.168.50.10
    ```

    Un nuevo portátil se conecta a la red.

    Responde:

    1. ¿Debe introducir manualmente una dirección IP si está configurado para utilizar DHCP?
    2. ¿Qué dispositivo debe proporcionarle la configuración?
    3. ¿Podría recibir `192.168.50.120`?
    4. ¿Podría recibir `192.168.50.200` del rango indicado?
    5. ¿Qué máscara recibirá?
    6. ¿Qué gateway recibirá?
    7. ¿Qué servidor DNS utilizará?
    8. Ordena correctamente:

    ```text
    DHCP ACK
    DHCP REQUEST
    DHCP DISCOVER
    DHCP OFFER
    ```

---

!!! abstract "🛠️ A continuación..."

    DHCP ha proporcionado al ordenador, entre otros parámetros:

    ```text
    Dirección IP
    Máscara
    Gateway
    DNS
    ```

    Pero todavía tenemos que responder a una pregunta:

    ```text
    ¿Qué es ese servidor DNS
    que DHCP nos ha indicado?
    ```

    En el siguiente apartado veremos cómo **DNS permite utilizar nombres como `www.ejemplo.com` en lugar de tener que recordar direcciones IP**.

## 12.6 DNS: nombres en lugar de direcciones IP

En el apartado anterior hemos visto que DHCP puede proporcionar automáticamente al equipo varios parámetros:

```text
Dirección IPv4
Máscara
Gateway
Servidor DNS
```

Ya sabemos para qué sirven los tres primeros.

Ahora vamos a responder:

> **¿Para qué necesita nuestro ordenador la dirección de un servidor DNS?**

---

## El problema de recordar direcciones IP

Los dispositivos de una red utilizan direcciones IP para identificarse y comunicarse.

Por ejemplo, un servidor podría tener:

```text
192.168.1.50
```

En Internet ocurre algo similar. Los servidores también tienen direcciones IP.

Sin embargo, para las personas sería incómodo tener que recordar direcciones IP cada vez que queremos acceder a un servicio.

Resulta mucho más sencillo recordar:

```text
www.ejemplo.com
```

que una dirección como:

```text
93.184.216.34
```

Necesitamos, por tanto, un mecanismo que permita relacionar:

```text
NOMBRE
  ↕
DIRECCIÓN IP
```

Ese sistema es:

```text
DNS
```

---

## ¿Qué es DNS?

**DNS** significa:

```text
Domain Name System
```

o:

```text
Sistema de nombres de dominio
```

Su función principal es permitir relacionar nombres con direcciones IP.

De forma simplificada:

```text
www.ejemplo.com
       ↓
      DNS
       ↓
93.184.216.34
```

Este proceso recibe el nombre de:

```text
RESOLUCIÓN DE NOMBRES
```

Podemos decir que DNS nos permite trabajar con nombres fáciles de recordar mientras los dispositivos continúan comunicándose mediante direcciones IP.

---

## Un ejemplo sencillo

Supongamos que escribimos en nuestro navegador:

```text
www.empresa.local
```

Nuestro ordenador necesita conocer la dirección IP del servidor que utiliza ese nombre.

Para averiguarla consulta a un servidor DNS:

```text
CLIENTE                         SERVIDOR DNS

   │                                  │
   │── ¿IP de www.empresa.local? ────>│
   │                                  │
   │<────── 192.168.1.50 ─────────────│
   │                                  │
```

Una vez conocida la dirección:

```text
www.empresa.local
        ↓
   192.168.1.50
```

el cliente ya puede comunicarse con el servidor correspondiente.

<figure class="figura-libro">
  <img
    src="../../assets/images/parte3/capitulo12/figura12_7.png"
    alt="Resolución de un nombre mediante un servidor DNS"
  >
  <figcaption>
    <strong>Figura 12.7.</strong> Resolución de nombres mediante DNS. El cliente consulta al servidor DNS para conocer qué dirección IP corresponde al nombre solicitado. Una vez obtenida la dirección, puede iniciar la comunicación con el servidor de destino.
  </figcaption>
</figure>

!!! note "DNS no transporta la página web"

    DNS no se encarga de descargar una página web.

    Su trabajo, en este ejemplo, consiste en ayudar al cliente a averiguar:

    ```text
    ¿Qué dirección IP corresponde
    a este nombre?
    ```

    Después podrán intervenir otros protocolos, como HTTP o HTTPS.

---

## Cliente DNS y servidor DNS

De nuevo encontramos el modelo cliente-servidor.

El **cliente DNS** necesita resolver un nombre.

El **servidor DNS** responde a las consultas de resolución.

```text
CLIENTE DNS
     │
     │ consulta
     ↓
SERVIDOR DNS
     │
     │ respuesta
     ↓
CLIENTE DNS
```

Por ejemplo:

```text
Consulta:

¿Qué IP corresponde a
servidor.empresa.local?

          ↓

Respuesta:

192.168.10.20
```

El cliente puede entonces utilizar esa dirección para iniciar la comunicación.

---

## ¿Cómo sabe el ordenador qué servidor DNS debe utilizar?

El equipo necesita conocer la dirección IP de algún servidor DNS al que enviar sus consultas.

Podemos configurarla manualmente.

Por ejemplo:

```text
IP:       192.168.1.25
Máscara:  255.255.255.0
Gateway:  192.168.1.1
DNS:      192.168.1.10
```

Pero acabamos de estudiar otra posibilidad.

El servidor:

```text
DHCP
```

puede entregar al cliente la dirección del servidor DNS junto con el resto de la configuración.

Así:

```text
                 DHCP
                   │
          ┌────────┼─────────┐
          │        │         │
          ↓        ↓         ↓
         IP     Gateway     DNS
```

Por ejemplo:

```text
DHCP entrega:

IP:       192.168.1.105
Máscara:  255.255.255.0
Gateway:  192.168.1.1
DNS:      192.168.1.10
```

Ahora el PC sabe que, cuando necesite resolver un nombre, puede consultar:

```text
192.168.1.10
```

Esta es una de las primeras relaciones claras entre los protocolos estudiados:

```text
DHCP
 ↓
indica qué DNS utilizar
 ↓
DNS
 ↓
resuelve nombres
```
<figure class="figura-libro">
  <img
    src="../../assets/images/parte3/capitulo12/figura12_8.png"
    alt="Funcionamiento conjunto de DHCP y DNS"
  >
  <figcaption>
    <strong>Figura 12.8.</strong> DHCP y DNS trabajando juntos. DHCP proporciona al cliente su configuración de red, incluida la dirección del servidor DNS. Posteriormente, el cliente puede consultar a ese servidor DNS para obtener la dirección IP asociada a un nombre.
  </figcaption>
</figure>

---

## El proceso básico de resolución

Veamos qué ocurre cuando un usuario escribe:

```text
www.empresa.local
```

en su navegador.

### Paso 1. El usuario escribe el nombre

```text
www.empresa.local
```

El navegador necesita comunicarse con el servidor correspondiente.

Pero todavía necesita conocer su dirección IP.

---

### Paso 2. El cliente consulta al servidor DNS

El equipo pregunta:

```text
¿Qué dirección IP corresponde a
www.empresa.local?
```

Representación:

```text
PC                              DNS

│──── www.empresa.local ? ──────>│
```

---

### Paso 3. El servidor DNS responde

Supongamos que el servidor conoce:

```text
www.empresa.local
        ↓
192.168.1.50
```

Responde al cliente:

```text
PC                              DNS

│<────── 192.168.1.50 ──────────│
```

---

### Paso 4. El cliente utiliza la dirección IP

Ahora el equipo ya puede dirigirse al servidor:

```text
PC
 │
 │ 192.168.1.50
 ↓
SERVIDOR
```

A partir de aquí puede comenzar la comunicación necesaria para solicitar la página web.

De forma resumida:

```text
www.empresa.local
        ↓
CONSULTA DNS
        ↓
192.168.1.50
        ↓
COMUNICACIÓN CON
EL SERVIDOR
```

---

## Nombres y direcciones

Un servidor DNS almacena información que permite relacionar nombres y direcciones.

De forma muy simplificada podemos imaginar una tabla:

| Nombre | Dirección IPv4 |
|--------|----------------|
| `www.empresa.local` | `192.168.1.50` |
| `correo.empresa.local` | `192.168.1.60` |
| `ftp.empresa.local` | `192.168.1.70` |

Cuando un cliente pregunta por:

```text
correo.empresa.local
```

el servidor puede responder:

```text
192.168.1.60
```

!!! tip "Piensa en una agenda"

    Para comenzar a entender DNS podemos imaginarlo como una agenda:

    ```text
    NOMBRE
       ↓
    BÚSQUEDA
       ↓
    DIRECCIÓN
    ```

    La comparación no explica todo el funcionamiento real de DNS, pero resulta útil para comprender su función principal.

---

## El registro A

La información almacenada en DNS se organiza mediante diferentes tipos de registros.

Para este nivel únicamente necesitamos conocer algunos ejemplos sencillos.

Uno de los más importantes es:

```text
A
```

Un registro **A** relaciona un nombre con una dirección IPv4.

Por ejemplo:

```text
www.empresa.local
        ↓
      A
        ↓
192.168.1.50
```

Podríamos representarlo como:

| Nombre | Tipo | Dirección |
|--------|:----:|-----------|
| `www.empresa.local` | A | `192.168.1.50` |

Más adelante, cuando estudiemos el correo electrónico, veremos otro tipo de registro DNS relacionado con los servidores de correo.

No necesitamos memorizar ahora todos los tipos de registros existentes.

---

## DNS puede guardar temporalmente respuestas

Imaginemos que nuestro equipo pregunta continuamente:

```text
¿Cuál es la IP de www.empresa.local?
```

Sería poco eficiente repetir exactamente la misma consulta cada vez.

Por eso las respuestas DNS pueden almacenarse temporalmente en una:

```text
CACHÉ
```

La caché permite reutilizar durante un tiempo una información obtenida anteriormente.

Conceptualmente:

```text
PRIMER ACCESO

PC
 ↓
Consulta DNS
 ↓
Servidor DNS
 ↓
192.168.1.50
 ↓
Se guarda temporalmente


SIGUIENTE ACCESO

PC
 ↓
Consulta la caché
 ↓
192.168.1.50
```

Esto puede reducir el número de consultas necesarias y acelerar determinadas resoluciones.

Para 1.º de SMX nos basta con recordar:

> **Una caché almacena temporalmente información para poder reutilizarla.**

---

## El puerto de DNS

DNS utiliza el puerto:

```text
53
```

Podemos encontrar comunicaciones DNS utilizando:

```text
UDP 53
```

y también:

```text
TCP 53
```

Para nuestro nivel podemos recordar simplemente:

```text
DNS
 ↓
Puerto 53
```

Por tanto, añadimos otro protocolo a nuestra tabla:

| Protocolo | Función | Puerto |
|-----------|---------|:------:|
| DHCP | Configuración automática | UDP 67/68 |
| DNS | Resolución de nombres | 53 |

---

## Consultar DNS desde Windows

Windows incluye una herramienta muy útil:

```cmd
nslookup
```

Podemos utilizarla desde:

```text
Símbolo del sistema
```

Por ejemplo:

```cmd
nslookup www.google.com
```

El comando realiza una consulta DNS y muestra información sobre la resolución del nombre.

La salida exacta puede variar dependiendo de:

```text
la red utilizada,
el servidor DNS,
la configuración del equipo
y las direcciones obtenidas.
```

Lo importante es localizar:

```text
NOMBRE
  ↓
DIRECCIÓN IP
```

También podemos probar otros nombres:

```cmd
nslookup www.wikipedia.org
```

o:

```cmd
nslookup www.microsoft.com
```

!!! example "Pruébalo"

    En un ordenador con Windows:

    1. Abre el **Símbolo del sistema**.
    2. Ejecuta:

    ```cmd
    nslookup www.wikipedia.org
    ```

    3. Localiza el nombre consultado.
    4. Observa la dirección o direcciones devueltas.
    5. Repite la prueba con otro sitio web.

    No es necesario comprender todavía todas las líneas que muestra `nslookup`.

---

## ¿Qué ocurre si DNS falla?

Supongamos que nuestro ordenador puede comunicarse con una dirección IP, pero no puede resolver nombres.

Por ejemplo:

```text
Comunicación utilizando IP
        ↓
      FUNCIONA

Resolución de un nombre
        ↓
       FALLA
```

Una posible causa es un problema relacionado con DNS.

Esto nos permite comprender una diferencia importante:

```text
TENER CONECTIVIDAD IP
```

no significa necesariamente que:

```text
DNS FUNCIONE CORRECTAMENTE
```

Por ejemplo, un equipo puede tener:

```text
IP correcta
Máscara correcta
Gateway correcto
```

pero:

```text
DNS incorrecto
```

En ese caso puede tener conectividad de red y, sin embargo, experimentar problemas al utilizar nombres.

<figure class="figura-libro">
  <img
    src="../../assets/images/parte3/capitulo12/figura12_9.png"
    alt="Diagnóstico básico de un problema de resolución DNS"
  >
  <figcaption>
    <strong>Figura 12.9.</strong> Diagnóstico básico de un problema DNS. Si el equipo puede comunicarse con un servidor utilizando directamente su dirección IP, pero falla cuando utiliza su nombre, la conectividad IP puede ser correcta y debemos revisar la configuración y el funcionamiento de DNS.
  </figcaption>
</figure>

---

## DHCP y DNS trabajando juntos

Ya conocemos dos protocolos de aplicación.

Podemos relacionarlos:

```text
ENCENDEMOS EL PC
       ↓
      DHCP
       ↓
Obtiene:
IP
Máscara
Gateway
DNS
       ↓
Abrimos el navegador
       ↓
Escribimos un nombre
       ↓
      DNS
       ↓
Obtiene la IP
del servidor
```

Todavía falta una parte importante.

Una vez que DNS nos ha indicado la dirección IP:

> **¿Cómo solicita el navegador la página web?**

Para ello utilizaremos los siguientes protocolos del capítulo:

```text
HTTP
HTTPS
```

---

!!! question "Comprueba lo aprendido"

    Un ordenador ha recibido mediante DHCP:

    ```text
    IP:       192.168.20.105
    Máscara:  255.255.255.0
    Gateway:  192.168.20.1
    DNS:      192.168.20.10
    ```

    El usuario escribe:

    ```text
    www.empresa.local
    ```

    y el servidor DNS contiene:

    ```text
    www.empresa.local → 192.168.20.50
    ```

    Responde:

    1. ¿Qué protocolo proporcionó al PC la dirección del servidor DNS?
    2. ¿A qué dirección IP enviará el cliente su consulta DNS?
    3. ¿Qué nombre quiere resolver?
    4. ¿Qué dirección devolverá el servidor DNS?
    5. ¿Qué protocolo permite realizar la resolución de nombres?
    6. ¿Qué puerto asociamos con DNS?
    7. ¿Qué tipo de registro relaciona en este ejemplo el nombre con una dirección IPv4?

---

!!! abstract "🛠️ A continuación..."

    Ya podemos explicar dos pasos importantes:

    ```text
    DHCP
      ↓
    El PC obtiene su configuración

    DNS
      ↓
    El PC obtiene la dirección IP
    asociada a un nombre
    ```

    Ahora continuaremos el recorrido.

    Cuando el navegador ya conoce la dirección IP del servidor web necesita solicitarle el contenido.

    Para ello estudiaremos:

    ```text
    HTTP
    HTTPS
    ```

## 12.7 HTTP y HTTPS: acceso a páginas web

En el apartado anterior hemos visto que DNS permite obtener la dirección IP asociada a un nombre.

Por ejemplo:

```text
www.empresa.local
        ↓
       DNS
        ↓
192.168.1.50
```

Ahora nuestro ordenador ya sabe dónde se encuentra el servidor.

Pero todavía falta algo:

> **¿Cómo solicita el navegador la página web al servidor?**

Para ello utilizamos principalmente:

```text
HTTP
```

y su versión segura:

```text
HTTPS
```

---

## ¿Qué es HTTP?

**HTTP** significa:

```text
HyperText Transfer Protocol
```

o:

```text
Protocolo de transferencia de hipertexto
```

Es uno de los principales protocolos utilizados para la comunicación entre los navegadores y los servidores web.

Cuando utilizamos:

```text
Chrome
Firefox
Edge
Safari
```

el navegador actúa como:

```text
CLIENTE WEB
```

y solicita recursos a un:

```text
SERVIDOR WEB
```

La comunicación básica sigue el modelo cliente-servidor que ya conocemos:

```text
CLIENTE WEB                    SERVIDOR WEB

     │                              │
     │────── PETICIÓN HTTP ────────>│
     │                              │
     │<──── RESPUESTA HTTP ─────────│
     │                              │
```

Por tanto, podemos resumir:

```text
CLIENTE
   ↓
PETICIÓN
   ↓
SERVIDOR
   ↓
RESPUESTA
   ↓
CLIENTE
```

---

## ¿Qué solicita realmente el navegador?

Cuando pensamos en una página web podemos imaginar que el navegador solicita únicamente una página completa.

En realidad, una página puede estar formada por diferentes recursos:

```text
Documento HTML
Imágenes
Hojas de estilo
Scripts
Otros archivos
```

El navegador puede necesitar solicitar varios de estos recursos al servidor.

Para nuestro nivel basta con comprender:

> **HTTP permite al cliente solicitar recursos a un servidor web y recibir las respuestas correspondientes.**

---

## Un ejemplo sencillo

Supongamos que DNS ya nos ha indicado:

```text
www.empresa.local
        ↓
192.168.1.50
```

El navegador puede entonces realizar una petición al servidor.

Por ejemplo:

```text
CLIENTE                         SERVIDOR WEB

   │                                  │
   │──── Solicito index.html ────────>│
   │                                  │
   │<────── Envía index.html ─────────│
   │                                  │
```

El navegador recibe el recurso y puede mostrarlo al usuario.

De forma simplificada:

```text
www.empresa.local
        ↓
       DNS
        ↓
192.168.1.50
        ↓
      HTTP
        ↓
SERVIDOR WEB
        ↓
   PÁGINA WEB
```

Aquí ya podemos relacionar tres de los protocolos estudiados:

```text
DHCP → configuración

DNS  → resolución del nombre

HTTP → acceso al contenido web
```

---

## Peticiones y respuestas HTTP

HTTP funciona mediante el intercambio de:

```text
PETICIONES
```

y:

```text
RESPUESTAS
```

El cliente realiza la petición:

```text
Quiero este recurso
```

y el servidor devuelve una respuesta:

```text
Aquí tienes el recurso
```

o puede indicar que ha ocurrido algún problema.

Por ejemplo:

```text
NAVEGADOR                       SERVIDOR

    │                              │
    │──── PETICIÓN ───────────────>│
    │                              │
    │<──── RESPUESTA ──────────────│
    │                              │
```

Esta idea será suficiente para comprender el funcionamiento básico de HTTP.

---

## El método GET

Las peticiones HTTP pueden utilizar diferentes métodos.

Para comenzar únicamente necesitamos conocer uno:

```text
GET
```

`GET` se utiliza para solicitar un recurso.

Por ejemplo, conceptualmente:

```text
GET /index.html
```

significa:

> **Quiero obtener el recurso `/index.html`.**

Podemos representarlo así:

```text
NAVEGADOR                      SERVIDOR

    │                             │
    │──── GET /index.html ───────>│
    │                             │
    │<──── index.html ────────────│
    │                             │
```

No necesitamos aprender todavía todos los métodos disponibles en HTTP.

!!! note "GET"

    Para este nivel podemos asociar:

    ```text
    GET
     ↓
    SOLICITAR UN RECURSO
    ```

---

## El servidor también indica el resultado

Cuando un servidor responde a una petición HTTP puede incluir un **código de estado**.

Este código permite indicar qué ha ocurrido con la petición.

Existen muchos códigos, pero comenzaremos con dos muy fáciles de reconocer:

```text
200
```

y:

```text
404
```

---

## 200 OK

El código:

```text
200 OK
```

indica que la petición se ha procesado correctamente.

Por ejemplo:

```text
GET /index.html
       ↓
SERVIDOR
       ↓
200 OK
       ↓
index.html
```

Podemos interpretarlo como:

> **La petición ha sido correcta y puedo proporcionarte el recurso.**

---

## 404 Not Found

Probablemente hayas visto alguna vez:

```text
404
```

al navegar por Internet.

El código:

```text
404 Not Found
```

indica que el servidor no ha encontrado el recurso solicitado.

Por ejemplo:

```text
GET /foto.jpg
       ↓
SERVIDOR
       ↓
404 Not Found
```

Esto no significa necesariamente que el servidor esté desconectado.

De hecho, el servidor **ha respondido**.

El problema es que no encuentra el recurso solicitado.

Podemos comparar:

```text
200 OK
   ↓
Recurso encontrado

404 Not Found
   ↓
Recurso no encontrado
```

!!! tip "Un 404 también es una respuesta"

    Si recibimos un `404 Not Found`, hemos conseguido comunicarnos con el servidor web.

    El servidor simplemente nos está indicando que el recurso solicitado no se encuentra disponible en esa ubicación.

<figure class="figura-libro">
  <img
    src="../../assets/images/parte3/capitulo12/figura12_10.png"
    alt="Petición y respuesta HTTP con ejemplos de los códigos 200 OK y 404 Not Found"
  >
  <figcaption>
    <strong>Figura 12.10.</strong> Petición y respuesta HTTP. El navegador solicita un recurso al servidor web. Si el recurso está disponible, el servidor puede responder con 200 OK y enviarlo; si no lo encuentra, puede responder con 404 Not Found.
  </figcaption>
</figure>

---

## HTTP utiliza el puerto 80

El puerto habitual de HTTP es:

```text
80
```

Por tanto:

```text
HTTP
 ↓
TCP
 ↓
Puerto 80
```

Si un servidor tiene:

```text
192.168.1.50
```

podemos representar conceptualmente el servicio web HTTP como:

```text
192.168.1.50:80
```

Recordemos:

```text
192.168.1.50
      ↓
identifica el equipo

80
↓
identifica el servicio HTTP
```

---

## ¿Qué problema tiene HTTP?

HTTP permite intercambiar información entre el navegador y el servidor.

Sin embargo, HTTP por sí solo no protege el contenido de la comunicación mediante cifrado.

Imaginemos que enviamos información a través de una red:

```text
CLIENTE
   │
   │   DATOS
   │───────────────>
   │
SERVIDOR
```

Si queremos proteger la comunicación necesitamos utilizar mecanismos de seguridad.

Aquí aparece:

```text
HTTPS
```

---

## ¿Qué es HTTPS?

**HTTPS** puede entenderse como HTTP utilizado mediante una conexión protegida.

Podemos asociarlo de forma sencilla con:

```text
HTTP
 +
SEGURIDAD
 =
HTTPS
```

HTTPS permite que la información intercambiada entre el navegador y el servidor viaje **cifrada**.

Esto significa que los datos no circulan simplemente como información fácilmente interpretable por alguien que pudiera interceptar la comunicación.

De forma conceptual:

```text
HTTP

CLIENTE ───── datos ─────> SERVIDOR


HTTPS

CLIENTE ── datos cifrados ──> SERVIDOR
```

---

## El candado del navegador

Cuando visitamos un sitio web mediante HTTPS, el navegador establece una conexión segura con el servidor.

Actualmente los navegadores suelen mostrar información relacionada con la seguridad de la conexión junto a la dirección del sitio.

La dirección comienza normalmente por:

```text
https://
```

en lugar de:

```text
http://
```

Por ejemplo:

```text
http://www.ejemplo.com
```

frente a:

```text
https://www.ejemplo.com
```

Para nuestro nivel debemos asociar:

```text
HTTPS
   ↓
COMUNICACIÓN WEB CIFRADA
```

No estudiaremos todavía en detalle cómo funciona el cifrado ni los certificados digitales.

---

## HTTPS utiliza el puerto 443

El puerto habitual de HTTPS es:

```text
443
```

Por tanto:

```text
HTTP  → TCP 80

HTTPS → TCP 443
```

Esta es una de las parejas de puertos más importantes que debemos reconocer.

| Protocolo | Función | Puerto habitual |
|-----------|---------|:---------------:|
| HTTP | Acceso web | TCP 80 |
| HTTPS | Acceso web seguro | TCP 443 |

<figure class="figura-libro">
  <img
    src="../../assets/images/parte3/capitulo12/figura12_11.png"
    alt="Comparación entre los protocolos HTTP y HTTPS"
  >
  <figcaption>
    <strong>Figura 12.11.</strong> Comparación entre HTTP y HTTPS. HTTP utiliza habitualmente el puerto TCP 80, mientras que HTTPS utiliza el puerto TCP 443 y protege mediante cifrado la comunicación entre el cliente y el servidor web.
  </figcaption>
</figure>

---

## HTTP y HTTPS no son páginas web diferentes

HTTP y HTTPS son protocolos utilizados para transportar la comunicación entre el cliente y el servidor web.

Por ejemplo:

```text
NAVEGADOR
    │
    │ HTTPS
    ↓
SERVIDOR WEB
```

El navegador sigue solicitando recursos al servidor.

La diferencia fundamental que debemos recordar en este nivel es:

```text
HTTP
 ↓
comunicación web

HTTPS
 ↓
comunicación web cifrada
```

---

## Todo el proceso hasta ahora

Ya podemos seguir lo que ocurre desde que un ordenador se conecta a la red hasta que muestra una página web.

### Paso 1. DHCP

El equipo obtiene:

```text
IP
Máscara
Gateway
DNS
```

### Paso 2. DNS

El usuario escribe:

```text
www.empresa.local
```

DNS responde:

```text
192.168.1.50
```

### Paso 3. HTTP o HTTPS

El navegador solicita el recurso:

```text
GET /index.html
```

### Paso 4. El servidor responde

Por ejemplo:

```text
200 OK
```

y envía el recurso.

Podemos resumirlo:

```text
PC SE CONECTA
     ↓
    DHCP
     ↓
Obtiene configuración
     ↓
Usuario escribe un nombre
     ↓
     DNS
     ↓
Obtiene la IP
     ↓
 HTTP / HTTPS
     ↓
Solicita el recurso
     ↓
SERVIDOR WEB
     ↓
200 OK + contenido
     ↓
NAVEGADOR
```

<figure class="figura-libro">
  <img
    src="../../assets/images/parte3/capitulo12/figura12_12.png"
    alt="Funcionamiento conjunto de DHCP, DNS y HTTPS al acceder a una página web"
  >
  <figcaption>
    <strong>Figura 12.12.</strong> DHCP, DNS y HTTPS trabajando juntos. DHCP proporciona al equipo su configuración de red, DNS permite obtener la dirección IP asociada al nombre del servidor y HTTPS permite al navegador solicitar de forma segura el contenido de la página web.
  </figcaption>
</figure>

---

## Añadimos HTTP y HTTPS a nuestra tabla

Nuestra tabla comienza a crecer:

| Protocolo | Función principal | Puerto habitual |
|-----------|------------------|:---------------:|
| DHCP | Configuración automática | UDP 67/68 |
| DNS | Resolución de nombres | 53 |
| HTTP | Acceso web | TCP 80 |
| HTTPS | Acceso web seguro | TCP 443 |

No intentes memorizarla simplemente como una lista de números.

Relaciona siempre:

```text
PROTOCOLO
    ↓
¿PARA QUÉ SIRVE?
    ↓
PUERTO
```

Por ejemplo:

```text
HTTP
 ↓
WEB
 ↓
80
```

y:

```text
HTTPS
 ↓
WEB SEGURA
 ↓
443
```

---

!!! question "Comprueba lo aprendido"

    Un usuario escribe en su navegador:

    ```text
    https://www.empresa.local
    ```

    El servidor DNS indica que:

    ```text
    www.empresa.local
          ↓
    192.168.10.50
    ```

    El navegador solicita:

    ```text
    /index.html
    ```

    y el servidor responde:

    ```text
    200 OK
    ```

    Responde:

    1. ¿Qué protocolo ha permitido obtener `192.168.10.50` a partir del nombre?
    2. ¿Qué protocolo web se está utilizando?
    3. ¿Cómo sabemos que se utiliza HTTPS y no HTTP?
    4. ¿Qué puerto habitual utiliza HTTPS?
    5. ¿Qué método HTTP podemos utilizar para solicitar `/index.html`?
    6. ¿Qué significa `200 OK`?
    7. ¿Qué significaría `404 Not Found`?
    8. ¿Qué diferencia fundamental estudiaremos entre HTTP y HTTPS?

---

!!! abstract "🛠️ A continuación..."

    Hasta ahora hemos aprendido a:

    ```text
    DHCP  → obtener configuración

    DNS   → resolver nombres

    HTTP
    HTTPS → acceder a páginas web
    ```

    Pero Internet no sirve únicamente para navegar por páginas web.

    Otro de sus servicios más utilizados es:

    ```text
    EL CORREO ELECTRÓNICO
    ```

    En el siguiente apartado veremos por qué para enviar y recibir correo intervienen varios protocolos:

    ```text
    SMTP
    POP3
    IMAP
    ```

## 12.8 Protocolos de correo electrónico

El correo electrónico es uno de los servicios más utilizados en las redes.

Todos estamos acostumbrados a realizar acciones como:

```text
Escribir un mensaje
Enviar un mensaje
Recibir mensajes
Consultar mensajes
Responder
Adjuntar archivos
```

Desde el punto de vista del usuario todo parece formar parte de un único servicio:

```text
CORREO ELECTRÓNICO
```

Sin embargo, para que funcione correctamente intervienen diferentes protocolos.

Los tres que estudiaremos son:

```text
SMTP
POP3
IMAP
```

Cada uno realiza una función diferente.

De forma muy sencilla:

```text
SMTP
  ↓
ENVIAR CORREO

POP3 / IMAP
     ↓
ACCEDER AL CORREO RECIBIDO
```

Esta diferencia será la idea principal de este apartado.

---

## Un servicio, varios protocolos

Imaginemos que tenemos una cuenta:

```text
ana@empresa.local
```

y queremos enviar un mensaje a:

```text
pedro@empresa.local
```

Ana utiliza una aplicación de correo electrónico.

Por ejemplo:

```text
┌─────────────────────────┐
│   CLIENTE DE CORREO     │
│                         │
│ Para: pedro@...         │
│ Asunto: Reunión         │
│                         │
│ Hola Pedro...           │
│                         │
│        [ ENVIAR ]       │
└─────────────────────────┘
```

Cuando pulsa:

```text
ENVIAR
```

entra en funcionamiento un protocolo especializado en el envío del correo:

```text
SMTP
```

Posteriormente, Pedro necesitará acceder al mensaje recibido.

Para ello puede utilizar protocolos como:

```text
POP3
```

o:

```text
IMAP
```

Por tanto:

```text
                    CORREO ELECTRÓNICO
                           │
             ┌─────────────┴─────────────┐
             │                           │
           ENVÍO                       ACCESO
             │                           │
            SMTP                    POP3 / IMAP
```

---

## 12.9 SMTP: envío de correo electrónico

**SMTP** significa:

```text
Simple Mail Transfer Protocol
```

o:

```text
Protocolo simple de transferencia de correo
```

Su función principal es:

```text
ENVIAR CORREO ELECTRÓNICO
```

Cuando utilizamos un cliente de correo y pulsamos el botón **Enviar**, el mensaje debe llegar al servidor de correo.

De forma simplificada:

```text
CLIENTE DE CORREO
       │
       │ SMTP
       ↓
SERVIDOR DE CORREO
```

SMTP también se utiliza en la transferencia de mensajes entre servidores de correo.

---

## Un correo de Ana a Pedro

Supongamos:

```text
Ana
ana@empresa.local
```

envía un correo a:

```text
Pedro
pedro@empresa.local
```

Podemos representar el proceso de forma sencilla:

```text
ANA
Cliente de correo
       │
       │ SMTP
       ↓
SERVIDOR DE CORREO
       │
       │
       ↓
Buzón de Pedro
```

El mensaje queda disponible para que Pedro pueda consultarlo.

Si emisor y receptor utilizan servidores de correo diferentes, el mensaje puede viajar entre esos servidores.

Por ejemplo:

```text
ANA
 │
 │ SMTP
 ↓
SERVIDOR
DE CORREO A
 │
 │ SMTP
 ↓
SERVIDOR
DE CORREO B
 │
 ↓
BUZÓN DE PEDRO
```

No necesitamos estudiar ahora todos los detalles de este intercambio.

Lo importante es asociar:

```text
SMTP
 ↓
ENVÍO DE CORREO
```

---

## El puerto de SMTP

El puerto tradicional asociado a SMTP es:

```text
25
```

Por tanto, para nuestro nivel recordaremos:

```text
SMTP
 ↓
TCP
 ↓
Puerto 25
```

!!! note "SMTP"

    En este capítulo utilizaremos el puerto 25 como referencia para comprender el funcionamiento básico de SMTP.

    En sistemas de correo actuales también existen otros puertos y mecanismos de seguridad, pero no necesitamos estudiarlos todavía.

---

## SMTP no se utiliza para leer el correo

Esta diferencia es muy importante.

SMTP permite:

```text
ENVIAR
```

pero no es el protocolo que utilizaremos para consultar los mensajes almacenados en nuestro buzón.

Para ello estudiaremos:

```text
POP3
```

e:

```text
IMAP
```

Podemos recordar:

```text
SMTP
  ↓
SALE EL CORREO

POP3 / IMAP
     ↓
ACCEDO AL CORREO RECIBIDO
```

---

## 12.10 POP3: descargar el correo

**POP3** significa:

```text
Post Office Protocol version 3
```

Su función es permitir que un cliente acceda a los mensajes almacenados en un servidor de correo.

Podemos representarlo:

```text
SERVIDOR DE CORREO
       │
       │ POP3
       ↓
CLIENTE DE CORREO
```

Una forma sencilla de entender POP3 es pensar en:

```text
SERVIDOR
   ↓
DESCARGAR MENSAJES
   ↓
EQUIPO
```

Tradicionalmente POP3 ha estado muy relacionado con la descarga del correo desde el servidor al dispositivo del usuario.

---

## El puerto de POP3

El puerto habitual de POP3 es:

```text
110
```

Por tanto:

```text
POP3
 ↓
TCP
 ↓
Puerto 110
```

Ya tenemos:

```text
SMTP → TCP 25 → enviar

POP3 → TCP 110 → acceder/descargar
```

---

## 12.11 IMAP: consultar y sincronizar el correo

El otro protocolo que debemos conocer es:

```text
IMAP
```

**IMAP** significa:

```text
Internet Message Access Protocol
```

También permite acceder al correo almacenado en un servidor.

Sin embargo, su forma de trabajar resulta especialmente adecuada cuando utilizamos varios dispositivos.

Por ejemplo:

```text
             SERVIDOR
             DE CORREO
                 │
       ┌─────────┼─────────┐
       │         │         │
       ↓         ↓         ↓
    PORTÁTIL   MÓVIL     TABLET
```

Los mensajes permanecen gestionados principalmente en el servidor y los diferentes dispositivos pueden mantener su información sincronizada.

Por ejemplo, si marcamos un mensaje como leído desde el móvil, ese estado puede reflejarse también cuando consultamos el correo desde el ordenador.

Podemos asociar:

```text
IMAP
 ↓
CORREO EN EL SERVIDOR
 ↓
SINCRONIZACIÓN
 ↓
VARIOS DISPOSITIVOS
```

---

## El puerto de IMAP

El puerto habitual de IMAP es:

```text
143
```

Por tanto:

```text
IMAP
 ↓
TCP
 ↓
Puerto 143
```

Nuestra comparación queda:

| Protocolo | Función básica | Puerto habitual |
|-----------|----------------|:---------------:|
| SMTP | Enviar correo | TCP 25 |
| POP3 | Acceder y descargar correo | TCP 110 |
| IMAP | Consultar y sincronizar correo | TCP 143 |

<figure class="figura-libro">
  <img
    src="../../assets/images/parte3/capitulo12/figura12_13.png"
    alt="Protocolos SMTP, POP3 e IMAP utilizados en el correo electrónico"
  >
  <figcaption>
    <strong>Figura 12.13.</strong> Protocolos utilizados en el correo electrónico. SMTP se utiliza para enviar los mensajes al servidor de correo, mientras que POP3 o IMAP permiten al destinatario acceder a los mensajes almacenados en su buzón.
  </figcaption>
</figure>

---

## POP3 frente a IMAP

Para este nivel no necesitamos estudiar todas sus diferencias técnicas.

Nos basta con una comparación sencilla:

### POP3

Podemos asociarlo principalmente con:

```text
SERVIDOR
   ↓
DESCARGA
   ↓
EQUIPO
```

### IMAP

Podemos asociarlo principalmente con:

```text
        SERVIDOR
           │
     CORREO GUARDADO
           │
   ┌───────┼───────┐
   ↓       ↓       ↓
  PC     MÓVIL   TABLET
        sincronizados
```

Por eso IMAP resulta especialmente útil cuando consultamos la misma cuenta desde diferentes dispositivos.

!!! tip "Una forma sencilla de recordarlo"

    Para comenzar:

    ```text
    SMTP → ENVIAR

    POP3 → DESCARGAR

    IMAP → SINCRONIZAR
    ```

    Es una simplificación, pero resulta útil para distinguir la función principal de cada protocolo.

<figure class="figura-libro">
  <img
    src="../../assets/images/parte3/capitulo12/figura12_14.png"
    alt="Comparación del funcionamiento básico de POP3 e IMAP"
  >
  <figcaption>
    <strong>Figura 12.14.</strong> Comparación entre POP3 e IMAP. POP3 se ha utilizado tradicionalmente para descargar los mensajes al dispositivo del usuario, mientras que IMAP mantiene el correo en el servidor y facilita su sincronización entre varios dispositivos.
  </figcaption>
</figure>

---

## El recorrido completo de un correo

Ya podemos representar un ejemplo completo.

Ana quiere enviar un mensaje a Pedro.

### Paso 1. Ana escribe el mensaje

```text
Para: pedro@empresa.local

Asunto: Trabajo de redes

Hola Pedro...
```

---

### Paso 2. El cliente de Ana utiliza SMTP

```text
ANA
 │
 │ SMTP
 ↓
SERVIDOR DE CORREO
```

El mensaje llega al sistema de correo.

---

### Paso 3. El mensaje llega al buzón de Pedro

```text
SERVIDOR
   ↓
BUZÓN
DE PEDRO
```

---

### Paso 4. Pedro consulta el correo

Pedro puede utilizar:

```text
POP3
```

o:

```text
IMAP
```

según la configuración de su cliente.

El recorrido simplificado queda:

```text
ANA
Cliente de correo
      │
      │ SMTP
      ↓
┌──────────────────┐
│ SERVIDOR CORREO  │
│                  │
│ Buzón de Pedro   │
└────────┬─────────┘
         │
         │ POP3 / IMAP
         ↓
       PEDRO
Cliente de correo
```

Por tanto:

```text
ANA ── SMTP ──> SERVIDOR ── POP3/IMAP ──> PEDRO
```

---

## ¿Y si Ana y Pedro utilizan servidores diferentes?

En Internet es habitual que emisor y destinatario utilicen servicios de correo diferentes.

De forma simplificada:

```text
ANA
 │
 │ SMTP
 ↓
SERVIDOR DE ANA
 │
 │ SMTP
 ↓
SERVIDOR DE PEDRO
 │
 │ IMAP
 ↓
PEDRO
```

De nuevo aparece una idea importante:

> **Un mismo servicio para el usuario puede necesitar varios protocolos trabajando conjuntamente.**

---

## DNS también participa en el correo electrónico

DNS no sirve únicamente para encontrar servidores web.

También puede ayudar a localizar los servidores encargados de recibir el correo de un determinado dominio.

Para ello existe un tipo de registro DNS denominado:

```text
MX
```

Podemos asociarlo de forma sencilla:

```text
DOMINIO
   ↓
  DNS
   ↓
Registro MX
   ↓
SERVIDOR DE CORREO
```

Por ejemplo, si queremos enviar correo a:

```text
usuario@empresa.local
```

DNS puede contener información que indique qué servidor gestiona el correo de:

```text
empresa.local
```

No necesitamos aprender a configurar registros MX en este capítulo.

Solo debemos saber que:

> **DNS también colabora con el funcionamiento del correo electrónico.**

<figure class="figura-libro">
  <img
    src="../../assets/images/parte3/capitulo12/figura12_15.png"
    alt="Recorrido de un correo electrónico entre dos usuarios con servidores de correo diferentes"
  >
  <figcaption>
    <strong>Figura 12.15.</strong> Recorrido simplificado de un correo electrónico entre dos servidores. SMTP permite enviar el mensaje y transferirlo entre servidores, DNS puede ayudar a localizar el servidor de correo del destinatario mediante un registro MX y, finalmente, el receptor accede a su buzón mediante IMAP o POP3.
  </figcaption>
</figure>

---

## Correo web y protocolos de correo

Actualmente es muy habitual consultar el correo desde un navegador.

Por ejemplo:

```text
NAVEGADOR
   ↓
SERVICIO DE CORREO WEB
```

Desde el punto de vista del usuario puede parecer diferente a utilizar un programa de correo instalado.

Sin embargo, detrás del servicio siguen existiendo servidores y protocolos que permiten transportar y gestionar los mensajes.

No debemos confundir:

```text
LA INTERFAZ QUE UTILIZA EL USUARIO
```

con:

```text
LOS PROTOCOLOS UTILIZADOS POR
LOS SISTEMAS DE CORREO
```

---

## Añadimos el correo a nuestra tabla

Nuestra tabla de protocolos continúa creciendo:

| Protocolo | Función principal | Puerto habitual |
|-----------|------------------|:---------------:|
| DHCP | Configuración automática | UDP 67/68 |
| DNS | Resolución de nombres | 53 |
| HTTP | Acceso web | TCP 80 |
| HTTPS | Acceso web seguro | TCP 443 |
| SMTP | Envío de correo | TCP 25 |
| POP3 | Acceso/descarga de correo | TCP 110 |
| IMAP | Acceso y sincronización de correo | TCP 143 |

Una forma sencilla de estudiar los protocolos de correo es:

```text
             CORREO
                │
       ┌────────┴─────────┐
       │                  │
     ENVIAR             RECIBIR/
       │                CONSULTAR
       │                  │
      SMTP          ┌─────┴─────┐
                    │           │
                   POP3        IMAP
                    │           │
                DESCARGA   SINCRONIZACIÓN
```

---

!!! question "Comprueba lo aprendido"

    Relaciona cada situación con **SMTP, POP3 o IMAP**.

    **A.** Ana pulsa el botón *Enviar* en su programa de correo.

    **B.** Un servidor de correo envía un mensaje a otro servidor de correo.

    **C.** Pedro descarga sus mensajes desde el servidor.

    **D.** Laura consulta la misma cuenta desde su portátil y su teléfono y quiere mantener los mensajes sincronizados.

    **E.** Un mensaje debe salir del cliente de correo y llegar al servidor.

    Después responde:

    1. ¿Qué protocolo utilizamos principalmente para enviar correo?
    2. ¿Cuál es su puerto tradicional?
    3. ¿Qué puerto utiliza POP3?
    4. ¿Qué puerto utiliza IMAP?
    5. ¿Cuál resulta especialmente adecuado para mantener el correo sincronizado entre varios dispositivos?
    6. ¿Para qué sirven los registros MX de DNS de forma básica?

---

!!! abstract "🛠️ A continuación..."

    Ya conocemos protocolos para:

    ```text
    DHCP  → configurar un equipo

    DNS   → resolver nombres

    HTTP
    HTTPS → acceder a la Web

    SMTP  → enviar correo

    POP3
    IMAP  → acceder al correo
    ```

    Nos queda otro servicio muy habitual:

    ```text
    TRANSFERIR ARCHIVOS
    ```

    En el siguiente apartado estudiaremos principalmente:

    ```text
    FTP
    ```

    y veremos también por qué existen alternativas seguras como:

    ```text
    SFTP
    ```

## 12.12 Transferencia de archivos: FTP y SFTP

Hasta ahora hemos estudiado protocolos que permiten:

```text
DHCP  → obtener configuración de red

DNS   → resolver nombres

HTTP
HTTPS → acceder a contenidos web

SMTP  → enviar correo

POP3
IMAP  → acceder al correo
```

Otro servicio muy habitual en las redes es la:

```text
TRANSFERENCIA DE ARCHIVOS
```

Por ejemplo, podemos necesitar:

```text
Subir archivos a un servidor

Descargar archivos de un servidor

Compartir documentos

Actualizar los archivos de una página web

Realizar copias de determinados archivos
```

Uno de los protocolos utilizados tradicionalmente para realizar estas operaciones es:

```text
FTP
```

---

## ¿Qué es FTP?

**FTP** significa:

```text
File Transfer Protocol
```

o:

```text
Protocolo de transferencia de archivos
```

Su función es permitir la transferencia de archivos entre un cliente y un servidor a través de una red.

El funcionamiento básico sigue nuevamente el modelo cliente-servidor:

```text
CLIENTE FTP
     │
     │
     │ transferencia
     │ de archivos
     │
     ↕
SERVIDOR FTP
```

El cliente puede realizar operaciones como:

```text
SUBIR
un archivo
     ↓
SERVIDOR
```

o:

```text
SERVIDOR
     ↓
DESCARGAR
un archivo
```

Por tanto, FTP permite transferencias en ambos sentidos.

---

## Cliente FTP y servidor FTP

Para utilizar FTP necesitamos normalmente:

```text
CLIENTE FTP
```

y:

```text
SERVIDOR FTP
```

El servidor proporciona el servicio y almacena los archivos.

El cliente se conecta al servidor para realizar las operaciones permitidas.

Por ejemplo:

```text
              RED

CLIENTE FTP                SERVIDOR FTP
192.168.1.20               192.168.1.50

     │                          │
     │───── conexión ──────────>│
     │                          │
     │<──── lista archivos ─────│
     │                          │
     │──── subir archivo ──────>│
     │                          │
     │<── descargar archivo ────│
     │                          │
```

<figure class="figura-libro">
  <img
    src="../../assets/images/parte3/capitulo12/figura12_16.png"
    alt="Transferencia de archivos entre un cliente FTP y un servidor FTP"
  >
  <figcaption>
    <strong>Figura 12.16.</strong> Transferencia de archivos mediante FTP. El cliente FTP puede conectarse al servidor para consultar su contenido y, si dispone de los permisos necesarios, subir o descargar archivos. FTP utiliza principalmente el puerto TCP 21 para la conexión de control.
  </figcaption>
</figure>

---

## Identificación del usuario

Un servidor FTP puede solicitar que el usuario se identifique.

Por ejemplo:

```text
Usuario: alumno
Contraseña: ********
```

Una vez identificado, el servidor puede permitir determinadas operaciones.

Por ejemplo:

```text
Ver archivos
Descargar archivos
Subir archivos
Crear carpetas
Eliminar archivos
```

Los permisos dependerán de cómo esté configurado el servidor.

!!! note "No todos los usuarios tienen los mismos permisos"

    Un servidor puede permitir que determinados usuarios únicamente descarguen archivos mientras que otros también puedan subirlos o modificarlos.

    El servidor controla qué operaciones están permitidas.

---

## Los puertos de FTP

FTP presenta una característica particular.

Tradicionalmente utiliza dos conexiones diferenciadas:

```text
CONEXIÓN DE CONTROL
```

y:

```text
CONEXIÓN DE DATOS
```

Para nuestro nivel no necesitamos estudiar en profundidad cómo funcionan estas conexiones.

Debemos conocer principalmente:

```text
FTP control → TCP 21
```

El puerto:

```text
TCP 20
```

se asocia tradicionalmente a la conexión de datos en el funcionamiento activo de FTP.

Por tanto, en nuestra tabla utilizaremos:

```text
FTP
 ↓
TCP
 ↓
20 / 21
```

Pero el puerto que debemos relacionar especialmente con el servicio FTP es:

```text
21
```

!!! tip "FTP y el puerto 21"

    Para comenzar, recuerda:

    ```text
    FTP → transferencia de archivos

    Puerto principal → TCP 21
    ```

---

## Un ejemplo de transferencia

Supongamos que tenemos:

```text
PC del alumno
192.168.1.20
```

y:

```text
Servidor FTP
192.168.1.50
```

En el servidor existe:

```text
/apuntes
    tema1.pdf
    tema2.pdf
    ejercicio.txt
```

El alumno podría conectarse al servidor y descargar:

```text
tema1.pdf
```

Conceptualmente:

```text
PC                         SERVIDOR FTP

│                              │
│──── Solicito tema1.pdf ─────>│
│                              │
│<────── tema1.pdf ────────────│
│                              │

Archivo descargado
```

También podría subir un archivo si dispone de permisos:

```text
PC                         SERVIDOR FTP

│                              │
│────── practica.txt ─────────>│
│                              │

          Archivo subido
```

---

## El problema de seguridad de FTP

FTP es un protocolo antiguo y su funcionamiento original no fue diseñado para proteger mediante cifrado toda la información intercambiada.

Esto puede afectar a información como:

```text
Usuario
Contraseña
Datos transferidos
```

Por tanto, cuando necesitamos realizar transferencias de forma segura debemos utilizar soluciones que proporcionen protección mediante cifrado.

Una de las opciones que podemos encontrar es:

```text
SFTP
```

---

## ¿Qué es SFTP?

**SFTP** significa:

```text
SSH File Transfer Protocol
```

Es un protocolo utilizado para realizar transferencias de archivos de forma segura.

Podemos representar la diferencia básica como:

```text
FTP
 ↓
TRANSFERENCIA
DE ARCHIVOS


SFTP
 ↓
TRANSFERENCIA
SEGURA DE ARCHIVOS
```

SFTP protege la comunicación mediante SSH.

Para este nivel no necesitamos conocer cómo funciona internamente SSH.

Nos basta con comprender:

```text
SFTP
 ↓
comunicación cifrada
 ↓
mayor protección
```

---

## SFTP no es simplemente FTP con una S

Aunque sus nombres son parecidos:

```text
FTP

SFTP
```

no debemos pensar que SFTP es simplemente FTP al que se ha añadido seguridad.

SFTP funciona utilizando:

```text
SSH
```

y es diferente del protocolo FTP tradicional.

Esta distinción es importante.

!!! warning "FTP y SFTP son protocolos diferentes"

    No debemos interpretar:

    ```text
    SFTP = FTP + seguridad
    ```

    como si se tratara exactamente del mismo protocolo.

    Para nuestro nivel basta con recordar:

    ```text
    FTP  → transferencia de archivos

    SFTP → transferencia segura mediante SSH
    ```

---

## El puerto de SFTP

SFTP utiliza normalmente el mismo puerto que SSH:

```text
TCP 22
```

Por tanto:

```text
FTP
 ↓
TCP 21
```

frente a:

```text
SFTP
 ↓
TCP 22
```

Podemos resumir:

| Protocolo | Función | Puerto principal |
|-----------|---------|:----------------:|
| FTP | Transferencia de archivos | TCP 21 |
| SFTP | Transferencia segura de archivos | TCP 22 |

---

## FTP frente a SFTP

Para nuestro nivel, la comparación fundamental es:

```text
FTP
│
├── Transferencia de archivos
├── Puerto principal 21
└── No proporciona por sí mismo
    cifrado de toda la comunicación
```

frente a:

```text
SFTP
│
├── Transferencia de archivos
├── Utiliza SSH
├── Puerto 22
└── Comunicación cifrada
```

Por tanto, cuando necesitamos proteger la transferencia:

```text
FTP                  SFTP
 │                     │
 ↓                     ↓
Sin cifrado         Cifrado
proporcionado       mediante SSH
por FTP
```

<figure class="figura-libro">
  <img
    src="../../assets/images/parte3/capitulo12/figura12_17.png"
    alt="Comparación entre los protocolos FTP y SFTP"
  >
  <figcaption>
    <strong>Figura 12.17.</strong> Comparación entre FTP y SFTP. FTP utiliza principalmente el puerto TCP 21 y no proporciona por sí mismo cifrado de toda la comunicación, mientras que SFTP utiliza SSH, normalmente mediante el puerto TCP 22, para realizar transferencias de archivos cifradas.
  </figcaption>
</figure>

---

## No debemos confundir FTP con HTTP

Tanto FTP como HTTP pueden provocar que un archivo llegue desde un servidor hasta nuestro ordenador.

Sin embargo, son protocolos diseñados con objetivos diferentes.

Cuando descargamos, por ejemplo, un PDF desde una página web:

```text
NAVEGADOR
    │
    │ HTTP / HTTPS
    ↓
SERVIDOR WEB
    │
    ↓
archivo.pdf
```

no significa necesariamente que estemos utilizando FTP.

El propio protocolo:

```text
HTTP / HTTPS
```

puede transportar ese archivo.

FTP está específicamente orientado a proporcionar un servicio de transferencia y gestión de archivos entre clientes y servidores.

!!! note "Descargar un archivo no significa utilizar FTP"

    Si pulsamos:

    ```text
    Descargar
    ```

    en una página web, normalmente el archivo puede llegar mediante HTTP o HTTPS.

    Debemos distinguir entre:

    ```text
    ACCIÓN DEL USUARIO
    ```

    y:

    ```text
    PROTOCOLO UTILIZADO
    ```

---

## Añadimos FTP y SFTP a nuestra tabla

Ya podemos ampliar nuestra tabla de protocolos:

| Protocolo | Función principal | Puerto habitual |
|-----------|------------------|:---------------:|
| DHCP | Configuración automática | UDP 67/68 |
| DNS | Resolución de nombres | 53 |
| HTTP | Acceso web | TCP 80 |
| HTTPS | Acceso web seguro | TCP 443 |
| SMTP | Envío de correo | TCP 25 |
| POP3 | Acceso/descarga de correo | TCP 110 |
| IMAP | Acceso y sincronización de correo | TCP 143 |
| FTP | Transferencia de archivos | TCP 21 |
| SFTP | Transferencia segura de archivos | TCP 22 |

---

## 12.13 Elegir el protocolo adecuado

Ya conocemos los principales protocolos de aplicación que estudiaremos en este capítulo.

Ahora podemos responder a una pregunta muy sencilla:

> **¿Qué protocolo necesito en cada situación?**

### Obtener automáticamente la configuración de red

```text
DHCP
```

### Convertir un nombre en una dirección IP

```text
DNS
```

### Visitar una página web

```text
HTTP / HTTPS
```

### Enviar correo electrónico

```text
SMTP
```

### Acceder al correo recibido

```text
POP3 / IMAP
```

### Transferir archivos

```text
FTP / SFTP
```

Podemos resumir todo lo aprendido hasta ahora:

```text
¿QUÉ QUIERO HACER?
        │
        ├── Obtener configuración ──→ DHCP
        │
        ├── Resolver un nombre ─────→ DNS
        │
        ├── Navegar por la Web ─────→ HTTP / HTTPS
        │
        ├── Enviar correo ──────────→ SMTP
        │
        ├── Consultar correo ───────→ POP3 / IMAP
        │
        └── Transferir archivos ────→ FTP / SFTP
```

Esta relación entre **necesidad, servicio y protocolo** es uno de los objetivos principales del capítulo.

---

!!! question "Comprueba lo aprendido"

    Indica qué protocolo utilizarías principalmente en cada situación:

    **A.** Un alumno quiere subir `practica.pdf` a un servidor de archivos.

    **B.** Queremos que la transferencia anterior esté protegida mediante SSH.

    **C.** Un ordenador necesita obtener automáticamente su dirección IP.

    **D.** Un navegador necesita conocer la dirección IP de `www.empresa.local`.

    **E.** Un usuario quiere enviar un correo.

    **F.** Un usuario quiere mantener su correo sincronizado entre el móvil y el ordenador.

    **G.** Un navegador solicita una página web utilizando una comunicación cifrada.

    Después responde:

    1. ¿Para qué sirve FTP?
    2. ¿Cuál es el puerto principal de FTP?
    3. ¿Qué protocolo podemos utilizar para realizar una transferencia segura mediante SSH?
    4. ¿Qué puerto utiliza habitualmente SFTP?
    5. ¿FTP y SFTP son exactamente el mismo protocolo?
    6. Si descargamos un PDF desde una página HTTPS, ¿significa necesariamente que estamos utilizando FTP?

---

!!! abstract "🛠️ A continuación..."

    Ya conocemos todos los protocolos principales de este capítulo:

    ```text
    DHCP
    DNS
    HTTP / HTTPS
    SMTP
    POP3 / IMAP
    FTP / SFTP
    ```

    Hasta ahora los hemos estudiado principalmente por separado.

    En el siguiente apartado veremos algo especialmente importante:

    > **En una comunicación real pueden intervenir varios protocolos de aplicación para completar una única tarea del usuario.**

    Uniremos todos los conceptos antes de realizar la práctica final del capítulo.

## 12.14 Los protocolos trabajando juntos

Hasta ahora hemos estudiado diferentes protocolos de la capa de aplicación por separado.

Sabemos relacionar cada uno con una función:

```text
DHCP       → obtener la configuración de red

DNS        → resolver nombres

HTTP/HTTPS → acceder a contenidos web

SMTP       → enviar correo electrónico

POP3/IMAP  → acceder al correo electrónico

FTP/SFTP   → transferir archivos
```

Sin embargo, cuando utilizamos una red real, estos protocolos no trabajan necesariamente de forma aislada.

Una tarea aparentemente sencilla puede necesitar la participación de **varios protocolos**.

Veamos algunos ejemplos.

---

## Ejemplo 1. Encender el ordenador y visitar una página web

Imaginemos que un alumno llega al aula, enciende su ordenador y abre una página web.

Desde su punto de vista únicamente ha realizado:

```text
ENCENDER EL PC
      ↓
ABRIR EL NAVEGADOR
      ↓
ESCRIBIR UNA DIRECCIÓN
      ↓
VER LA PÁGINA
```

Pero en la red han ocurrido más cosas.

### Paso 1. Obtener la configuración de red

El ordenador está configurado para obtener automáticamente su configuración.

Utiliza:

```text
DHCP
```

El servidor DHCP puede proporcionarle:

```text
IP:       192.168.10.25
Máscara:  255.255.255.0
Gateway:  192.168.10.1
DNS:      192.168.10.10
```

Ahora el equipo ya dispone de los parámetros necesarios para utilizar la red.

---

### Paso 2. El usuario escribe un nombre

El alumno escribe en el navegador:

```text
https://www.empresa.local
```

Pero el ordenador necesita conocer la dirección IP correspondiente a:

```text
www.empresa.local
```

Para averiguarla utiliza:

```text
DNS
```

Por ejemplo:

```text
www.empresa.local
        ↓
       DNS
        ↓
192.168.10.50
```

---

### Paso 3. El navegador solicita la página

Ahora el navegador ya conoce la dirección IP del servidor.

Puede utilizar:

```text
HTTPS
```

para solicitar el contenido.

Por ejemplo:

```text
GET /index.html
```

El servidor puede responder:

```text
200 OK
```

y enviar el recurso solicitado.

---

### El proceso completo

Podemos unir los tres pasos:

```text
PC
│
│ 1. DHCP
↓
Obtiene:
IP
Máscara
Gateway
DNS
│
│
↓
Usuario escribe
www.empresa.local
│
│ 2. DNS
↓
Obtiene:
192.168.10.50
│
│
↓
Navegador
│
│ 3. HTTPS
↓
GET /index.html
│
↓
SERVIDOR WEB
│
↓
200 OK + contenido
```

<figure class="figura-libro">
  <img
    src="../../assets/images/parte3/capitulo12/figura12_18.png"
    alt="Protocolos DHCP, DNS y HTTPS que intervienen al acceder a una página web"
  >
  <figcaption>
    <strong>Figura 12.18.</strong> Protocolos que intervienen al acceder a una página web. DHCP proporciona la configuración de red, DNS obtiene la dirección IP asociada al nombre y HTTPS permite solicitar de forma segura el contenido al servidor web.
  </figcaption>
</figure>

Por tanto, para una acción tan sencilla como visitar una página pueden haber intervenido:

```text
DHCP + DNS + HTTPS
```

---

## Ejemplo 2. Enviar un correo electrónico

Supongamos ahora que el alumno quiere enviar un correo electrónico.

Desde el punto de vista del usuario:

```text
ESCRIBIR MENSAJE
       ↓
PULSAR ENVIAR
```

Pero detrás de esa acción pueden intervenir diferentes servicios.

El equipo ya debe disponer de una configuración de red:

```text
DHCP
```

Puede ser necesario resolver nombres:

```text
DNS
```

y para enviar el mensaje interviene:

```text
SMTP
```

Podemos representarlo de forma simplificada:

```text
PC
 ↓
DHCP
 ↓
Configuración de red
 ↓
DNS
 ↓
Localización de servicios
 ↓
SMTP
 ↓
SERVIDOR DE CORREO
 ↓
Mensaje enviado
```

Si el mensaje debe llegar a otro servidor de correo, DNS también puede ayudar a localizar el servidor encargado del dominio mediante información como los registros:

```text
MX
```

---

## Ejemplo 3. Consultar el correo desde varios dispositivos

Supongamos que una usuaria tiene configurada la misma cuenta en:

```text
PORTÁTIL

MÓVIL

TABLET
```

Quiere consultar los mensajes desde cualquiera de ellos y mantener el estado del correo sincronizado.

Para ello puede utilizar:

```text
IMAP
```

De forma simplificada:

```text
              SERVIDOR
              DE CORREO
                  │
             IMAP│
          ┌───────┼───────┐
          ↓       ↓       ↓
      PORTÁTIL   MÓVIL   TABLET
```

Los dispositivos acceden al mismo buzón almacenado en el servidor.

Así vemos nuevamente que el protocolo utilizado depende de la acción:

```text
Enviar correo
     ↓
    SMTP

Consultar y sincronizar
     ↓
    IMAP
```

---

## Ejemplo 4. Transferir un archivo de forma segura

Supongamos ahora que un administrador necesita subir un archivo a un servidor.

Podría utilizar:

```text
SFTP
```

Pero antes de poder realizar la transferencia, su ordenador necesita disponer de una configuración IP válida.

Si utiliza configuración automática:

```text
DHCP
```

puede proporcionársela.

Si el administrador utiliza un nombre como:

```text
archivos.empresa.local
```

en lugar de escribir directamente una dirección IP, también será necesario:

```text
DNS
```

Finalmente:

```text
SFTP
```

permitirá realizar la transferencia segura.

Por tanto:

```text
DHCP
 ↓
Configuración
 ↓
DNS
 ↓
Nombre → IP
 ↓
SFTP
 ↓
Transferencia segura
```

---

## Una misma red, muchos servicios

Imaginemos ahora una pequeña red de una empresa:

```text
                  INTERNET
                     │
                   ROUTER
                     │
                   SWITCH
             ┌───────┼────────┐
             │       │        │
            PC      PC     SERVIDORES
                              │
                    ┌─────────┼─────────┐
                    │         │         │
                   DNS       WEB      CORREO
```

<figure class="figura-libro">
  <img
    src="../../assets/images/parte3/capitulo12/figura12_19.png"
    alt="Servicios de aplicación disponibles en una red local"
  >
  <figcaption>
    <strong>Figura 12.19.</strong> Servicios de aplicación en una red. Los clientes utilizan la misma infraestructura para acceder a diferentes servicios, como DHCP, DNS, Web, correo electrónico y transferencia de archivos.
  </figcaption>
</figure>

Los usuarios pueden realizar distintas tareas utilizando la misma infraestructura de red.

Por ejemplo:

| Acción del usuario | Protocolo principal |
|--------------------|---------------------|
| Obtener configuración | DHCP |
| Resolver un nombre | DNS |
| Visitar una web | HTTP/HTTPS |
| Enviar un correo | SMTP |
| Consultar correo | POP3/IMAP |
| Transferir archivos | FTP/SFTP |

Lo importante es comprender que:

> **Los protocolos proporcionan servicios diferentes, pero pueden colaborar para completar una misma tarea.**

---

## El mismo servidor puede proporcionar varios servicios

También debemos recordar algo que vimos al principio del capítulo.

No necesitamos necesariamente un ordenador físico diferente para cada servicio.

Un servidor podría proporcionar:

```text
┌────────────────────────────┐
│          SERVIDOR          │
│       192.168.10.50        │
│                            │
│  DNS                :53    │
│  HTTP               :80    │
│  HTTPS              :443   │
│  FTP                :21    │
│  SSH / SFTP         :22    │
│                            │
└────────────────────────────┘
```

La dirección IP permite identificar:

```text
EL EQUIPO
```

mientras que los puertos permiten identificar:

```text
LOS SERVICIOS
```

Por ejemplo:

```text
192.168.10.50:80
        ↓
      HTTP

192.168.10.50:443
        ↓
      HTTPS

192.168.10.50:21
        ↓
       FTP
```

---

## De la acción del usuario al protocolo

Llegados a este punto, debemos ser capaces de razonar en sentido contrario.

En lugar de preguntar:

```text
¿Para qué sirve DNS?
```

podemos plantear:

```text
Necesito convertir un nombre
en una dirección IP.

¿Qué protocolo necesito?
```

Respuesta:

```text
DNS
```

Este tipo de razonamiento es mucho más importante que memorizar una lista de nombres y números.

Veamos algunos ejemplos:

```text
Necesito una IP automáticamente
             ↓
            DHCP


Necesito saber la IP de un nombre
             ↓
             DNS


Quiero visitar una web segura
             ↓
            HTTPS


Quiero enviar un correo
             ↓
            SMTP


Quiero sincronizar mi correo
             ↓
            IMAP


Quiero transferir archivos
de forma segura
             ↓
            SFTP
```

---

## Nuestro mapa de protocolos

Ya podemos construir un pequeño mapa con todo lo estudiado:

```text
                    RED
                     │
       ┌─────────────┼─────────────┐
       │             │             │
 CONFIGURACIÓN    NOMBRES       SERVICIOS
       │             │             │
      DHCP           DNS      ┌────┼─────────┐
                              │    │         │
                             WEB CORREO   ARCHIVOS
                              │    │         │
                         HTTP/HTTPS │     FTP/SFTP
                                   │
                           ┌───────┼───────┐
                           │       │       │
                         SMTP    POP3    IMAP
```

No debemos estudiar este esquema únicamente como algo que hay que memorizar.

Debemos utilizarlo para responder:

```text
¿QUÉ NECESITO HACER?
        ↓
¿QUÉ SERVICIO NECESITO?
        ↓
¿QUÉ PROTOCOLO LO PROPORCIONA?
```

---

## Protocolos y puertos: resumen

Podemos reunir ahora los principales protocolos del capítulo:

| Protocolo | Función | Puerto habitual |
|-----------|---------|:---------------:|
| DHCP | Configuración automática | UDP 67/68 |
| DNS | Resolución de nombres | 53 |
| HTTP | Acceso web | TCP 80 |
| HTTPS | Acceso web seguro | TCP 443 |
| SMTP | Envío de correo | TCP 25 |
| POP3 | Acceso/descarga de correo | TCP 110 |
| IMAP | Consulta y sincronización de correo | TCP 143 |
| FTP | Transferencia de archivos | TCP 21 |
| SFTP | Transferencia segura de archivos | TCP 22 |

<figure class="figura-libro">
  <img
    src="../../assets/images/parte3/capitulo12/figura12_20.png"
    alt="Mapa de los principales protocolos de la capa de aplicación y sus puertos"
  >
  <figcaption>
    <strong>Figura 12.20.</strong> Mapa de los principales protocolos estudiados en el capítulo, agrupados según el servicio que proporcionan: configuración de red, resolución de nombres, Web, correo electrónico y transferencia de archivos.
  </figcaption>
</figure>

Una buena forma de estudiarlos es agruparlos por su función:

```text
CONFIGURACIÓN
└── DHCP

NOMBRES
└── DNS

WEB
├── HTTP
└── HTTPS

CORREO
├── SMTP
├── POP3
└── IMAP

ARCHIVOS
├── FTP
└── SFTP
```

---

!!! question "¿Qué está ocurriendo?"

    Un alumno conecta su portátil a la red del aula.

    El equipo recibe:

    ```text
    IP:       192.168.50.125
    Máscara:  255.255.255.0
    Gateway:  192.168.50.1
    DNS:      192.168.50.10
    ```

    Después escribe:

    ```text
    https://www.aula.local
    ```

    El servidor DNS responde:

    ```text
    www.aula.local → 192.168.50.20
    ```

    Finalmente el navegador recibe:

    ```text
    200 OK
    ```

    Responde:

    1. ¿Qué protocolo ha proporcionado la configuración al portátil?
    2. ¿Qué protocolo ha convertido `www.aula.local` en una dirección IP?
    3. ¿Qué dirección IP tiene el servidor web?
    4. ¿Qué protocolo utiliza el navegador para acceder al servidor?
    5. ¿Qué puerto habitual utilizará ese protocolo?
    6. ¿Qué significa `200 OK`?
    7. Ordena cronológicamente:

    ```text
    HTTPS
    DNS
    DHCP
    ```

---

!!! question "Elige el protocolo"

    Relaciona cada acción con el protocolo más adecuado:

    | Acción | Protocolo |
    |--------|-----------|
    | Obtener una dirección IP automáticamente | ? |
    | Resolver `servidor.aula.local` | ? |
    | Visitar una web segura | ? |
    | Enviar un correo | ? |
    | Descargar correo mediante POP | ? |
    | Sincronizar correo entre varios dispositivos | ? |
    | Transferir archivos mediante FTP | ? |
    | Transferir archivos mediante SSH | ? |

    Utiliza:

    ```text
    DHCP
    DNS
    HTTPS
    SMTP
    POP3
    IMAP
    FTP
    SFTP
    ```

---

!!! abstract "🛠️ A continuación..."

    Ya sabemos identificar los principales protocolos de aplicación y comprender cómo pueden colaborar.

    Ahora vamos a comprobarlo en una red simulada.

    En la siguiente parte construiremos una pequeña red en:

    ```text
    Cisco Packet Tracer
    ```

    y configuraremos progresivamente servicios como:

    ```text
    DHCP
    DNS
    HTTP
    CORREO
    FTP
    ```

    De esta forma podremos observar en funcionamiento los protocolos que hemos estudiado durante el capítulo.

## 12.15 Práctica guiada: servicios de aplicación en Packet Tracer

Ha llegado el momento de comprobar en una red simulada los protocolos que hemos estudiado durante el capítulo.

Utilizaremos:

```text
Cisco Packet Tracer
```

para construir una pequeña red en la que funcionarán diferentes servicios de aplicación.

Durante la práctica configuraremos:

```text
DHCP
DNS
HTTP
CORREO
FTP
```

El objetivo no es realizar una configuración compleja.

Queremos observar cómo un cliente utiliza diferentes servicios de red y relacionar cada acción con el protocolo correspondiente.

---

## Objetivos de la práctica

Al terminar deberás ser capaz de:

- configurar una pequeña red local;
- proporcionar automáticamente la configuración IPv4 mediante DHCP;
- resolver nombres mediante DNS;
- acceder a una página utilizando HTTP;
- enviar y recibir correo electrónico;
- transferir un archivo mediante FTP;
- identificar qué protocolo interviene en cada operación.

---

## Topología

Construiremos la siguiente red:

```text
                         ┌──────────────┐
                         │   SERVER0    │
                         │              │
                         │ DHCP         │
                         │ DNS          │
                         │ HTTP         │
                         │ EMAIL        │
                         │ FTP          │
                         └──────┬───────┘
                                │
                                │
                         ┌──────┴───────┐
                         │    SWITCH    │
                         └───┬──────┬───┘
                             │      │
                         ┌───┘      └───┐
                         │              │
                      ┌──┴──┐        ┌──┴──┐
                      │ PC0 │        │ PC1 │
                      └─────┘        └─────┘
```

<figure class="figura-libro">
  <img
    src="../../assets/images/parte3/capitulo12/figura12_21.png"
    alt="Topología de la práctica de servicios de aplicación en Packet Tracer"
  >
  <figcaption>
    <strong>Figura 12.21.</strong> Topología de la práctica en Packet Tracer. Un único servidor con dirección 192.168.10.10 proporciona los servicios DHCP, DNS, HTTP, correo electrónico y FTP a los clientes PC0 y PC1 conectados mediante un switch.
  </figcaption>
</figure>

Utilizaremos un único servidor para proporcionar varios servicios.

Esto nos permitirá comprobar algo que ya hemos aprendido:

> **Un mismo equipo puede proporcionar varios servicios de red simultáneamente.**

---

## 1. Crear la topología

Abre Cisco Packet Tracer y crea un proyecto nuevo.

Añade los siguientes dispositivos:

```text
2 PC
1 Switch
1 Server
```

Puedes utilizar:

```text
PC-PT
2960
Server-PT
```

Conecta los tres dispositivos al switch mediante conexiones Ethernet.

La topología debe quedar aproximadamente:

```text
PC0 ─────┐
         │
       SWITCH ───── SERVER0
         │
PC1 ─────┘
```

Espera unos segundos hasta que los enlaces aparezcan activos.

---

## 2. Configurar el servidor

Nuestro servidor tendrá una dirección IPv4 estática.

Utilizaremos:

```text
IP:       192.168.10.10
Máscara:  255.255.255.0
```

Como todos los equipos estarán en la misma red y no utilizaremos un router en esta práctica, no necesitamos configurar una puerta de enlace para realizar las comunicaciones internas.

Selecciona:

```text
Server0
```

y accede a:

```text
Desktop
   ↓
IP Configuration
```

Configura:

```text
IP Address:   192.168.10.10

Subnet Mask:  255.255.255.0
```

El servidor ya tiene una dirección conocida dentro de nuestra red.

---

## 3. Configurar el servicio DHCP

Ahora queremos que PC0 y PC1 obtengan automáticamente su configuración.

Selecciona:

```text
Server0
```

y accede a:

```text
Services
   ↓
DHCP
```

Activa el servicio:

```text
DHCP → On
```

Crea un pool con una configuración similar a:

```text
Pool Name:        RED_AULA

Default Gateway:  0.0.0.0

DNS Server:       192.168.10.10

Start IP Address: 192.168.10.100

Subnet Mask:      255.255.255.0

Maximum Users:    50
```

Guarda o añade el pool.

El servidor podrá entregar direcciones a partir de:

```text
192.168.10.100
```

Por ejemplo:

```text
PC0 → 192.168.10.100

PC1 → 192.168.10.101
```

Las direcciones concretas pueden variar.

---

## 4. Configurar los clientes mediante DHCP

Selecciona:

```text
PC0
```

y accede a:

```text
Desktop
   ↓
IP Configuration
```

Selecciona:

```text
DHCP
```

Después de unos instantes el equipo debería recibir automáticamente su configuración.

Comprueba:

```text
IP Address
Subnet Mask
DNS Server
```

Repite exactamente el mismo procedimiento en:

```text
PC1
```

Los dos ordenadores deben tener direcciones diferentes dentro de:

```text
192.168.10.0/24
```

!!! question "Comprueba"

    ¿Has escrito manualmente la dirección IPv4 de PC0?

    ```text
    NO
    ```

    Entonces:

    **¿qué protocolo ha permitido que PC0 obtenga automáticamente su dirección?**

---

## 5. Comprobar la conectividad

Antes de configurar más servicios debemos comprobar que los dispositivos pueden comunicarse.

En PC0 abre:

```text
Desktop
   ↓
Command Prompt
```

Ejecuta:

```cmd
ipconfig
```

Observa la configuración recibida.

Después ejecuta:

```cmd
ping 192.168.10.10
```

Estamos intentando comunicarnos con el servidor.

Si todo está correctamente configurado deberemos recibir respuestas.

También puedes comprobar la comunicación con PC1 utilizando la dirección que haya recibido mediante DHCP.

!!! tip "Comprueba antes de continuar"

    Si el `ping` al servidor no funciona, no continúes configurando DNS o HTTP.

    Primero comprueba:

    ```text
    Cableado
    Dirección IP
    Máscara
    DHCP
    ```

---

## 6. Configurar el servicio DNS

Ahora queremos acceder al servidor utilizando un nombre:

```text
www.aula.local
```

en lugar de:

```text
192.168.10.10
```

Selecciona:

```text
Server0
```

y accede a:

```text
Services
   ↓
DNS
```

Activa:

```text
DNS Service → On
```

Crea un registro:

```text
Name:

www.aula.local
```

```text
Type:

A Record
```

```text
Address:

192.168.10.10
```

Añade el registro.

Nuestro servidor DNS ya conoce:

```text
www.aula.local
        ↓
192.168.10.10
```

---

## 7. Comprobar DNS

Desde PC0 abre:

```text
Desktop
   ↓
Command Prompt
```

Prueba:

```cmd
ping www.aula.local
```

Si DNS funciona correctamente, Packet Tracer debe resolver el nombre y utilizar:

```text
192.168.10.10
```

Observa que hemos escrito:

```text
www.aula.local
```

pero la comunicación finalmente utiliza una dirección IP.

Eso es precisamente lo que hemos estudiado:

```text
NOMBRE
  ↓
 DNS
  ↓
DIRECCIÓN IP
```

---

## 8. Configurar el servidor web

Selecciona nuevamente:

```text
Server0
```

y accede a:

```text
Services
   ↓
HTTP
```

Comprueba que:

```text
HTTP → On
```

Packet Tracer proporciona una página web de ejemplo.

Podemos utilizarla directamente o modificar el archivo:

```text
index.html
```

Por ejemplo, podemos introducir un contenido sencillo:

```html
<h1>Servidor del aula de Redes Locales</h1>

<p>El servicio HTTP funciona correctamente.</p>

<p>Servidor: www.aula.local</p>
```

Guarda los cambios.

---

## 9. Acceder a la página mediante su dirección IP

Desde PC0 abre:

```text
Desktop
   ↓
Web Browser
```

Escribe:

```text
http://192.168.10.10
```

La página del servidor debería aparecer.

En este caso hemos utilizado directamente:

```text
DIRECCIÓN IP
```

por lo que no necesitamos resolver el nombre mediante DNS.

---

## 10. Acceder utilizando DNS

Ahora escribe:

```text
http://www.aula.local
```

La página debería aparecer nuevamente.

Pero esta vez el proceso es diferente:

```text
www.aula.local
       ↓
      DNS
       ↓
192.168.10.10
       ↓
      HTTP
       ↓
Página web
```

Aquí estamos viendo dos protocolos trabajando conjuntamente:

```text
DNS + HTTP
```

!!! question "Piensa"

    ¿Qué ocurriría si HTTP funcionase correctamente pero el servidor DNS estuviera desactivado?

    Prueba a desactivar temporalmente DNS y compara:

    ```text
    http://192.168.10.10
    ```

    con:

    ```text
    http://www.aula.local
    ```

    Después vuelve a activar DNS.

---

## 11. Configurar el servicio de correo

Ahora utilizaremos el mismo servidor para proporcionar correo electrónico.

Selecciona:

```text
Server0
```

y accede a:

```text
Services
   ↓
EMAIL
```

Activa:

```text
SMTP → On

POP3 → On
```

Configura como dominio:

```text
aula.local
```

Crea dos usuarios:

```text
Usuario: ana
Contraseña: ana123
```

y:

```text
Usuario: pedro
Contraseña: pedro123
```

Tendremos:

```text
ana@aula.local

pedro@aula.local
```

---

## 12. Configurar el correo de Ana

Utilizaremos PC0 para Ana.

Selecciona:

```text
PC0
```

y accede a:

```text
Desktop
   ↓
Email
```

Configura aproximadamente:

```text
Your Name:
Ana

Email Address:
ana@aula.local

Incoming Mail Server:
192.168.10.10

Outgoing Mail Server:
192.168.10.10

User Name:
ana

Password:
ana123
```

Guarda la configuración.

---

## 13. Configurar el correo de Pedro

Utilizaremos PC1 para Pedro.

Accede a:

```text
PC1
   ↓
Desktop
   ↓
Email
```

Configura:

```text
Your Name:
Pedro

Email Address:
pedro@aula.local

Incoming Mail Server:
192.168.10.10

Outgoing Mail Server:
192.168.10.10

User Name:
pedro

Password:
pedro123
```

Guarda la configuración.

---

## 14. Enviar un correo

Desde PC0 abre el cliente de correo y crea un mensaje:

```text
To:
pedro@aula.local

Subject:
Prueba de correo

Message:
Hola Pedro.

Este mensaje ha sido enviado desde PC0.
```

Pulsa:

```text
Send
```

En esta operación interviene:

```text
SMTP
```

Podemos asociar:

```text
ANA
 │
 │ SMTP
 ↓
SERVIDOR DE CORREO
```

---

## 15. Recibir el correo

Ahora abre el cliente de correo de PC1.

Utiliza la opción para recibir los mensajes.

Pedro debería recibir el correo enviado por Ana.

En la simulación de Packet Tracer estamos utilizando:

```text
POP3
```

para recuperar el mensaje.

Por tanto:

```text
ANA
 │
 │ SMTP
 ↓
SERVIDOR
 │
 │ POP3
 ↓
PEDRO
```

Ya hemos comprobado en funcionamiento dos protocolos de correo diferentes.

---

## 16. Configurar FTP

Nos queda comprobar la transferencia de archivos.

Selecciona:

```text
Server0
```

y accede a:

```text
Services
   ↓
FTP
```

Activa:

```text
FTP → On
```

Crea un usuario, por ejemplo:

```text
Username:
alumno

Password:
redes123
```

Concede permisos suficientes para realizar la práctica.

<figure class="figura-libro">
  <img
    src="../../assets/images/parte3/capitulo12/figura12_22.png"
    alt="Resumen de la configuración de servicios en Server0 de Packet Tracer"
  >
  <figcaption>
    <strong>Figura 12.22.</strong> Resumen de los servicios configurados en Server0. El mismo servidor proporciona DHCP para la configuración automática, DNS para la resolución de nombres, HTTP para el servicio web, SMTP y POP3 para el correo electrónico y FTP para la transferencia de archivos.
  </figcaption>
</figure>

---

## 17. Conectarse al servidor FTP

Desde PC0 abre:

```text
Desktop
   ↓
Command Prompt
```

Escribe:

```cmd
ftp 192.168.10.10
```

El servidor solicitará las credenciales.

Introduce:

```text
Username:
alumno
```

y la contraseña configurada.

Una vez conectado puedes utilizar:

```cmd
dir
```

para consultar los archivos disponibles.

---

## 18. Descargar un archivo

Consulta los archivos disponibles mediante:

```cmd
dir
```

Selecciona uno de ellos y utiliza:

```cmd
get nombre_archivo
```

Por ejemplo:

```cmd
get sampleFile.txt
```

El nombre concreto dependerá de los archivos disponibles en el servidor.

La operación que estamos realizando es:

```text
SERVIDOR FTP
      │
      │ archivo
      ↓
     PC0
```

Es decir:

```text
DESCARGAR
```

---

## 19. Subir un archivo

Si el usuario dispone de permisos y tenemos un archivo disponible en el cliente, podemos utilizar:

```cmd
put nombre_archivo
```

Conceptualmente:

```text
PC0
 │
 │ archivo
 ↓
SERVIDOR FTP
```

Ahora estamos:

```text
SUBIENDO
```

un archivo.

---

## 20. Observar los protocolos en Simulation Mode

Packet Tracer permite hacer algo especialmente interesante:

```text
Simulation Mode
```

En lugar de observar únicamente el resultado final podemos visualizar el tráfico generado por los dispositivos.

Cambia de:

```text
Realtime
```

a:

```text
Simulation
```

Puedes utilizar los filtros para mostrar determinados protocolos.

Por ejemplo:

```text
DHCP
DNS
HTTP
SMTP
POP3
FTP
```

Después repite algunas operaciones.

### Prueba DHCP

Configura nuevamente un cliente mediante DHCP y observa el intercambio.

Intenta identificar:

```text
Discover
Offer
Request
ACK
```

Es decir:

```text
DORA
```

<figure class="figura-libro">
  <img
    src="../../assets/images/parte3/capitulo12/figura12_23.png"
    alt="Observación de los protocolos de aplicación mediante Simulation Mode de Packet Tracer"
  >
  <figcaption>
    <strong>Figura 12.23.</strong> Observación de los protocolos en Simulation Mode. Packet Tracer permite visualizar los mensajes intercambiados entre los dispositivos e identificar protocolos como DHCP, DNS, HTTP, SMTP, POP3 y FTP. En el ejemplo se muestra también la secuencia DHCP Discover, Offer, Request y ACK.
  </figcaption>
</figure>

---

### Prueba DNS

Accede a:

```text
http://www.aula.local
```

y observa la consulta DNS.

Busca la relación:

```text
www.aula.local
        ↓
192.168.10.10
```

---

### Prueba HTTP

Accede nuevamente a la página web y observa el tráfico HTTP entre:

```text
PC0
```

y:

```text
Server0
```

---

### Prueba de correo

Envía otro correo de Ana a Pedro.

Observa cuándo aparece:

```text
SMTP
```

Después recibe el mensaje desde PC1 y observa:

```text
POP3
```

---

### Prueba FTP

Realiza una conexión FTP y observa el tráfico generado durante la transferencia.

---

## 21. ¿Qué hemos construido?

Nuestra pequeña red proporciona varios servicios:

```text
                    SERVER0
                  192.168.10.10
                        │
       ┌────────┬───────┼───────┬────────┐
       │        │       │       │        │
      DHCP     DNS     HTTP    EMAIL     FTP
       │        │       │       │        │
     67/68      53      80    SMTP 25    21
                              POP3 110
```

Un único servidor está proporcionando varios servicios.

Esto es posible porque cada servicio puede ser identificado mediante diferentes protocolos y puertos.

---

## 22. Relaciona cada prueba con su protocolo

Completa la siguiente tabla:

| Acción realizada | Protocolo |
|------------------|-----------|
| PC0 obtiene automáticamente una IP | |
| `www.aula.local` se convierte en `192.168.10.10` | |
| El navegador solicita `index.html` | |
| Ana envía un correo | |
| Pedro recibe el correo | |
| PC0 descarga un archivo del servidor FTP | |

Utiliza:

```text
DHCP
DNS
HTTP
SMTP
POP3
FTP
```

---

## 23. Cuestiones finales

Responde utilizando lo observado durante la práctica.

1. ¿Qué dirección IP tiene Server0?
2. ¿Por qué Server0 utiliza una dirección estática?
3. ¿Qué direcciones han recibido PC0 y PC1 mediante DHCP?
4. ¿Qué servidor DNS utilizan?
5. ¿Qué dirección devuelve DNS para `www.aula.local`?
6. ¿Qué protocolo utiliza el navegador para solicitar la página?
7. ¿Qué protocolo utiliza Ana para enviar el correo?
8. ¿Qué protocolo utiliza Pedro para recibirlo en esta simulación?
9. ¿Qué protocolo hemos utilizado para transferir archivos?
10. ¿Puede un mismo servidor proporcionar varios servicios?
11. ¿Cómo puede el sistema diferenciar esos servicios si utilizan la misma dirección IP?
12. ¿Qué protocolos has podido observar en Simulation Mode?

---

!!! success "Objetivo conseguido"

    Si has completado correctamente la práctica, has construido una pequeña red en la que funcionan conjuntamente:

    ```text
    DHCP
      ↓
    configuración automática

    DNS
      ↓
    resolución de nombres

    HTTP
      ↓
    servicio web

    SMTP / POP3
      ↓
    correo electrónico

    FTP
      ↓
    transferencia de archivos
    ```

    Ya no estamos viendo los protocolos únicamente de forma teórica.

    Los hemos utilizado dentro de una red y hemos comprobado que **varios servicios pueden funcionar simultáneamente sobre la misma infraestructura**.

## 12.16 Lo que hemos aprendido

En este capítulo hemos descubierto que una red no sirve únicamente para transportar datos entre dispositivos.

Sobre la red funcionan diferentes **servicios**, y cada uno utiliza determinados **protocolos de aplicación**.

Hemos estudiado los más importantes para comenzar a trabajar con redes:

```text
DHCP
DNS
HTTP / HTTPS
SMTP
POP3 / IMAP
FTP / SFTP
```

Cada uno resuelve una necesidad diferente.

---

### DHCP: obtener la configuración

DHCP permite que un equipo obtenga automáticamente parámetros como:

```text
Dirección IP
Máscara de subred
Gateway
Servidor DNS
```

También hemos conocido el proceso:

```text
DORA
```

formado por:

```text
Discover
   ↓
Offer
   ↓
Request
   ↓
ACK
```

Por tanto:

```text
DHCP
 ↓
CONFIGURACIÓN AUTOMÁTICA
```

---

### DNS: utilizar nombres

Los dispositivos se comunican utilizando direcciones IP, pero para las personas resulta mucho más sencillo utilizar nombres.

DNS permite realizar la:

```text
RESOLUCIÓN DE NOMBRES
```

Por ejemplo:

```text
www.aula.local
       ↓
      DNS
       ↓
192.168.10.10
```

Por tanto:

```text
DNS
 ↓
NOMBRE → DIRECCIÓN IP
```

---

### HTTP y HTTPS: acceder a la Web

Cuando un navegador quiere obtener un recurso de un servidor web puede utilizar:

```text
HTTP
```

o:

```text
HTTPS
```

Hemos visto el funcionamiento básico:

```text
CLIENTE
   │
   │ petición
   ↓
SERVIDOR
   │
   │ respuesta
   ↓
CLIENTE
```

y algunos elementos sencillos como:

```text
GET
200 OK
404 Not Found
```

Debemos recordar:

```text
HTTP  → TCP 80

HTTPS → TCP 443
```

y que HTTPS permite proteger mediante cifrado la comunicación.

---

### Protocolos de correo

El correo electrónico utiliza diferentes protocolos dependiendo de la operación realizada.

```text
SMTP
 ↓
ENVIAR


POP3
 ↓
ACCEDER / DESCARGAR


IMAP
 ↓
ACCEDER / SINCRONIZAR
```

Una forma sencilla de recordarlo es:

```text
            CORREO
               │
       ┌───────┴────────┐
       │                │
     ENVIAR           RECIBIR/
       │              CONSULTAR
      SMTP          ┌────┴────┐
                    │         │
                   POP3      IMAP
```

---

### FTP y SFTP: transferir archivos

FTP permite transferir archivos entre un cliente y un servidor.

```text
CLIENTE
   │
   │ subir
   ↓
SERVIDOR
```

y:

```text
CLIENTE
   ↑
   │ descargar
   │
SERVIDOR
```

También hemos conocido:

```text
SFTP
```

que permite realizar transferencias de archivos mediante SSH y con la comunicación cifrada.

Recordamos:

```text
FTP  → TCP 21

SFTP → TCP 22
```

---

## Los protocolos no trabajan solos

Una de las ideas más importantes del capítulo es que varios protocolos pueden colaborar para realizar una única tarea.

Por ejemplo, al encender un ordenador y visitar una página web pueden intervenir:

```text
DHCP
 ↓
Obtengo configuración
 ↓
DNS
 ↓
Obtengo la IP del servidor
 ↓
HTTPS
 ↓
Solicito la página
```

Desde el punto de vista del usuario simplemente hemos hecho:

```text
Abrir el navegador
        ↓
Escribir una dirección
        ↓
Ver una página
```

Pero la red ha realizado muchas operaciones para hacerlo posible.

---

## Conceptos clave

Antes de continuar, comprueba que puedes explicar con tus propias palabras los siguientes conceptos:

| Concepto | Idea principal |
|----------|----------------|
| Protocolo de aplicación | Reglas utilizadas para proporcionar un servicio de red |
| Cliente | Dispositivo o programa que solicita un servicio |
| Servidor | Dispositivo o programa que proporciona un servicio |
| DHCP | Configuración automática de red |
| DORA | Discover, Offer, Request y ACK |
| DNS | Resolución de nombres |
| Registro A | Relaciona un nombre con una dirección IPv4 |
| Registro MX | Identifica servidores relacionados con el correo |
| HTTP | Protocolo utilizado para la Web |
| HTTPS | Comunicación web protegida mediante cifrado |
| GET | Método HTTP utilizado para solicitar un recurso |
| 200 OK | Petición HTTP realizada correctamente |
| 404 Not Found | Recurso no encontrado |
| SMTP | Envío de correo |
| POP3 | Acceso y descarga de correo |
| IMAP | Acceso y sincronización de correo |
| FTP | Transferencia de archivos |
| SFTP | Transferencia segura mediante SSH |
| Puerto | Permite identificar un servicio dentro de un equipo |

---

## Puertos que debemos reconocer

No se trata únicamente de memorizar números.

Debemos relacionar siempre:

```text
PROTOCOLO
    ↓
FUNCIÓN
    ↓
PUERTO
```

| Protocolo | Función | Puerto habitual |
|-----------|---------|:---------------:|
| DHCP | Configuración automática | UDP 67/68 |
| DNS | Resolución de nombres | 53 |
| HTTP | Web | TCP 80 |
| HTTPS | Web segura | TCP 443 |
| SMTP | Envío de correo | TCP 25 |
| POP3 | Acceso/descarga de correo | TCP 110 |
| IMAP | Acceso y sincronización | TCP 143 |
| FTP | Transferencia de archivos | TCP 21 |
| SFTP | Transferencia mediante SSH | TCP 22 |

---

## 12.17 Comprueba lo que sabes

### 1. Relaciona

Relaciona cada protocolo con su función:

| Protocolo | Función |
|-----------|---------|
| DHCP | A. Enviar correo |
| DNS | B. Transferir archivos |
| HTTP | C. Obtener configuración automáticamente |
| SMTP | D. Resolver nombres |
| IMAP | E. Acceder a páginas web |
| FTP | F. Sincronizar correo |

---

### 2. ¿Qué protocolo utilizarías?

Indica el protocolo principal en cada situación.

**a)** Un ordenador acaba de conectarse a la red y necesita una dirección IP.

**b)** Queremos conocer la dirección IP de `www.aula.local`.

**c)** Un navegador solicita una página web.

**d)** Queremos acceder a una web mediante una comunicación cifrada.

**e)** Ana envía un correo electrónico.

**f)** Pedro quiere consultar su correo desde el móvil y el portátil manteniéndolo sincronizado.

**g)** Queremos transferir archivos a un servidor FTP.

**h)** Queremos realizar la transferencia mediante SSH.

---

### 3. ¿Qué puerto es?

Completa:

```text
DHCP  → ______

DNS   → ______

HTTP  → ______

HTTPS → ______

SMTP  → ______

POP3  → ______

IMAP  → ______

FTP   → ______

SFTP  → ______
```

---

### 4. Ordena el proceso

Un ordenador acaba de encenderse y el usuario quiere visitar:

```text
https://www.aula.local
```

Ordena:

```text
El servidor web responde.

DNS obtiene la dirección IP.

El equipo obtiene su configuración mediante DHCP.

El navegador utiliza HTTPS.

El usuario escribe www.aula.local.
```

---

### 5. Detecta el problema

Un equipo tiene:

```text
IP:       192.168.10.125
Máscara:  255.255.255.0
Gateway:  192.168.10.1
DNS:      192.168.10.10
```

El usuario comprueba que:

```text
ping 192.168.10.20
```

funciona.

Sin embargo:

```text
ping www.aula.local
```

falla.

¿Qué servicio revisarías primero?

Explica por qué.

---

### 6. ¿200 o 404?

Un navegador solicita:

```text
GET /index.html
```

y el servidor encuentra correctamente el recurso.

¿Qué código esperarías?

```text
200 OK
```

o:

```text
404 Not Found
```

¿Y si el archivo solicitado no existe?

---

### 7. SMTP, POP3 o IMAP

Completa:

```text
Enviar un mensaje
        ↓
      ______


Descargar correo
        ↓
      ______


Mantener el correo sincronizado
entre varios dispositivos
        ↓
      ______
```

---

## 12.18 Reto final: descubre qué protocolo está fallando

Eres el técnico de una pequeña empresa.

La red dispone de:

```text
Servidor DHCP
Servidor DNS
Servidor web
Servidor de correo
Servidor FTP
```

Los usuarios empiezan a comunicar diferentes problemas.

Tu trabajo consiste en decidir **qué protocolo o servicio investigarías primero**.

### Incidencia 1

Un ordenador se conecta a la red pero no obtiene una dirección IPv4 válida automáticamente.

```text
¿Dónde investigarías?
```

---

### Incidencia 2

Un usuario puede acceder a:

```text
http://192.168.10.20
```

pero no puede acceder a:

```text
http://www.empresa.local
```

```text
¿Dónde investigarías?
```

---

### Incidencia 3

Un usuario puede consultar sus mensajes, pero no consigue enviar nuevos correos.

```text
¿Dónde investigarías?
```

---

### Incidencia 4

Un usuario accede correctamente a:

```text
http://www.empresa.local
```

pero el navegador indica:

```text
404 Not Found
```

¿Significa esto que el servidor web está desconectado?

Explica tu respuesta.

---

### Incidencia 5

Un trabajador quiere consultar la misma cuenta de correo desde:

```text
PC
MÓVIL
TABLET
```

y mantener los mensajes sincronizados.

¿Qué protocolo recomendarías?

---

### Incidencia 6

Un administrador necesita transferir archivos a un servidor utilizando una comunicación cifrada mediante SSH.

¿Qué protocolo debería utilizar?

---

!!! tip "Piensa como un técnico"

    No intentes resolver todos los problemas de red haciendo siempre las mismas pruebas.

    Primero pregúntate:

    ```text
    ¿QUÉ NO FUNCIONA?
            ↓
    ¿QUÉ SERVICIO REALIZA ESA FUNCIÓN?
            ↓
    ¿QUÉ PROTOCOLO ESTÁ RELACIONADO?
            ↓
    ¿QUÉ DEBO COMPROBAR?
    ```

    Esta forma de razonar será cada vez más importante a medida que avancemos en el estudio de las redes.

---

## 12.19 Resumen visual del capítulo

Podemos resumir el capítulo completo mediante cinco preguntas:

```text
¿NECESITO CONFIGURACIÓN?
          ↓
         DHCP


¿NECESITO CONVERTIR
UN NOMBRE EN UNA IP?
          ↓
          DNS


¿NECESITO ACCEDER
A UNA PÁGINA WEB?
          ↓
     HTTP / HTTPS


¿NECESITO UTILIZAR
CORREO ELECTRÓNICO?
          ↓
 SMTP / POP3 / IMAP


¿NECESITO TRANSFERIR
ARCHIVOS?
          ↓
      FTP / SFTP
```

<figure class="figura-libro">
  <img
    src="../../assets/images/parte3/capitulo12/figura12_24.png"
    alt="Mapa de decisión para elegir los principales protocolos de aplicación según el servicio que se necesita"
  >
  <figcaption>
    <strong>Figura 12.24.</strong> Mapa de decisión de los principales protocolos de aplicación. A partir de la tarea que necesitamos realizar podemos identificar el protocolo adecuado: DHCP para obtener la configuración de red, DNS para resolver nombres, HTTP o HTTPS para acceder a la Web, SMTP, POP3 o IMAP para el correo electrónico y FTP o SFTP para transferir archivos.
  </figcaption>
</figure>

Cuando puedas identificar correctamente el protocolo a partir de la **acción que necesita realizar el usuario**, habrás comprendido el objetivo principal de este capítulo.

---

# Cierre de la Parte III

A lo largo de esta parte hemos avanzado desde los fundamentos de la comunicación hasta comprender cómo los equipos utilizan servicios reales sobre una red.

Ya podemos interpretar una comunicación como la colaboración de diferentes elementos:

```text
DIRECCIONES
     +
MÁSCARAS Y SUBREDES
     +
PUERTOS
     +
PROTOCOLOS
     +
SERVICIOS
     ↓
COMUNICACIÓN EN RED
```

También hemos aprendido que detrás de acciones aparentemente sencillas, como:

```text
abrir una página web,
enviar un correo
o descargar un archivo
```

existen diferentes protocolos trabajando conjuntamente.

Con esta base ya estamos preparados para continuar estudiando redes desde una perspectiva cada vez más práctica.

> **Una red no es únicamente un conjunto de dispositivos conectados. Para que puedan comunicarse necesitan direcciones, reglas comunes y servicios que trabajen de forma coordinada.**



