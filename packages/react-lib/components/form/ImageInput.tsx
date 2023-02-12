import { useCallback, useState } from 'react'

export function getBase64(file: File) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()

    reader.readAsDataURL(file)
    reader.onload = () => resolve(reader.result)
    reader.onerror = error => reject(error)
  })
}

export function ImageInput({ name, errors, register }: any) {
  const { onChange, ref } = register(name)
  const [image, setImage] = useState()

  const onAvatarChange = useCallback(async event => {
    if (event.target.files?.[0]) {
      const base64: any = await getBase64(event.target.files[0])
      setImage(base64)
      onChange(event)
    }
  }, [])

  return (
    <div>
      {image && <img src={image} width="120px" />}
      <input type="file" name={name} ref={ref} onChange={onAvatarChange} />
      <p>{errors[name]?.message}</p>
    </div>
  )
}
