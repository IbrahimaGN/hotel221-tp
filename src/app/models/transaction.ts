export interface Transaction {
  id: number;
  nomService: string;
  reference: string;
  montant: number;
  isFavori: boolean;
  isArchive: boolean;
}