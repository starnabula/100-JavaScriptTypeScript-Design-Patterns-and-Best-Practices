
type Lang = 'en' | 'th';
type Fieldkey = `title_${Lang}`;    

type Labels = {
    [k in Lang as `title_${k}`]: string;
}