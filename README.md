# Laboratorio 04 – xUnit y Cobertura de Código

**Curso:** Ingeniería de Software II  
**Tema:** xUnit + Code Coverage (Bubble Sort)  
**Lenguaje:** TypeScript  
**Framework de pruebas:** Jest (xUnit)  
**Herramienta de cobertura:** Jest Coverage (integrado)

---

## Cómo ejecutar

```bash
# 1. Instalar dependencias
npm install

# 2. Ejecutar las pruebas
npm test

# 3. Ejecutar pruebas + generar reporte de cobertura
npm run test:coverage
```

Después de `npm run test:coverage` se genera la carpeta `coverage/`.  
Abre el archivo `coverage/index.html` en tu navegador para ver el reporte HTML de cobertura.

---

## Estructura del proyecto

```
bubble-sort-lab/
├── src/
│   └── bubbleSort.ts          # Implementación del algoritmo
├── __tests__/
│   └── bubbleSort.test.ts     # Casos de prueba (Jest)
├── package.json
├── tsconfig.json
├── jest.config.js
├── ENTREGA.md                 # Especificación de casos de prueba + análisis
└── README.md
```

---

## Entregables

| Entregable                              | Ubicación / Cómo obtenerlo                          |
|-----------------------------------------|-----------------------------------------------------|
| Especificación de Casos de Prueba       | `ENTREGA.md`                                        |
| Implementación + Pruebas                | Este repositorio                                    |
| Reporte de ejecución de pruebas         | Terminal (`npm test`) o captura de pantalla         |
| Reporte de cobertura de código          | `coverage/index.html` (después de `npm run test:coverage`) |

---

## Autor

Estudiante – Ingeniería de Software II  
Docente: DSc. Edgar Sarmiento Calisaya
