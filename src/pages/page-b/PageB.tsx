import React, {useState} from 'react'
// import * as PropTypes from 'prop-types'
import {InferPropTypes} from '../../types/helper/react'
import {Input} from '../../components/form-inputs'
import {SubmitButton} from './styles'
import debounce from '../../utils/debounce-helper'

const propTypes = {}
const defaultProps = {}
const timeout = 100

type PageBProps = InferPropTypes<typeof propTypes, typeof defaultProps>

const PageB: React.FC<PageBProps> = () => {
  const [formData, setFormData] = useState({} as Record<string, string>)

  const submitForm = () => {
    // eslint-disable-next-line no-alert
    alert(`Submitting form: ${JSON.stringify(formData)}`)
  }

  return (
    <>
      <h1>Page B</h1>
      <br />
      <Input
        name="some-input"
        defaultValue={formData['some-input'] || ''}
        onChange={debounce((e, value) => {
          setFormData(state => ({...state, 'some-input': value}))
        }, timeout)}
      />
      <br />
      <br />
      <Input
        name="another-input"
        defaultValue={formData['another-input'] || ''}
        onChange={debounce((e, value) => {
          setFormData(state => ({...state, 'another-input': value}))
        }, timeout)}
      />
      <br />
      <br />
      <Input
        name="a"
        defaultValue={formData.a || ''}
        onChange={debounce((e, value) => {
          setFormData(state => ({...state, a: value}))
        }, timeout)}
      />
      <br />
      <br />
      <Input
        name="b"
        defaultValue={formData.b || ''}
        onChange={debounce((e, value) => {
          setFormData(state => ({...state, b: value}))
        }, timeout)}
      />
      <br />
      <br />
      <Input
        name="c"
        defaultValue={formData.c || ''}
        onChange={debounce((e, value) => {
          setFormData(state => ({...state, c: value}))
        }, timeout)}
      />
      <br />
      <br />
      <SubmitButton type="button" onClick={submitForm}>
        Submit
      </SubmitButton>
    </>
  )
}

PageB.propTypes = propTypes
PageB.defaultProps = defaultProps

export default PageB
