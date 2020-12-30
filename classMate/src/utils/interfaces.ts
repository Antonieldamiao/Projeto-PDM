import { DrawerContentComponentProps } from '@react-navigation/drawer';

interface ObjectRoutes{
    welcome:{
        message: boolean;
    } 
}

interface Props extends DrawerContentComponentProps{
}

export {
    ObjectRoutes,
    Props,
}