```js title=app/page.js
import Image from "next/image";
import profilePic from "./me.png";

export default function Page() {
  return (
    <Image
      // Importação de uma imagem
      // Define automaticamente a largura e altura
      src={profilePic}
      sizes="100vw"
      // Faça com que a imagem seja exibida em largura total
      style={{
        width: "100%",
        height: "auto",
      }}
    />
  );
}
```
