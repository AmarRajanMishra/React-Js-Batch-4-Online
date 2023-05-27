import { useState } from "react";

function ChangeColor() {
    const [colorName, setColor] = useState('red')

    const getColor = (e) => {
        setColor(e.target.value)
    }
  return (
    <div>
        <input type="text" placeholder="Enter Color Name" onChange={(e)=>getColor(e)} />
      <h1>Change Color According User Input</h1>
      <p style={{color : colorName}}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
        minima id ea hic necessitatibus culpa, consequatur debitis voluptatibus
        magni nemo ratione nisi maiores harum molestiae illum recusandae modi
        odio ducimus voluptas reprehenderit dolor officia nam. Explicabo
        quisquam optio fugit debitis, odit odio ipsa dicta hic, corporis facilis
        dolor reiciendis sit commodi quas excepturi at fugiat nam? Et
        repellendus quasi enim odio iste alias sunt vel quia aliquam sed
        suscipit eum nisi sapiente fuga nobis hic illo, qui cupiditate deleniti
        nulla in, odit ut mollitia? Illo accusamus alias cupiditate saepe ab
        autem! Possimus fugit enim non! Id est perspiciatis odio fugiat?
      </p>
    </div>
  );
}

export default ChangeColor;
