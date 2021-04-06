class BorderRadiusReversePainter {
  static get inputProperties(){
      return ['--border-radius-reverse', '--border-radius-reverse-color']
  }

  paint(ctx, geom, props){
      const radiusValue = Number(props.get('--border-radius-reverse').toString())
    console.log(radiusValue);
      ctx.fillStyle = props.get('--border-radius-reverse-color').toString();
      ctx.fillRect(0, 0, geom.width, geom.height);
      ctx.clearRect(0, 0, 10, 10);

  }
}

registerPaint('border-radius-reverse', BorderRadiusReversePainter);