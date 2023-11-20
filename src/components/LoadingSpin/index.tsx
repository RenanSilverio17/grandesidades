import { Container } from './styles'

type LoadingSpinProps = {
  color?: 'red' | 'white';
};

export const LoadingSpin = ({color = 'white'}: LoadingSpinProps) => {
  return (
    <Container color={color}>
      <div className="lds-ring">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </Container>
  )
}
