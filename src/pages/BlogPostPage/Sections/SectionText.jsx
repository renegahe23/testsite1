import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// @material-ui/icons
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Quote from "components/Typography/Quote.jsx";
// core components

import blog4 from "assets/img/examples/blog4.jpg";
import blog3 from "assets/img/examples/blog3.jpg";
import blog1 from "assets/img/vector/blog1.jpg";

import sectionTextStyle from "assets/jss/material-kit-pro-react/pages/blogPostSections/sectionTextStyle.jsx";

function SectionText({ ...props }) {
  const { classes } = props;
  const imgClasses = classNames(
    classes.imgRaised,
    classes.imgRounded,
    classes.imgFluid
  );
  return (
    <div className={classes.section}>
<GridContainer justify="left">
<GridItem xs={12} sm={8} md={10}>
<h3 className={classes.title}>
Rem formas`y cras id se est interdum wisi te dis modo… Barbarus voluptas typi peccat rem quas diam quis`ad natus, sed tyriis at diam.
          </h3>
</GridItem>
</GridContainer>
      <GridContainer justify="center">
        <GridItem xs={12} sm={8} md={8}>
        <h3 className={classes.title}>México</h3>
          <p>
          La Bolsa Mexicana de Valores continúa hasta el momento por debajo de la zona de promedios móviles; es importante destacar que el índice de la bolsa continúa con sus movimientos erráticos, por lo que se encuentra todavía debajo del intermedio en los 43,500 enteros (resistencia próxima), dejando expuesto el piso de los 42,050 puntos. En lo que refiere al IPC en dólares se ubica en la zona de promedios móviles; la línea de precios pondrá a prueba su soporte intermedio en los 2,220 enteros, mientras que las cimas intermedias se encuentran alrededor de las 2,315 unidades. En lo que refiere al desempeño del FTSE BIVA no pudo superar la zona de promedios móviles, es decir, alrededor de los 890 puntos. El soporte inmediato se sitúa en las 860 unidades. La sesión anterior cerró en los 870.18 puntos (-0.89%).

            <br />
            <br />
           En lo que respecta al bovespa índice de Brasil, se encuentra en un proceso de toma de beneficios, pero todavía se sitúa a cierta distancia del psicológico de los 100 mil puntos, para posteriormente tomar dirección hacia el nivel de los 106,000 enteros. Con ello registra nuevos máximos.
          </p>
          <Quote
            textClassName={classes.quoteText}
            text="“ el índice de la bolsa continúa con sus movimientos erráticos, por lo que se encuentra todavía debajo del intermedio.” "
          />
        </GridItem>
        <GridItem xs={12} sm={8} md={8} className={classes.section}>
          <GridContainer>
            <GridItem xs={12} sm={8} md={12}>
              <img src={blog1} alt="..." className={imgClasses} />
            </GridItem>
            
          </GridContainer>
        </GridItem>
        <GridItem xs={12} sm={8} md={8}>
          <h3 className={classes.title}>Estados Unidos</h3>
          <p>
          El Dow Jones se está alejando del nivel intermedio de los 27,100 puntos, que es la cima reciente. Cabe señalar, que no se descarta que pudiera retroceder a presionar y validar la zona de promedios, que recientemente se sitúan alrededor de los 26,800 puntos (soporte). Debido a que el índice aún está sobre-valuado, debemos tomarlo en cuenta, toda vez que se está detectando doble cima. El siguiente objetivo está localizado en los 27,500 enteros.
          </p>
          <p>
          El S&P 500 podrá regresar a probar los promedios móviles, su línea de precios generó un rebote técnico que le permitió generar un nuevo máximo localizado en las 3,015 unidades (niveles máximos), registrando así una triple cima. Actualmente podrá generar toma de utilidades hacia el piso intermedio de los 2,960 enteros. Por el otro lado, si se aleja de cimas anteriores, activaría posteriormente el psicológico de los 3,200 puntos.

          </p>
          <p>
          En el Nasdaq superó la zona de cimas, dejando la marca de las 8,050 unidades (zona de promedios) como soporte actual a validar. Es importante recalcar que se registran cuatro cimas, que en el supuesto de superarlas, podrá llevar hacia un máximo cerca de los 8,380 enteros.
          </p>
        </GridItem>
      </GridContainer>
    </div>
  );
}

export default withStyles(sectionTextStyle)(SectionText);
