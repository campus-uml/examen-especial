///<reference types="cypress"/>

describe('Pruebas E2E en la página de Hoteles', () => {
  beforeEach(() => {
    cy.visit('/'); 
  });

  it('Debe mostrar el título "Hotels"', () => {
    cy.contains('h1', 'Hotels').should('be.visible');
  });

  it('Debe listar los hoteles con su nombre y ubicación', () => {
    const hotels = [
      { name: 'Ledadu Beach', location: '📍 Australia' },
      { name: 'Endigada Beach', location: '📍Japon' },
      { name: 'Doreen Tower', location: '📍 USA' },
      { name: 'Royal Palace', location: '📍 China' },
      { name: 'El Dorado', location: '📍España' },
      { name: 'San Marino', location: '📍Argentina' }
    ];

    hotels.forEach(({ name, location }) => {
      cy.contains(name).should('be.visible');
      cy.contains(location).should('be.visible');
    });
  });

  it('Debe mostrar los precios correctamente', () => {
    const prices = ['$20', '$18', '$14', '$21', '$26', '$28'];

    prices.forEach(price => {
      cy.contains(price).should('be.visible');
    });
  });

  it('Debe mostrar imágenes para cada hotel', () => {
    cy.get('img').should('have.length', 6); // Verifica que hay 6 imágenes
  });
});