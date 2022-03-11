import { useContext } from "react";
import PropsContext from "../context/PropsContext";

export default function FormTitle() {
  // Retrieve title props set by block editor
  const { title } = useContext(PropsContext);

  return (
    <div className="form__header">
      <h3>{title}</h3>
      <img
        className="form__image"
        alt="img"
        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAh1BMVEX///9GREJDQT8+PDo7OTc4NjM3NDI6ODY7OTY2NDH5+flBPjw0MS/8/Pw+OzmPjo3y8vLs7OydnJtJR0W0s7Pk5OTCwcFQTkxmZGOWlZSJiIdZWFbQ0M9UU1FhX15ta2p1c3Le3t6lpKQtKid/fn2trKvGxcXS0tGcm5p4d3a7urmxsLAkIR1PYmhOAAAbG0lEQVR4nNVdaaPqqg7d0lFbtVXrPNVx677///e9ArUNU0D34Hn58M675ygSWCQrIcDHx59Iv98rivV6fZ9Op/fLel0WWb//Nz/9y9LLy/theJuPg2OahmEQUQnDME2P6Xi1X44m1zx7dydflay8L/YrLw18LyGkowohycCPusFstzyX+bu7+6Tkl8/dLAgGiU4zRdPEi4Lxdjgt3t1tV1l/ruJgoE4bgaLq6QXReDntvbv3NsnvpzQcCP2vpsgPUp+MZ5vVlstqsxl3BmnoD0T8kkF43J3/4anMJ/s4SKBulWrj7W14uF/LIs/a+en18qK8Xs6L23zW7foeUJNE6fzwTyrZm94IUK+ajnR2OkyLDMddP8svh+Wqms9WSxJHu69/zfQUi06rHvHC4+rzkj3h8HrrwzxNWy1JlJzWv9fdp+UyPzZASyJvtVi/ZDCuhzkJG/ObpOPzv2F3sq9N2vQq7Owm31lE+fQ0C712IhfvX5H5YRyQR4eC/f37yye7LJMG8bG3LH+gl9/ozYJEtX5eujn8lHXo3Xdp/Gg3Pr1Px95o4NfT5wc/PNb5KHlgwwtPbzKsX0lU6xdsDr9An+/zB1i94+IN9Pyyqsc4SefTXwqErrdubXX8zvmPg63iVutH0t3F4fN9ymHW90kt6/W1zF1cQblMvRon2z/1j4eo/t10c7V8NF9PFvuKhiZ+2A1iLlG3G3tkvKnCpovNHRSnI8cqCZd/5h6vm6B2Dxt0/vLp5zZNu/HAFB8SLw7S42Z5LzEIlvsaL4Po/sOa6KW3qB28P/syf6iYLGfHwHOKDwdRSm6H0mxM1tuQN5Te/sCqlquoNjBG+5ath9sgctKukcSviPrU2P8JGbCPeWT6S3o1coj5qkjnBv/Xv5zGUoToKBVh7+zuhmHLlhw5v70asx1fgZ430X/gWjGu5yZPmsog2hvW9nXGwTOY/SLHuQ4SPo577UhTDj54XbuHkl3vU29gF5zJkaNheL8vZ77evY72F8qhF3xj9qD44U3r/K4rzhK7v4PU3ilkzYc73Qhf97GHdfpJScKtjij1hikfgu0v2NRsy8aPHEeaf1zPYX7mR6Qiuzrvd0nZDyWJjWk8LSW3od5YA59ylf4QPCUdiUbH/DHSP7wYLzyFEu9UdJSn42/ox9To6sjokNvzUAeml+WLW7F0qPxLtvC+bz4RHcOb6hvuHDLh8ucUPDAbQ1IVGPdx/Iv6UfH8T8XkXAlbMsH+pxRcMANGBgpi8l34WwAFEs3UH94wwx3vfiZoXLAZTFQqcUh/2oDqhaSK/+vtGHb83U/E/lxBbyXbmGIX/ol+VGJ1Gk/M3gy231eRKzjYyqN4J38zgVxIsJABuWRrx/s2ULmC8U5W8PQXKxBKpNCYUcq79j0FD6wVfy/9ddH5TRehl+QoBx2jLuvct1T84jMoKziN/3gCuaSfsop8Fr/hF6csIhvIgzT6qRjiWQlu0mIZsRkIZM2dpWRUzZONzOnvbKgsvmzRhwyo4fk1BTOGxWQlKljHGO8R4vmSV14ymB1fyqX2ttQdkJk4asXmJ8PA59SLo9l2t5PCpj2zedEru3AnOldkII5ZMf5LLyjoF261CcfeivYoWT3v+Q+MM6Ti9F/fpmA4NwEx79DF5N+eVfDKlrAUTZR/7eYfQo6ILbmyuQgPzymYsYxnLMaD17cpmKAJxDsz7k9amx1Foyc6wmL8LgXHlgzpghpUQp5ZimwRkrFgRvO3rUHPmnViEzLYuytYsuBLnPbe5l0KBnZ/zhdVaN4pkoQbYCnTs/17rs0lmTt0ec1DKVevyGAtLcLT25hM6rRN8Rm5DkYlVzoepCOMx+htXDTZO3W6P6e467oR1A3DtOAJL+8j211HJ1AwNpm6ZPuZHfX2wrf9N/kJiiXXLAXrd+IQDheMrHuCb3mXI6QdcQ9vWaQQ2rf6b3S2Rbb2PitTBQ3uoV/B7MfM5vcvbK4Fm3QP3qdgJ3yCizF7Gtm2M1YUkIKBLrSlIg/RFaXr/xIX01fSJwK/3oxFGfg3vuh8+Qv4Vztedv8osk8Szxv4URAEse953mql7FwkfvWX1af8OArDqPpQkiRtiT5sx/OjMAgif8Db0enoZBwfwky+d0JHgVboilCedDabzXg8nlV/bLbb7X6/HH6eJ5f1tSz456YinfN4zUsvK67Xy+V8GA5vtx2rz1faWTzaYfZyrTNoT2n4saddOWIUYcSQLNC7HpU8z9mf+m9NuxBuW0PbdTuZuZ1rqtHwqcKLkgUZCLPJKPckm2faZDIDgx98o6Rnrk5i6FIX2MqSegLEOi2oW0ifa5PKCeD0uUEXZaSye/+50D07djC3n5PXpvBjR35Gw6Wax8PthiojOkmBaZIOFMXp80UOOWStg9e313uaAM2dtXFhC800iRm1ZS7ETv7eXDCmL9eB9Pe6VOyzIz6izivUf4n5wudWYa+4Xg4zsWMkWU7XSCmloZ31eaXNNXsL+9fh6ZycOt1Ej21qETFLCyQ/fw5v2w112YEad3gVG/C82fw2HFmKXjLazpy2E2va4dJ10BCaI24udcTmQr2aq60/xoaDoWAuSeLFqPetJI6s7ThECx8J8LAFSxOqdTHcGZGN47oeOu5e+JaNL41/UEbKRCGAbKF5O7HoSFWkoJ4kdvU+aw390HbPMmSlQzuBPby4JWDdX6lpD9T1saCaB64Gou8aPRisWiMbezsO5v2Uwqmh8ZE68z26v/FEQO0K04GlyZFDTVXXahwO0QysRJblD+ShnTJXAf7Wckx+3bX1iwsZ4+0UDjkusrJZh5EPUdmn1nQg25pbIhG2JY7+3swRppYJ6GvYtiLWrPchFlBJASanMxgljQCYMxtiNRxSK7Z858ElCeRb7MM9EHY6mf3qitxlQkEagGhzEg7wWuq1a/bGEsOWLhra+HelYQK2SPtbonyHBsfCaK+Ixfk7w9SWLdu6tJPia+YeiSN5oPYLepCPnNFVQB6qebYZaVeY2sIxJ5hajA2NmWIwkizpK8CUJwzBINC1esTh5Q5TnLmVTu1EKBehGpIZ+Iu57PuoJRXmjHI7G7xcnb4tOnCD+wBLEn6y5AUYSQaMAfgEtT0R8ChsfsgK79nCFaYz3J05wVTaSZGEUdEBGElmv4B7X7M8IxikJSPEMQ4vXWpMKxFuJgq3djBjw7KIAgemwAA5ns+BOGO1nRxY4OW6YWOz9SundjCLxe0xnBHm9FuV6E/A1XIN6zZxl+gMUwtzc4Mpxo74jMBQje2/NEQhp7YVJhkfXbfsTjrDNMCDWEeYCsZSkIyjicxbmPZoMNjEXUzfYztf/YcTtjC3vkPow8TG3HZuZR6amK8eonpGICkTcLkQMftRNB7KUoTjClPhpzVydjuWYnT710AdApo9aLJO1D0OAIYnjYYWeF0dQyibay0cK1lMmd5HhyHm6D7Uo+Ypo+sU7g+0fMzC3HpuVtDuWl1CKKQ7i3qE4ErN6OKuSQCjTWmLxz4gGRbm5gxTC3M7R99qZv9Yx0fg0+no19ihpBTyjhyYthiH19WxZzbXWrjmRLSpu6yxeHBVUSTWsKVzDJPEU0CFbYGBawhFCN6OUwhlaqZo/ClMk1LzVZsaOsdwE2sEHXCIw8vdmuKu1RmmutRdOyVwQqi35lyDmQsY7grLXps8bsUl38nEsJPwkPzo1ow2TgHDfARNUhfEsvvt/6tF6DSZ4czNlZuSDu5aHa2ylteAKQGmiM0ccxFsGgBzzMVpMe42cnFIy9ft4K7VFaaxGiZmYKVALLLVRy0lM6XgXIyUCbUEBu4w3aPt5I7taLJHF9BhH2xgMGNKFxll9jBRdZdHE4eXKzftRLhrdXT6GrvwCeYQKsIU23/wSAp+byHhzrK7NXIterPUHEzc0j6aDU7osSB5moa1cb1JzmIvEX0LcytdS08tzC13W9BqzFpAM0zGLXMpKXpJn8MDmgHFquEp3b6js7YyN3lkTSrKpuZLWFWk7SzbKq2Cwj6199CRKvbfwtw+XWFqYW6OMA3kcRJHGJxty8cd5gb7gfj3mTpqHbRnpfOdAyHaTuGGBbngqRANI9hU61Ej2L3ycB9MfaGCxQIv1xBK3iuRxS3Sl/2q5EhD4E1ql8+SJOB0jGanxMLcnGGa4OfLJk5gkINpycvAskOK32jKNIR7bVfVNkIDpRG3tDxrCLVZuROtkZyOHHfB+IrarmjCssHQBOs2dy2BgWsIJaTVNeLk9CUND9KwQGrOaNsX1xD6Sc2MWODlmO+0utaJyySKGvZlIwBJJuUyFTFdB2Lhgn41oPByzHdaaU3m0o4vrEMlFyZrWM0ppaFWDY2ZSi6u1lQ+iC2LizUVbamyianRcOqioQVejjC1Zdx47aBFujDK7yk//KqGlkMBjjC1VlxlDtxU2BCbKob/ZQ0tK8gt9Dlaz07cHGAKTYIK61fXIbIrwsRtLx5vg8rdGqgISO+p2R2Nhiz7bdXQwtxKFzvvUBaYWxsRUgWa80qKhkPFHxqckmUbyiWEsoPUIYQScsIa26v4w4MTp2FfRZmbA0xd6kTtp8hgYizXJGshp7lxTkNTSYKGhqWA59wcKpucTk7kNizEsG5LAzcPzDHVMP5yiS2YWJib3ekroatWLDAlY/BZHUGAoQe18NG9pkrtEimNeXqUuVk3OZ1AaoUpNAfa7RxIebY8md+nGnog9jdNBs7crGn5BqQ9NCmicQBCJ0CAqx1UUHrAYvxwreRpeqY8vYW52WDacNLrGN0nwLkpzIppaUYM8zSEe7kmvV+LMcWL3+NjScu3IF0c0dJvFKZwb0lPFROQj2HHYbM6EgbI2Zk09NETTZa0fGtJOz6aFMkwDaEv0DooAgDCcg9Rn1d4wUSfsarSsluKc9PGkl7TToK61hMCU1j5pc0sQGbI2Br9b5qWh7t7ZquIH7JCrWk7OtUAhmhtrhovAAEzpAfpXuwQMx7Ub8JqoosRJvjJggJbiC1I5WJkRbKOEQxwIvT7JRDGlLSxLtNEAEy2IcEentLFrGDDSXn9FbqdZYYpdHZ6kw8/wSgNHdmc/mYXWGGzR8IP5SIwbak9qwSN0atydLkwLqBA9Kr/EMgA9LaPDRlWMNR1cRcWeCElIw1I2Y9Z+E1m8sgEeGRDiQSozsvauxN20vba0pxLSFDmZramTRKknh88JWWK9EGAaTgpALdYmCnihXmgtIaJsgncSoTCy+j0223NEx96/NCeCaZgXAxl9DA6ZBZ02390DMbAyNY8fsQ0Ny2gFqS1nSQrjLmpGTT+JeCPDQfL4on4kdr48ro2UF6KuG48BDLBtPlW4+vwQ3v6EAp4gsywkQBzLfO20pvtJMJtOSTjhcPLkAFpDUvTMp4U0V/aBAjHxQAzAoqEA6DVVqxrx1IS+JlQQ1q+BWnTc7yAqKfV0G8/YGCWkBHwEu3aMrK6drDCsBoZnLnpnX5jIUDcgB/a0zl9MO09g+eFAcTZB9aFn65s/9GEcvY7aGCghWlrxcAA4K71okmHAbphunoMLkMaIjU0s5BvizghFYchBlOtNW3cWAbZUorCVMNNQbLPkMwRLDSr1W843FhaiBi9xwuIdL/dcFJhhvHSb5V1gDVmynRAfLFl2Mbsy4G4ELHUM57M0JSMtCGb4EzwjSgVh4BTm9IA0B+wUv02WGRzBjfZsTAhxphbrn6xAanEW1HXqpqCQfuzJpDCoznsuEU7p2zaYVyKJUvwwEAdmwakEqnDC4hkUwAgphlFJpCysZoZGArtpPtAMiSaxQMDBabtxyXGg5+qkoknMBOm4ilYT8E+0wVGkVFTeLwbSz2jh/aUAW66Vsg8Ar1sTk5qRu2PGpaQULpFPyNk6VlcDydV55CaPqPMTf79ZrkdZDeNMzcRpoBLmcJQaElZWlvc8VfOzSIeEQ8MpCVsBKnt0J5oTUHfTDEavChGOXz/ON4Neo6VcqFHxyVn1YJUpYJ46bfwebDzZcjnCoGdcvi+pjXwF7H7KnB4iTBtOKkmN4YzN4Fde83gmxJlXdB5lp2W91l28i1YWNEAet2CANMWpDqui9bmwggJjIUh8IHJ7vozUuOs0hb+ommnlAoKrwx+sQGpNl5BmVsfWFPwxKphB0jYcqCjqex3Misfw48hW/M4c4Oz31hSbW5M2O9UBGQq2iN0psgOMjJ2AZK6Z81CMnhG35y2tBzaAyUjbWpFfz0BWuHRHjMGJMNwgkUwDdTOaC4BYIrDB3exU74+Bi+wx9qA1JDARa9b6DUdAITGELrCGxfYIV/dRtlYvq4NIad4YNDCtOGkhtwYXpvbfKmdatNIwSlkB0Z0KGOeVLhdCbn4AmVuDUybgTBe9YLW5j64KWCwplQ30IdfjrjXtNdjr5lAC3Q3Uzc0MGjCywZdxntQ0FNVj3Fp+Zhh5QhTeDbfb7mgvKYLJ8dsTvHA4MHbm2S+edd1jNmsGqYtRTe4sAjQP7Z6DfEPo7TCcCA+EQ0M6n2BZlUjqS3UtfKpB/xVv5yFC64ntM+mPVg20kIl6c1IwFHmVqflG5Ai1/LjzI2/G9usHP1yFsI+dhDdGBuw0y/CykCKudDrFjhMG3ePXbjUxWDKvtgSTH1MJ+TGeFRhLP1hMZlwXeWnMdhHc25s0prF0MNKZNCaTOb02wIS7UiJBIvd9Wy+VIqdtBNw0zeuIJS5sbR8A1K09gCv8Eig79WPVACX1UGOkWRhkyj4KPMll2hgQDlgEzjhtc0oc6tMS0totCMlmJmM3fqO1SKz6jTR1C5Nu/Poob2qM83Y9/FSNdS1VjBtR0A3UqI6QwrSFA2s2RW1wvskRjqCDlUFqGaBWcoN0esWKhcfNW3qRkq4EYEZRksRJNukFd+GMvIR5f5MKCev4aS2cyJobe6ifUdaN1KBYKfYL9kujz7TZsTSoIXBnqKBwTR9TLG17Be9buH6X6O/JsMpPmjEWKb1inN+rFcYh/7WkKDErlvIvMfoWs9rEaw2t9f8iCbVTRJoR5mZ6STWennG1MQ1ZqqORQuIdo8FYj/MhNbmNmZDk+o+CuSMOQLrEyUf9cZWJCDQsG2OAqKsva7D1TNu98CrIxUIu7VTVj/jcpl1j6HKF9brp97auLxW9+Vw2MTycAoT9XyyuAg5u3e7o/7OBkMkrzctQbXc5sHEWJALBL/YkouS6iYbYXyX7C5Ix5cUWEQhVvLyx+ZkcYBX7nIdmPXY3ocKUuIJXIhvgeIl5KBXzCiJbwjkiW4u7K/AuN3KYn8Uo5BHSuqer3YZE04Axe6XkUZF+zkYt+OllvPwH2qqW3ohlUEMLyAXhdnTRKQ/F81SxFO6H9K1HIjgtbkfykhJjzMO2Qs66J6YJPXbUOKY6BJTNni5HvO2XLcg78d0RTrFk3tPPivExl6ylV+qW7TBy/nuSMtzvuLOVSimUEr2Rmf65OPcE/4esOheJoqKFuuluaDBpCJus4Q971AcVu4J4yef3Kn9C5HuefhSehyh8HK+MsNyqkpIdUsz+DGnzk1+IN1B+MPjiZQXvctvpeD3sDlfe2JxrTDVHUplBCf+GPALjzBxDyg9uPpxUd51RuBl2GXQiuaaskZgqjuVqPWI/YbNUhn6x6xNJE1SKc0iBi/XRzCoYKeq2pEikh/8+GL2ovvko9wPYenjTiDBPt8I/Ubg1XO+6ayDpgDbLCLxpLliHPoFK/MQ/kaujItsL4Cva4SX8xW1TMxhQZMq8jbSauO7uP7+VQWrwQt0Kn4ModcwM7dnQIq51sf2SbCTojUetybb557PEmXPcomhrOL9vxZ/5pyb+YiWViJTO7zYlBzlvBA/g5ZYbgu3yc7XzmKxaT2dCV6uLyY9xLRh1GdQ8Ij8zyyot16HbpX+jg1gKEOotwweM2TahsJqqXVi2obij4ntZK/Ek4vEnnmySbZlHe0qakzJoyzCcCb0ySk03h15SzpEdQecJJPON55bfEi2Y2sx2su0KN+nfBr1KV2svFEvsda19o+dYKXoMeryGfwBBSlQ2ZobrJQhniaeGV7YeV696E9VTVNNhvBUG5lvQ7QWPotJRzEp1WpkL0to4JU9Z0iZaA/tbXeKGtk84gp+08gA4X6RaHJr13lFVANN6TdWUmWSWMPcMvU3S/6mpP8tPyjLJ3e6obpV0b+PIx1zc7kQSRa3PMSdBbydeP+TCn58nHnCJZZpRSX9Q6permPdj9GKS0J3yKOb7stc1CTriBdGDDRlJr1PBV6vPchuf7wvX7ElqHEf35dixUwqST817k9B1ysg7YiF2DqZ+nycFYLzI5Ld+GKM5nYbnTunL0TBr1vIlhyhseoff0gOR/YDiWeFiOOVueocYsmM6YyPW3p6OifjLGvCuWawtUyj4+3cipD/jA1nJ06hyLNpw+fkgdQk/cTG0fUhAEk9L5gtTfi714Pr/xpCH/LlcRsSzZDkz/0YDJ6cxSTqroZr07CVu249gcPfQ+hDinn93lW4N45mP78vN8fAc9OSeHFKbufS2PdsyE1oZzB+Kaf2tJzTpB72JUYr8vtwdUxD3/xoM332OegeO8tJiW1OH+o4jfymiZH6vquzpt5xZKFO5WV0Wo2JH4TRwKskSRL6hxcHXT8Zz/aL+xXfee9PBvW+XrR59dX2V+Q+q3c+/cHIuktagba8Tr8+F6dKdrfqf4af5/u6LOwz0pvMHm85JSPHF7V/SLKRXycpYrL4qShN+ZHzpgZLBdDf+hGzFKdjvb785PQb+CkW4+ih3/YvAdpKOQ9r9umFq/sPY2i9fzgcEswcaj5+Sda7oNaRhP4QNYhPSX6YpY+Gg9X79KNy2T3mseOl28NPLJZ8sk8f2z8kXE3+1sBo5HpKm42TOJofvkeqismu88BFxQ2307/ygKgUw26THia+PxteXuzWdbRKGvWIf9y/x77opD/ZtkS0ItDH1ejyXBaldz3vjmlLZpNg5uBo/1Suw1m3TeOTQZiuludr7uDUs3IynAcp2HlNgs7t8vblp0q2PiVASUao49V+eZiWhUbTXlaUl/PwtiVpBCl6EgT7yT82fa1klyVJhW3wilv7YTcZb1bb/X74kNttvt2MSUVWPaFejnhh93b/Z9Wr5XpY+VXcJMUTpIojOOfm/Lv6b/kTgyCqjNQ/CE6NZOvFfFzNj+vb5CTxw85qef976vkdycvzcj6uwkNPW7f5UG0QBynZng7rfx2aBsmKypbsV+SYdsMo8v0apL4fR0GYptFstzzcy+z/A5mY9HvF9TKdfJ0XTIbnr6/pZV38jWb/A6LSvIGeqi8iAAAAAElFTkSuQmCC"
      />
    </div>
  );
}
