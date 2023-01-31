import React from 'react'
import { SparklineComponent , Inject ,SparklineTooltip} from '@syncfusion/ej2-react-charts'

const SparkLine = ({id,height,width,color,data,type,currentColor}) => {
  return (
    <SparklineComponent
      id={id}
      height={height}
      width={width}
      LineWidth={1}
      valueType="numeric"
      fill={color}
      border={{color:currentColor,width:2}}

    >
      <Inject services={{SparklineTooltip}} />
    </SparklineComponent>
  )
}

export default SparkLine