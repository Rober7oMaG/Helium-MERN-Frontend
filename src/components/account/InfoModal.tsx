import { Modal, useMantineTheme } from '@mantine/core';

interface Props {
    isModalOpened: boolean,
    setIsModalOpened: React.Dispatch<React.SetStateAction<boolean>>
}

const InfoModal: React.FC<Props> = ({isModalOpened, setIsModalOpened}) => {
    const theme = useMantineTheme();

    return (
        <Modal
            overlayColor={theme.colorScheme === 'dark' ? theme.colors.dark[9] : theme.colors.gray[2]}
            overlayOpacity={0.55}
            overlayBlur={3}
            size='55%'
            opened={isModalOpened}
            onClose={() => setIsModalOpened(false)}
        >
            <form className="form">
                <h3>Your information</h3>

                <div>
                    <input type="text" className="input" name='firstName' placeholder='First Name' />
                    <input type="text" className="input" name='lastName' placeholder='Last Name' />
                </div>

                <div>
                    <input type="text" className="input" name='worksAt' placeholder='Works At' />
                </div>

                <div>
                    <input type="text" className="input" name='livesIn' placeholder='Lives In' />
                    <input type="text" className="input" name='country' placeholder='Country' />
                </div>

                <div>
                    <input type="text" className="input" placeholder='Relationship Status' name='relationshipStatus' />
                </div>

                <div>
                    Profile Image
                    <input type="file" name="profileImage" />

                    Cover Image
                    <input type="file" name="coverImage" />
                </div>

                <button className="button su-button">Save Changes</button>
            </form>
        </Modal>
    );
}

export default InfoModal;