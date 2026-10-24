/**
 * Ordena un arreglo de números en orden ascendente usando el algoritmo Bubble Sort.
 * Modifica el arreglo in-place (no retorna un nuevo arreglo).
 *
 * Versión adaptada del pseudocódigo del laboratorio (índices desde 0).
 *
 * @param vet - Arreglo de números enteros a ordenar
 */
export function bubbleSort(vet: number[]): void {
  // for externo: i recorre desde length-1 hasta 1
  for (let i = vet.length - 1; i >= 1; i--) {
    // for interno: j recorre desde 0 hasta i-1
    for (let j = 0; j < i; j++) {
      // Condición de intercambio
      if (vet[j] > vet[j + 1]) {
        // Swap
        const aux = vet[j];
        vet[j] = vet[j + 1];
        vet[j + 1] = aux;
      }
    }
  }
}
