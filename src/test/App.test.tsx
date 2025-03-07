
import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "../App";

describe("Testing de App", () => {
  it("Debe renderizarse correctamente", () => {
    const { baseElement } = render(<App />);
    expect(baseElement).toMatchSnapshot();
  });

  it('Debe mostrar el título "Hotels"', () => {
    const { getByText } = render(<App />);
    expect(getByText("Hotels")).toBeInTheDocument();
  });

  it("Debe mostrar la lista de hoteles con sus nombres y ubicaciones", () => {
    const { getByText } = render(<App />);
    const hotels = [
      { name: "Ledadu Beach", location: "📍 Australia" },
      { name: "Endigada Beach", location: "📍Japon" },
      { name: "Doreen Tower", location: "📍 USA" },
      { name: "Royal Palace", location: "📍 China" },
      { name: "El Dorado", location: "📍España" },
      { name: "San Marino", location: "📍Argentina" },
    ];

    hotels.forEach((hotel) => {
      expect(getByText(hotel.name)).toBeInTheDocument();
      expect(getByText(hotel.location)).toBeInTheDocument();
    });
  });

  it("Debe mostrar imágenes para cada hotel", () => {
    const { getAllByRole } = render(<App />);
    const images = getAllByRole("img");
    expect(images).toHaveLength(6);

    images.forEach((img) => {
      expect(img).toBeInTheDocument();
    });
  });
});