import { bubbleSort } from '../src/bubbleSort';

/**
 * Casos de prueba basados en la Complejidad Ciclomática (V(G) ≈ 3)
 * y cobertura de decisiones + condición simple.
 *
 * CP1: Camino que NO entra a los bucles (array vacío o de 1 elemento)
 * CP2: Camino que entra a los bucles pero NUNCA hace swap (ya ordenado)
 * CP3: Camino que entra a los bucles y SÍ hace al menos un swap
 * CP4: Caso adicional mixto (refuerzo)
 */
describe('bubbleSort - Laboratorio 04 (xUnit + Cobertura)', () => {

  // ---------- CP1 ----------
  test('CP1: array vacío no se modifica', () => {
    // Arrange
    const arr: number[] = [];

    // Act
    bubbleSort(arr);

    // Assert
    expect(arr).toEqual([]);
  });

  test('CP1b: array de un solo elemento no se modifica', () => {
    // Arrange
    const arr = [42];

    // Act
    bubbleSort(arr);

    // Assert
    expect(arr).toEqual([42]);
  });

  // ---------- CP2 ----------
  test('CP2: array ya ordenado permanece igual (sin swaps)', () => {
    // Arrange
    const arr = [1, 2, 3, 4, 5];

    // Act
    bubbleSort(arr);

    // Assert
    expect(arr).toEqual([1, 2, 3, 4, 5]);
  });

  // ---------- CP3 ----------
  test('CP3: array en orden inverso se ordena correctamente (con swaps)', () => {
    // Arrange
    const arr = [5, 4, 3, 2, 1];

    // Act
    bubbleSort(arr);

    // Assert
    expect(arr).toEqual([1, 2, 3, 4, 5]);
  });

  // ---------- CP4 (opcional / refuerzo) ----------
  test('CP4: array desordenado mixto se ordena correctamente', () => {
    // Arrange
    const arr = [3, 1, 4, 1, 5, 9, 2, 6];

    // Act
    bubbleSort(arr);

    // Assert
    expect(arr).toEqual([1, 1, 2, 3, 4, 5, 6, 9]);
  });
});
