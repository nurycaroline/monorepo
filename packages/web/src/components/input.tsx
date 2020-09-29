import React from 'react'

interface InputProps {
  label: string
  name: string
}

type InputPropsRef = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> &
  HTMLInputElement

const Input = ({ label, name }: InputProps, ref) => (
  <>
    <label>{label}</label>
    <input name={name} ref={ref} />
  </>
)

export default React.forwardRef<InputPropsRef, InputProps>(Input)
