import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({title,onAdd,showAdd,onOff}) => {

    const onClick = () =>{
        console.log('click');
    }

    function onOff() {
        var ww = window.open(window.location, '_self'); ww.close();
      }

    return (
        <header className='header'>
            <h1>
                {title}
            </h1>
            <Button color={showAdd ?'red':'green'} text={showAdd ? 'Close' :'Add'} onClick={onAdd}/>
            <Button color={'red'} text={'Cancel'} onClick={onOff}/>
        </header>
    )
}

Header.defaultProps = {
    title:'Test Task Tracker',
}

Header.propTypes={
    title:PropTypes.string.isRequired,
}

/* styling in js
const headingStyle = {
    color:'red',backgroundColor:'black'
}
*/

export default Header
