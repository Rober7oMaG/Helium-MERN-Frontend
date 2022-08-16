import { Modal, useMantineTheme } from '@mantine/core';
import SharePost from '../posts/SharePost';

interface Props {
    isModalOpened: boolean,
    setIsModalOpened: React.Dispatch<React.SetStateAction<boolean>>
}

const ShareModal: React.FC<Props> = ({isModalOpened, setIsModalOpened}) => {
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
            <SharePost />
        </Modal>
    );
}

export default ShareModal;