import React from 'react'


window.tinymce.init({
  selector: '#text-tinymc'
})
class Edit extends React.Component {
  render () {
    return (
      <div className="text-tinymc"></div>
    )
  }
}

export default Edit