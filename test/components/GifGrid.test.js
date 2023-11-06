import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../src/components/GifGrid";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

jest.mock("../../src/hooks/useFetchGifs");

describe("Pruebas en GifGrid", () => {
  const category = "Goku";

  test("debe de mostrar un loading inicial", () => {
    useFetchGifs.mockReturnValue({
      images: [],
      isLoading: true,
    });
    render(<GifGrid category={category} />);

    expect(screen.getByText("Cargando..."));
    expect(screen.getByText(category));
  });

  test("debe mostrar imagenes de items useFetchGifs", () => {
    const gifs = [
      { id: "ABC", title: "Goku", url: "https://localhost/goku.jpg" },
      { id: "EFG", title: "One Punch", url: "https://localhost/one_punch.jpg" },
    ];

    useFetchGifs.mockReturnValue({
      images: gifs,
      isLoading: false,
    });

    render(<GifGrid category={category} />);
    expect(screen.getAllByRole("img").length).toBe(2);

    //screen.debug();
  });
});
