import { getGif } from "../../src/helpers/getGifs";

describe("Probar getGifts", () => {
  test("debe retornar un arreglo de gifs", async () => {
    const gifs = await getGif("One Punch");

    // console.log(gifs);

    expect(gifs.length).toBeGreaterThan(0);

    expect(gifs[0]).toEqual({
      id: expect.any(String),
      title: expect.any(String),
      url: expect.any(String),
    });
  });
});
