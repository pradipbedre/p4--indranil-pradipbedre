![chrome_6veZwkf9iY](https://user-images.githubusercontent.com/60803643/180609807-0e40de3d-432a-4b32-90c8-33dd94bd8793.png)

1. **When a user enters an URL in the browser, how does the browser fetch the desired result?**

**Answer:  [LINK](https://aws.amazon.com/blogs/mobile/what-happens-when-you-type-a-url-into-your-browser/)**  [LINK](https://www.youtube.com/watch?v=0cU4sIP-OuE)

1. You type a URL in your browser and press Enter
2. Browser looks up IP address for the domain
3. Browser initiates TCP connection with the server
4. Browser sends the HTTP request to the server
5. Server processes request and sends back a response
6. Browser renders the content
7. repeat steps 4 to 6.
    
    ![123.jpg](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/4cab62cd-6f31-42db-95a1-3f6e21d4c7ee/123.jpg)
    

 

1. **High Level Components of a browser.**

**Answer:**  

1. **The user interface**: this includes the address
bar, back/forward button, bookmarking menu, etc. Every part of the
browser display except the window where you see the requested page.
2. **The browser engine**: marshals actions between the UI and the rendering engine.
3. **The rendering engine**: responsible for displaying requested content. For example if the
requested content is HTML, the rendering engine parses HTML and CSS, and displays the parsed content on the screen.
4. **Networking**: for network calls such as HTTP requests, using different
implementations for different platform behind a platform-independent
interface.
5. **UI backend**: used for drawing basic
widgets like combo boxes and windows. This backend exposes a generic
interface that is not platform specific. Underneath it uses operating
system user interface methods.
6. **JavaScript interpreter**. Used to parse and execute JavaScript code.
7. **Data storage**. This is a persistence layer. The browser may need to save all sorts of
data locally, such as cookies. Browsers also support storage mechanisms
such as localStorage, IndexedDB, WebSQL and FileSystem.

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/ca465027-9f5d-4e93-9e3f-208381daebd7/Untitled.png)

1. **What is the main functionality of the browser?**

**Answer:**

The main function of a browser is to present the web resource you choose, by requesting it from the server and displaying it in the browser window. The resource is usually an HTML document, but may also be a PDF, image, or some other type of content. The location of the 
resource is specified by the user using a URI (Uniform Resource Identifier).

The way the browser interprets and displays HTML files is specified in the HTML and CSS specifications. These specifications are maintained by the W3C (World Wide Web Consortium) organization, which is the standards organization for the web.

 For years browsers conformed to only a part of the specifications and developed their own extensions. That caused serious compatibility issues for web authors. Today most of the browsers more or less conform to the specifications.

Browser user interfaces have a lot in common with each other. Among the common user interface elements are:

1. **Rendering engine and its use.**

**Answer**:

The responsibility of the rendering engine is well… Rendering, that is display of the requested contents on the browser screen.

By default the rendering engine can display HTML and XML documents and images. It can display other types of data via plug-ins or extension; for example, displaying PDF documents using a PDF viewer plug-in.

Different browsers use different rendering engines: Internet Explorer uses Trident, Firefox uses Gecko, Safari uses WebKit. Chrome and Opera (from version 15) use Blink, a fork of WebKit.

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/338b6096-4daf-4fb2-8167-80b31c67d1d1/Untitled.png)

1. **Parsers (HTML, CSS, etc), Tree constructing, Layout and Painting.**

The rendering engine will start parsing the HTML document and convert elements to DOM nodes in a tree called the "content tree". The engine will parse the style data, both in external CSS files and in style elements. Styling information together with visual instructions in the HTML will be used to create another tree: the render tree.

The render tree contains rectangles with visual attributes like color and dimensions. The rectangles are in the right order to be displayed on the screen.

After the construction of the render tree it goes through a "layout" process. This means giving each node the exact coordinates where it should appear on the screen. The next stage is painting - the render tree will be traversed and each node will be painted using the UI backend layer.

It's important to understand that this is a gradual process. For better user experience, the rendering engine will try to display contents on the screen as soon as possible. It will not wait until all HTML is parsed before starting to build and layout the render tree. Parts of the content will be parsed and displayed, while the process continues with the rest of the contents that keeps coming from the network.

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/cc133365-ea2c-4826-9f3c-506f827eb428/Untitled.png)
