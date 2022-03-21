import styles from './SideBarItem.module.css';

const SideBarItem = (props) => {
    return (
        <main className={styles.sideBarOptionContainer}>
            <div className={styles.sideBarOption}>
                <p className={styles.sideBarIcon}>{props.icon}</p>
                <p className={styles.sideBarTitle}>{props.title}</p>
            </div>
        </main>
    );
};

export default SideBarItem;
