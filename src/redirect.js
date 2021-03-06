import React from 'react';
import {navigate, ParentContext, getPath} from './router';

const useRedirect = (fromURL, toURL) => {
    const parentRouterId = React.useContext(ParentContext);
    const currentPath = getPath(parentRouterId);

    if(currentPath === fromURL){
        navigate(parentRouterId ? `.${toURL}` : toURL);
    }
};

export default useRedirect;
