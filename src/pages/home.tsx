import orang from '../assets/elonmusk.png';
function Homepage(){
    return(
        <>

        <table>
            <tr>
                <td className='a'><img src={orang} alt="" className="orang"/></td>
                <td className='a'><div className="kanan">
            <div className="hello">Hello!</div>
            <div className="text">I'm Jack Norton</div>
            <div className="text">a Web Designer</div>
            <div className="textx">IMAGE from zzz</div>
            <button>Read More</button>
          </div></td>
            </tr>
        </table>
        </>
    )
}
export default Homepage