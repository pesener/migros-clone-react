import React, { useState } from "react";
import Hemen from "../components/Hemen";
import Sanal from "../components/Sanal";

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);
  const [isActive2, setIsActive2] = useState(false);
  const [type, setType] = useState(false);

  const handleClick = () => {
    setIsActive(true);
    setType(false);
  };

  const handleClick2 = () => {
    setIsActive2(true);
    setType(true);
  };

  return (
    <div>
      {!type ? (
        <div className="flex justify-items-start ">
          <div className="bg-primary overflow-hidden h-16  w-full">
            <button className="cursor-auto">
              <img
                className="w-48 h-12 ml-32 my-3 rounded-tl-lg rounded-tr-lg  cursor-pointer"
                src="https://images.migrosone.com/sanalmarket/custom/sanalmarket-seo-34706362.png"
                alt=""
                onClick={handleClick}
              ></img>
            </button>

            <button className="cursor-auto">
              <img
                className="w-32 h-12 my-4 ml-2 rounded-lg  cursor-pointer"
                src="https://kuponigo.com/tr/wp-content/uploads/2022/10/migros-hemen-logo-480x270.jpg"
                alt=""
                onClick={handleClick2}
              ></img>
            </button>
          </div>
        </div>
      ) : (
        <div className="flex justify-start ">
          <div className="bg-hemen overflow-hidden h-16  w-full">
            <button className="cursor-auto">
              <img
                className="w-48 h-12 ml-32 my-4 rounded-lg    cursor-pointer"
                src="https://images.migrosone.com/sanalmarket/custom/sanalmarket-seo-34706362.png"
                alt=""
                onClick={handleClick}
              ></img>
            </button>

            <button className="cursor-auto">
              <img
                className="w-32 h-12 my-3  ml-2  rounded-tl-lg rounded-tr-lg  cursor-pointer"
                src="https://kuponigo.com/tr/wp-content/uploads/2022/10/migros-hemen-logo-480x270.jpg"
                alt=""
                onClick={handleClick2}
              ></img>
            </button>
          </div>
        </div>
      )}

      {/* <div className="bg-primary overflow-hidden h-16  w-full">
        {isActive ? (
          <img
            className="w-48 h-12 ml-28 my-3 rounded-lg cursor-pointer"
            src="https://images.migrosone.com/sanalmarket/custom/sanalmarket-seo-34706362.png"
            alt=""
            onClick={handleClick}
          ></img>
        ) : (
          <img
            className="w-48 h-13 my-3 ml-28  rounded-tl-lg rounded-tr-lg cursor-pointer"
            src="https://images.migrosone.com/sanalmarket/custom/sanalmarket-seo-34706362.png"
            alt=""
            onClick={handleClick}
          ></img>
        )}
      </div>
      <div className="bg-hemen overflow-hidden h-16  w-full">
        {isActive2 ? (
          <img
            className="w-32 h-11 ml-28 my-3 rounded-lg cursor-pointer"
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAaAAAAB5CAMAAABIrgU4AAAAxlBMVEX/////wgD0gSD/wAD//fX/vgD/3IP/yjn/7s3/xADzdwD0ewD/+u30gBz+9vH0fhf/+eX6zbT8487/zE/0gxn97+f/xhn3rH3///v838//0lP3pmj6xaH1lEn0fRD97N782sP/9dz1jDT2mlf/4I/2kUH/9dj/5qX/8MT/45z/1GX/6Kr/2nr96Nn4uo3/xyv/67n/3Yf/57L/0l/4rXX6yqrzbwD/13P/78D/zkb/zDX0hiv4uYz71L/2nV73pnL4r3D4to5LzGToAAAWwElEQVR4nO1de1/quhItlMqjvHyAPYgIPlDwgYpuRdzue77/l7p9JGnSrElTPGff/buw/lJok2lmMrNmkgbHgWjvy7iPPgqUj/aD8KO/5H/EnS+n63L56upkOG6nH599naj4HP68B/2OXz/DL1+GP8+AVAevJ1Hb66uT1wMs99bg7IefonESfXTvK4gG/1dD+ie578T3R61yudxqdUa+fzHmXxw0OipG4ddHx6oaxhdhW6P4W98/H7aVL3uf4YedqO1yqxNe9tn7NwfgT8dZo5yitY4+GvvyR0fR6B2PpH8iPPijsoyO/8WG8aBR1tEa+S/p5Lu/8Dvyl/7RqyTRMFG8dO9o+HvG4o+EqqBWNMrDXAW1L8QlYixH54kjgwqKtHDKNbQ/6mhf/hKT6Jff0u+VtLttUBRU9sfhRy/y5GAK8hN3lSgo4Ppp+f7a57Ohcx7PIUJBYdsvSY/7fIKMfF9MFv+CqeAzVX2n08reu4XIKChyJleyCScK+vuCIVbQMRvEznrYa/fGp+zfURzBhII6cdAapf6qEcehMfsgnDX74/FxmanXP47Fuef66YxOQ54gZlNsOVsJVUGdr3B+lHUFKdhnt7TWiVMLTpgDHEX/cwV1ToYxXq74hIy1377qsPkxTvpn/5cb+9G/fPZ2rg4Cp9J+XTNZOhe/bUT+MKgKah2Fn3TUTyIF3Y8ZnHSIU6sOWskwjiJHxBXk88DfPuGDHmo/ZBfs6332dY/ZQ+cq7KjNjcNnzJzPqFYZsfFtgKqgst9TSRxTEKPZjYhmv3IH9yUaefBbETpXDlCQc8+D1GmoATYlor8ZOCdphDf0+OQ85/N2yLTr//WbBuRPQ1ZBY6EAWUESiwsu+AT6KRrZZ7esz5CCelwpoUZ/ZidQqDNJ4Qd8wggF3bMM7Mf4Nw3In4aMgsKUQyFxuoJ6/OtRGpzaZwxtpKAz7gH/dpwTrl0psn3xqNRLGYbPU58giWTDh52LS8z4IiFxrXPG5TQFCQ9HhG1dQb+4lxo7AZtMrXPpjmH6fVtI43+Ntzf3kZFRUNl3kgLOxRehID7BRse4Qa6g0edBhP0hZ3EtP3RYMp3g4A5y9Om0jwSD7DT8r60vxDlcQa3Tc06fDjrJYF0QCmIOqZzUX3oNGT+GUh40akSsQqSircY4SoKELlIIlf4SHTEd+Y3GxRBUWrcJXEEvnGr9p5W4G0JBwSmPIomCjuSkyR9SlYTWaD12IEeIeADr+iv9W1bS+es2OzumoKufKndb359iBbV5nSEZY0sFtc5PYm8FFcQDTyeq1u03QCluvY9E3w5wBd2v5YHpnLYJBfWELxxHt1vPoM7oqpfmPIqCHFlBIQnJllIjFX0C0bcDTEHn7VN5XMIgTs2gU64g5uLiIqr0WVqLGyXgGhyd5s2gpGDau2iMtFm0vRriCgqU9McfBoSC0jw1VlD76+IrBJt+soI6Xw8RPn+tueYbbaygMykGxbj/vOIrdmIOjba7khAqaF8OQv49pSCRakZpZ4ggAufesoJEHnTGo1bjIGVxD5IIgsWl3Lt9Pzw5V5Q0+nK2E0JBZ9IMapV7pII+5dInxzFQkKgEicAzNudBvrpwGirp60gI1VprVfXtgIhBbWkZKIwGpIJ4LVVZh2DJkaIg4ZP+Sv1awChG60oS4e+0Hhq0Gbh0x2Jej7Y0ae1xBQnfVY6rBBSLE6XPyGMJgBgEFZQ6SCm1YVGtte45n+dXMUSt1HkQq0nj3zEcfx7EDJK3IoTxg1SQSPY7J2kjkpMyK+hn6u44erzSExUSknWLVkOUD0RtViqebxXSGXSfKigcH1pB4rp0kDkDzFeQWA9KtcuX8KJSEDeSlESkxfOtd3HCd8UBmVaQUAdf8naG8iKBWUHp8hwf77NRulokKj3J6nkEPuW2liSkChJl0DhjNChIrEu3OsMzpz3+StcI8hXUPmcRZ5Qs8PTOeV4VqSTgTKW1ThQoKhVU8fz/HpKCPoU3CQfDoKBQB3wYR41GQyrNWCjIOWA7dVqNl/HB+Jjf3UjSJr4hpdzyL4bj/RPRU3lbt5dKChoLT/VqVlB4ZaYWA0o9lILCtEfeF8caaPCgcyIiYbRti+u+ta0cTlFQj5fAog1sRgU5By1lXXx0VUBBzrisbhuOFufE8mtw4ZezaPnrbS30KAoKRELS1hWU0F+RnLZf0pW4TuMkWMdf2ynI6f2Sy6Ghn/ySF+UefLWe3fFHn1tKECKc/YjXQhM1JH83oqpy+5ytkvqJgo4SpCN19nmabMU6+hqHmWr8bawg1siPVEH8k7RCen983vCjUnfYwPlxhkD3Hk59n5XCwz8uhtsafmIEvQTR3232d6yFXg98owxVuzd+Hb7+JV/dThvstdPrsp9EH569Pnx+fg7HZ2B2BL39h+NfIY6H4942L6fusMMOO+ywww477LDDDjvssMMOO+ywQ3E0u5NprTaddCv/VIOT6TRsr5l3XSW6rjbdrN+g2Y3urk2n3U1uB2gm4kxyK4xBggpGzr36Dab+gunj3eGiX6+XSqV6f7Gaz2qZYW0SYhAyBZOowaS9RXU5m1I9d2/e+HVhv3vZbs3o1i4H1X4/urtUr/ery+vsqBYUOxRHiB03p3U53VsdJlgxVAmYn+TtI3v94pm6Npg8rUqeW5Lgeu5i+ShLfvuxoCQRWIrHnK3qcoOuVzp8BiYV3Cz7Sseuu7i0nUfd20FdlTrqpzpTJtLNKl/sFb+4+ZgRxysNbjSZa/Nstwjuyvgclb7WhEcYceU21A7sw6vOJCuYDPLE8u7YlW910KBXfQ60nl29SW/xaLN6EQ0TlqJ+J9tu8w30ocBlCmpeLpDYS30WdWfVXA25b0bxm6An+NiV6w/8nMk9fXna3epaV69+jFvcKxGXeQNl1t9UiZ69ZZ6fC2eewVq8+kx+1puc0XQv4yZnfSyOWweuJ7gZUE+ptEqipnfWR9fdElKlDzuXBqs5NwtVC695R2bIhe6n1lh5o6/zVmYNTQd5Uq9ks688GQfTfQ+vmawM4sygEHt1U6uJtZKYad25c/2q5jznQaP7+jXpjpuFQah+OKyGYY8v4QFiatBj2KkpwgazHOONGqjfKoO5Mt0R+v5HY2tYQ6GL/qDdp2e2sTvtRlfv5NFoAilkWwj26HtWTsVgh4kUH0novMm7jg6x3bw+Eniqi7mmn7VfAfacEUejCgy1OaWiupEjBEtdYM2TXlo9aCSeMlunVOgIw+JHrsaTcbvN7ZoTDg03+dOHtfCk3NdcUn1Wnb1ccfrkfGjOMFlZGZlOs6/LmyVxOc5IhltT7pzhAO1eGx0JxwQ54Nw+OW4t1VPS5pBzg0fSvcs3FzMnex+AG/ZM+nGagL2qVwR2joKhrhpQEwfpuk1T3p7F/ImwcgCsZ32EOPrLuIN3D6x0TmbaET60y4mwxQFcvEriKqZgDx51kOnANnwBVO30A/1+gVkfI1v8Id1zvjSAYwkE+vUeFbUS6IaW6cDKGcn9ZUlj5W7DJ7WGZhQF5w9uYraxPHq+KjDR5fLM9ZA3ncRdK98XNqR+NuaBMPdPI2v/j4Wl1plRZbGhMHpTKYBP0MZLQXCoty9PgaKWGMJ9yvRR2+gxC3WZmbWTDbxqPTs0U6tAiaDPxnQ8dckMVzuYxEnmCMoMAmTm5WXs+X3jIGTZYUivlA4Dw5R1qVa8a1Vqp7ax2H3aac11gbL2rKILJJWeVOccSaNef7Wcv80PIQHIdgmsRrRT6i+qH/28ImVULK4u5/PlIVH2XCgdPlGVu6iRt/lyAROk7BQyMHzPrS+q1T5ROU4KWRAVQOKyhqECkDjpYbGMbv2u1k0cZ3eGqqKZRwXcPxGtP3+cdJuVZnd6Z6Z6bnU2ia0y6M4wqZT9OOHg3NVj0ojTrCG+nGU3VDXRqy9vI7ErzQmRztHFNVSZJrUZQ7duKdGa4AdVqupNvVRU8tSsAjsct3QppUxdA1l0+7fS+FdgMiLnHivciBK6H3U9u0tHAeE9Sk+yB39EgYouT08BiTOvmOhm4qW1wyUctGxelVdtBVZTytS+I1SJ8dCWFCC7knKJZzTt3UEmMHb1VlylH8w9vWqGQ9eAhrKqTnFtuXQgAEhcmlRDhgCSQr0+5SqLLOhBdSOboMtKqNQGnlKicQHSHxgyvT9PLWtDsfW63wxYMSxtxEOlX0wqM0ZXNxNXmJpeRsUcXydNSnKMchIXREYcqjy9UgWElsRC1QcX1SO1DEId/XfUDvBdaEJ/gKGOAUicudAzAUPCv0MTCNeNNCNSLnsCQQo5aeyakIGB3E0oCDrABeK9Fe0yJWUE3NODdVA91SfdVlMXTp22GoB1C+2jwitOqrqaLcpPAmI2nNbQFS7QlSBwihmJiCexx0JrRlk5A4+PPRcYQ1JB1rJx6D5RzHNAOEolIgPTAqVsi3oUxdQfZu6wrKUTR9EiSDTIcrEWyxTPDPwobgcktNCsHOiUPOJSBsNqXT59TqFZm1QAROsZkPoDBRF0SHcqQmq0/kqFbM30ZQ3YZyyATVAKAtM7h8QBbsusCLjLUpVqRxsxL7X8G11BdTgvwIMSCQVwcc/kV7QT0ZQpl0BAARGLjQyLIgmgMm1am4B8iBeGgWelc15ttkmXgthfhZ4SDAmxVKLPe06zESsli5G6giTG+AwcF3bwwLCoLkFSc9nsGgB2qPApBzg2XXbVw22alwBXiR0XmGrE4iR4TtYf4NgeuTqj26BkzoB7HuJm9MBCTQvklfpm6Dcwh41MkYpAgKhJ5FGP2iDbiwCmGt6AUdEdM0+fgVmRSSNIeAcpt9G5JyE2kJsq9YDKdGFwNwyoiSGcaV5YCrcgKGDqD6YaDnoTQPeSaQJMNLtUJEHPdCQFAe5JZCyAUxJ95u0gswFvGxRR9ypNAjojT21Iy5FIpwPmBXYVaKGGfQOeqEtJ3dQ7TBUEuKdLkA2QMBHBml53KQDWNsgu6zS0a9MZBComdfx2jnXiAQINo02AxhaRWlIQCIh9LDZgwsSV5AJGEbC2Eb0rgnRoQWUTb9RDS4fYEmmySq082WIpJAMBkdhfCBwulQbp5KY4WNvf3UaQ+mswmnhnH8qXsFPRZzfrDhayC0CSDAREgpqBoSLo7netXm4blXKLIE1gAInDHAfY7AKSOKAGRuK+OwJSogrEJvYOABJHbBWdfE+6pG02eN8NZykPsC4YgaIwTjwQiUum2nfnvWQ6gNoQWYY9ifuu1cdtM8v/bjgTtThE4vDucmCz2BcCNfTtXoTIlVoUcYHYLhH5AZ0iSBzIfYuDeX1y/dkS4o0KVIvHCtIbIfa7oNpR8o3NTnsTUsdsL7ajO1yKxKEF0KLgUnwz2paqnPGABeFDTOKsq5w0iQORvRDSuQ24J1HomejNEDVlVJkuDNa2aeefDdIME4wmrpiA3Y1EvgRIHCP133XM6ZtU1twTLTP+iySOD+y36ZCIttZvW4DsExe9wezmrum7adAiMPRBrPoBEkfU7OAulILgUiCitEk7kMTZZp9E0XsC+mO+EG6IK4C0Q2uxEYkj9s7DPRcFwaX4rrIF0QRvW5SsSRxOJ4BP4ZHzm04+zXTsxUYVRGtVlvqHRuhC8NQdJRReEfA0CDguYtkL2Cy2RJrEob2gbhGpLw194KQZVRCJhVfggClnyACKX1wKoKBFrQh4HyDhxRUTlHjgBwVvpXPXBEoMsyJSC1ICuCdR6AGDSIROUAAxvUjkQN7EqSRwceR+BCN0XkVUTECWTaQTYCWNWz5QkHlnegGxifINqCBSfBzEdbN0YE81p5ITva2NFISsBi97WRe90aoEzy/pldaCAH0Qq3WAxBF8HK1imU9F07fGi9Qd0GzKBxtRsc4+gePCD4qWjXmTupfPebeDgv3OBsMWvQxQXDNLAcxEPI5u+VToMwJtfsQe2rrobVpJA+ml+Zwie7HrhH2CPI9YeAV5hPnlx8C0X+0fchbAcX1gx2Vd9EYrafw7UIszjwEB+6QZVBApSwZDmnPKFdijYSp1mCkhhl6/pRwXIHHYZk27uApswjXC+FabKrfe4weWG1TPcg5IAKaYZtIof9ngl3/ADkNcMbGvHgNDFAQL7RUzH/VlLTZh7PYkDu08N++bB2aSThKQCLlm0v4ERh68CkIsZgHnhIveaDtU2iQoJdDb4iLcoPQGGTuhZ3sSh2KnmXcBypNSSbS6T76VFGHmgZQD7ZvHzBKQOOxSzduhQCA2xs5a9qCrGIh7EoQYkDjbVynybAeZohTeQOXeFNOit9X0xBK8baEdF5FAN33iQc3boR5BrmE4yCPa+QwcAxKbaASQOILYg9zXvG++Yt6vhjZKk8aYnFnpDrJMBzguwmr0zogHNW+HQpufaXZznTyj1hESm1CQ3h2VfNovYDCA9XuZSoL9zyXlXWoJNXbYrPa6L3BcuGJiT+Jy3sJFa6rIi0V98kM+tZkP3mojCj1N66IqOuXKnEQDnqZMOXxaB4iVk3TyZmwCHeaI02xE4qwTWnnw4DqJd6fbf/NSHJ2RnfkBiM6EsYMKIkXidLFyUn+Qoihm0oVrdt5cNbegdqccq6JMMXQOEJ6DoHpMvJ0ORJKrZGBwo0uq74qKgu6lfIRx5t3gin3Gokd+isSB6Eisu3CAlX01XOIjYV13cFthP0Qwvb3rZ468VNwFInFYKOALsV8CkVOtkqHYGV20uJwwqbuPT9WM1OpL58BvUUe66WME31938OYZfCUHIHHq5GhSy96eV+9/fPTrnqcfSKocSADCHCZxYL8L4QtRk6rY+HSU+NymeiR1CUitprPWYkPyScy1wqt1iMRlwtsGR8Wp7gI0gEtjFWAtOMvOr5LBl9PzIU1Da7GRwyW4TYHXjRhAeMtSyc32cUlz3Lq4jEgc5rVgc2Y2m6DOIjNDmiPA3xJ+CzhDojoAKtPEgjGHYbUuHbdNnjQtQqPDHLHVoOM0sILAcqrGgIsespoRzF5sZOUDLDd6YdG8Wge4vm4mG2wUkiaQzYncCeyrxzaeYgO7kjM4e7ERibN+jzXnOHMU3kCOk3/OerYRyeGgzbxYGGtfGFgtdRY+UdZbSoOFtvsTg2hl5TGsN88IACmR98TnexueVIrYYJwIEpdL+TkQwQJiF9SQInWRo3eA3MQ7KsA15xxVCp4Ucv1Cc8h7k6ctSIVx9olIHHbQaIUWiV1IQ95ccTZAbMrYgdz2JI4+1IB4AiK8FSBFrlpSsT4bDVhLCQtj7SkKHHfvPql9gbIzUegBJI74IROQ1FCvGzHoiS35Ew+POT+mJRpQDwVFjotY3gQRlFh7Auke9bqh5Q9OuP1MZlkBfsv+jTki8qPfX8j5YUHrhabQwPN+xCp50mX2UFCw/oypP3AqBBmyPdksRHBp8eM0bil7ciqqQVKrdTapSgKQXxMLxlx6sNBkWHl8zv2xH3el1c6nIDfDzVtbCyJxdM1+mvdGm1ta6nejH1cgOrAncdabZzj00yDNv9MV3C4MZ4+7pRXQrrXjQk4FR1Cw1EmVVmLcrAyzyO2/ofQGbZchBsXeGX54bgZUUZVhot9ALepyaW6WJfRjTaHeFjN8LKLeB7aaZl2/kiJx2oWGU/gjTJ/gqfbhZyv0Y61FxA7Jpz7zCWe4p+HOvKNneqfdYV5/jdB8ntdDcfmPH0R/evX5M1VSutaFwu6oqQtDhKBHIHbuZrD3vX4qdfyX1997JzmUtdjhzB9o2GBr2j+L5vvzbO9tufpYLd8uH4v9WPP/DsHN8+zpbTn4GLzNnt+nv2UU/wtzwyUAGDrw8AAAAABJRU5ErkJggg=="
            alt=""
            onClick={handleClick2}
          ></img>
        ) : (
          <img
            className="w-32 h-13 my-3 ml-28  rounded-tl-lg rounded-tr-lg cursor-pointer"
            src="data:image/png;base64,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"
            alt=""
            onClick={handleClick2}
          ></img>
        )}
      </div> */}
    </div>
  );
};

export default Navbar;
