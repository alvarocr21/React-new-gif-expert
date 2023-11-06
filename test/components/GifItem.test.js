import { render, screen } from "@testing-library/react";
import { GifItem } from "../../src/components/GifItem";
const title = "Goku";
const url = "http://probando/";

describe("Probando componente GifItem.jsx", () => {
  test("debe hacer match con  el snapshot", () => {
    const { container } = render(<GifItem title={title} url={url} />);

    expect(container).toMatchSnapshot();
  });

  test("Muestra los atributos de la imagen", () => {
    render(<GifItem title={title} url={url} />);
    //screen.debug();
    const { alt, src } = screen.getByRole("img");
    expect(alt).toBe(title);
    expect(src).toBe(url);
  });

  test("debe mostrar el texto del titulo", () => {
    render(<GifItem title={title} url={url} />);

    expect(screen.getByText(title)).toBeTruthy();
  });
});
