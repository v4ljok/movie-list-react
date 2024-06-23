import { useTranslation } from 'react-i18next';
import './Header.css'

function Header() {

    const { t, i18n } = useTranslation();

    const changeLanguage = (language) => {
      i18n.changeLanguage(language);
    }

    return (
        <div className='header'>
            <h1>{t("topic")}</h1>
            
            <div className="btns">
                <button onClick={() => changeLanguage('en')}>EN</button>
                <button onClick={() => changeLanguage('est')}>EST</button>
                <button onClick={() => changeLanguage('ru')}>RU</button>    
            </div>

        </div>
    )
}

export default Header