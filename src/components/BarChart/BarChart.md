BarChart Exemplo:

```js
const props = {
  formData: {
    origem: "11",
    destino: "16",
    tempo: 20,
    precos: { comFaleMais: 0.0, semFaleMais: 38.0 },
    plano: "FaleMais 30",
    economia: "100%"
  },
  isVisible: true,
  setShowChart: () => {}
};

<BarChart {...props} />;
```
