import React from 'react'
import { Text } from '@chakra-ui/react'

// const DynamicText = () => {
//   const [value, setValue] = useState('Random Text')

//   const changeValue = (newValue) => {
//     setValue(newValue)
//   }

//   return <Text as="h1">{value}</Text>
// }

interface DynamicTextState {
  value: string
}

class DynamicText extends React.Component<any, DynamicTextState> {
  constructor(props) {
    super(props)
    this.state = {
      value: 'Random Text',
    }
  }

  changeValue = (newValue: string) => {
    this.setState({ value: newValue })
  }

  render() {
    const { value } = this.state

    return (
      <Text as="h1" wordBreak="break-word">
        {value}
      </Text>
    )
  }
}

export default DynamicText
