import React from 'react'
import { Box, Container, IconButton, Link, Typography } from '@material-ui/core'
import { observer } from 'mobx-react-lite'
import Image from 'next/image'
import { MainLayout } from '../../components/layouts/MainLayout'
import { PictureBox } from '../../components/PictureBox'
import { TitleLine } from '../../components/TitleLine'
import User from '../../src/store/User'
import styles from './profile.module.scss'

const src = "data:image/png;base64,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"
export default observer(function Profile() {
    const inputRef = React.useRef<HTMLInputElement>(null)
    const [name, setName] = React.useState<string>(User.user.name)
    const [inputIsDisable, setInputIsDisable] = React.useState<boolean>(true)
    


    const handleEdit = () => {
        setInputIsDisable(false)
        if (inputRef.current !== null)  {
            inputRef.current.focus()
        }
    }

    const handleDone = async () => {
        setInputIsDisable(true)
        await User.changeName(name)
    }

    const handleImage = async (e:any) => {
        const newImage = await User.changeImage(e.target.files[0])
    }

    return (
        <MainLayout>
            <TitleLine mainTitle="Профиль" >
                <div className="mt-10 mr-40">
                    <Typography  variant="h5" color="inherit">
                        <Link href="#" underline="always">Список созданных викторин</Link>
                    </Typography>
                </div>
            </TitleLine>
            <Container>
                <Box marginTop="50px" alignItems="center" display="flex" justifyContent="center" flexDirection="column">
                    <PictureBox src={User.user.image || src}/>
                    <div className="d-flex">
                        <input 
                            ref={inputRef}
                            disabled={inputIsDisable}
                            className={`${styles.input} noDefault text-center `} 
                            value={name}  
                            style= {!inputIsDisable?{boxShadow: "0 0 5px rgba(204, 236, 113, 1)"}: {}}
                            onChange={(e)=>setName(e.target.value)}
                        />
                        <IconButton onClick={handleEdit} color="primary" component="span">
                            <Image src="/static/edit.svg" width={24} height={24} alt="Edit"/>
                        </IconButton>
                        <IconButton onClick={handleDone} color="primary" component="span">
                            <Image src="/static/done.svg" width={24} height={24} alt="Done"/>
                        </IconButton>
                    </div>
                    <div className="mt-10">
                        <label className={styles.imageUpload} htmlFor="image">Выберете новое изображение</label>
                        <input 
                            style={{display: "none"}} 
                            id="image" 
                            name="image" 
                            type="file" 
                            accept="image/*" 
                            onChange={handleImage}
                        />
                    </div>
                    {/* <div className="mt-10">
                        <Typography  variant="h5" color="inherit">
                            <Link className={styles.link}>Список созданных викторин</Link>
                        </Typography>
                    </div> */}

                </Box>
                
            </Container>
        </MainLayout>
    )
})

