document.addEventListener("DOMContentLoaded", () => {
 
  const descriptions = {
    "vannes.jpg":"Pour l'année prochaine, mon projet est de continuer mon PEI à Vannes en licence de mathématique et informatique. En effet, je souhaite continuer dans cette filière car ce sont les matières qui m'intéresse le plus et elles sont en accord avec mon projet d'orientation dans la cybersécurité. De plus, le fait d'être à Vannes dès l'année prochaine pourrait me permettre de me familiariser avec la ville et le campus dans lequel je compte rester 3 ans supplémentaires.",
    "cyber.jpg":"Ensuite,j'aimerais donc poursuivre mes études dans un des parcours de l'ENSIBS de Vannes. J'hésite encore entre Cyberdéfense et Cybersécurité du Logiciel.",
    "alternance.jpeg":"Je ne sais donc pas encore si je veux faire de l'alternance ou pas car le parcours Cyberdéfense est disponible seulement en alternance contrairement au parcours Cybersécurité du logiciel.",
    "dgse.svg":"Mon projet d'orientation est assez clair, je veux m'orienté dans la Cybersécurité. De plus j'ai toujours eu une admiration pour les services de renseignement. Je me dis donc que quand je finirais mon cursus à l'ENSIBS, j'essayerais de postuler à la DGSE.",
    "etranger.jpg":"En revanche, si je ne trouve pas de bon post à la DGSE ou alors dans une grosse structure en France, je pense que j'esseyrais de travailler à l'étranger."
  };
  const zone = document.getElementById("description-texte");
  document.addEventListener("click", (e) => {

    const nom = e.target.getAttribute("src");
    zone.textContent = descriptions[nom] || "Aucune description disponible.";
    window.scrollTo(0,400);

  });

}); 