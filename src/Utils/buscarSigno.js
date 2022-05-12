const buscarSigno = (mes, dia) => {
    let signo = [];
    if ((dia >= 21 && mes === 3) || (dia <= 20 && mes === 4)) signo = [0, "aries"];
    if ((dia >= 24 && mes === 9) || (dia <= 23 && mes === 10)) signo = [6, "leo"];
    if ((dia >= 21 && mes === 4) || (dia <= 21 && mes === 5)) signo = [1, "taurus"];
    if ((dia >= 24 && mes === 10) || (dia <= 22 && mes === 11)) signo = [7, "virgo"];
    if ((dia >= 22 && mes === 5) || (dia <= 21 && mes === 6)) signo = [2, "gemini"];
    if ((dia >= 23 && mes === 11) || (dia <= 21 && mes === 12)) signo = [8, "libra"];
    if ((dia >= 21 && mes === 6) || (dia <= 23 && mes === 7)) signo = [3, "cancer"];
    if ((dia >= 22 && mes === 12) || (dia <= 20 && mes === 1)) signo = [9, "scorpio"];
    if ((dia >= 24 && mes === 7) || (dia <= 23 && mes === 8)) signo = [4, "sagittarius"];
    if ((dia >= 21 && mes === 1) || (dia <= 19 && mes === 2)) signo = [10, "capricorn"];
    if ((dia >= 24 && mes === 8) || (dia <= 23 && mes === 9)) signo = [5, "aquarius"];
    if ((dia >= 20 && mes === 2) || (dia <= 20 && mes === 3)) signo = [11, "pisces"];
    return signo;
  };
export default buscarSigno;