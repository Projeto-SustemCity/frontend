import Categoria from "./Categoria";

interface Produto{
    id:Number;
    produto:string;
    valor:Number;
    descricao:string;
    foto:string;
    tipo:string;
    categoria?: Categoria | null

}
export default Produto;