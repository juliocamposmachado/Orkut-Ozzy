# 🔥 Orkut Ozzy - Rede Social Retrô

Um clone nostálgico do Orkut, recriando a experiência das redes sociais dos anos 2000 com PHP e MySQL.

![Orkut Ozzy](https://img.shields.io/badge/PHP-777BB4?style=for-the-badge&logo=php&logoColor=white)
![MySQL](https://img.shields.io/badge/MySQL-005C84?style=for-the-badge&logo=mysql&logoColor=white)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![Bootstrap](https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white)

## 🌐 Demo Online

**🚀 Acesse:** https://orkut-ozzy-5t5g.vercel.app/

## ✨ Funcionalidades

- 🔐 **Sistema de Login/Cadastro** - Autenticação segura
- 👥 **Sistema de Amizades** - Adicione e gerencie amigos
- 📝 **Postagens** - Compartilhe seus pensamentos
- 🔍 **Busca de Usuários** - Encontre pessoas
- 👤 **Perfis Personalizados** - Customize seu perfil
- 📬 **Notificações** - Receba alertas de atividades
- 🎨 **Interface Retrô** - Visual nostálgico dos anos 2000

## 🛠️ Tecnologias Utilizadas

- **Backend:** PHP 8.3+
- **Banco de Dados:** MySQL/MariaDB
- **Frontend:** HTML5, CSS3, Bootstrap 3
- **JavaScript:** jQuery para interatividade
- **Arquitetura:** MVC (Model-View-Controller)

## 📋 Pré-requisitos

- PHP 8.0+ com extensões:
  - PDO MySQL
  - MySQLi
  - OpenSSL
- MySQL 5.7+ ou MariaDB
- Servidor Web (Apache/Nginx) ou PHP Built-in Server

## 🚀 Instalação Local

### 1️⃣ Clone o Repositório
```bash
git clone https://github.com/juliocamposmachado/Orkut-Ozzy.git
cd Orkut-Ozzy
```

### 2️⃣ Configure o Banco de Dados
```bash
# Importe o schema do banco
mysql -u root -p < rede-social.sql
```

### 3️⃣ Configure as Credenciais
Edite o arquivo `model/SQL.php` e ajuste as credenciais do banco:
```php
$this->conn = new PDO("mysql:host=localhost;dbname=redesocial", "seu_usuario", "sua_senha");
```

### 4️⃣ Inicie o Servidor
```bash
# Opção 1: Servidor PHP embutido
php -S localhost:8000 index.php

# Opção 2: XAMPP/WAMP
# Coloque os arquivos na pasta htdocs e acesse via localhost
```

### 5️⃣ Acesse a Aplicação
Abra seu navegador em: `http://localhost:8000`

## 👤 Usuários de Teste

Para testar a aplicação, use uma das contas pré-cadastradas:

| Email | Senha | Usuário |
|-------|-------|---------|
| `homer@simpson` | `1234` | Homer Simpson |
| `rick@sanches` | `1234` | Rick Sanches |
| `bart@simpson` | `1234` | Bart Simpson |
| `morty@sanches` | `1234` | Morty Sanches |

## 📁 Estrutura do Projeto

```
Orkut-Ozzy/
├── 📁 controler/           # Controladores da aplicação
├── 📁 model/              # Modelos e conexão com BD
│   └── SQL.php           # Classe principal do banco
├── 📁 view/              # Views e interface
│   ├── 📁 css/          # Estilos CSS
│   ├── 📁 img/          # Imagens e assets
│   ├── 📁 js/           # Scripts JavaScript
│   └── 📁 includes/     # Componentes PHP reutilizáveis
├── 📁 documentos-usuarios/ # Uploads de usuários
├── index.php            # Página principal
├── rede-social.sql      # Schema do banco de dados
└── README.md           # Este arquivo
```

## 🗄️ Banco de Dados

O projeto utiliza 3 tabelas principais:

- **`usuario`** - Dados dos usuários
- **`amizade`** - Sistema de conexões entre usuários  
- **`postagem`** - Posts e conteúdos compartilhados

## 🔧 Deploy em Produção

### Vercel (Recomendado)
1. Faça o deploy do repositório no Vercel
2. Configure as variáveis de ambiente do banco
3. Use um banco MySQL na nuvem (PlanetScale, Railway, etc.)

### Outros Provedores
- **Heroku** - Com ClearDB MySQL
- **Railway** - Com PostgreSQL/MySQL
- **DigitalOcean** - App Platform

## 🤝 Contribuindo

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 🎯 Roadmap

- [ ] Sistema de comunidades
- [ ] Chat em tempo real
- [ ] Upload de fotos no perfil
- [ ] Sistema de scraps
- [ ] Temas personalizáveis
- [ ] API REST
- [ ] Versão mobile/PWA

## 📧 Contato

**Julio Campos Machado** - [GitHub](https://github.com/juliocamposmachado)

🔗 **Link do Projeto:** [https://github.com/juliocamposmachado/Orkut-Ozzy](https://github.com/juliocamposmachado/Orkut-Ozzy)

---

⭐ **Se você gostou do projeto, não se esqueça de dar uma estrela!** ⭐
