import { useState } from 'react';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Slider } from '@/components/ui/slider';
import { Separator } from '@/components/ui/separator';

export default function Index() {
  const [amount, setAmount] = useState(10000);
  const [term, setTerm] = useState(12);

  const rate = 15;
  const totalPayment = amount * (1 + (rate / 100) * (term / 12));
  const monthlyPayment = totalPayment / term;
  const totalInterest = totalPayment - amount;

  const scrollToSection = (section: string) => {
    const element = document.getElementById(section);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50">
      <header className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-purple-100">
        <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
              <Icon name="Wallet" className="text-white" size={24} />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              ZaimDrug
            </span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <button onClick={() => scrollToSection('home')} className="text-gray-700 hover:text-purple-600 transition-colors">
              Главная
            </button>
            <button onClick={() => scrollToSection('calculator')} className="text-gray-700 hover:text-purple-600 transition-colors">
              Калькулятор
            </button>
            <button onClick={() => scrollToSection('application')} className="text-gray-700 hover:text-purple-600 transition-colors">
              Оформить займ
            </button>
            <button onClick={() => scrollToSection('contacts')} className="text-gray-700 hover:text-purple-600 transition-colors">
              Контакты
            </button>
          </div>
          <Button onClick={() => scrollToSection('application')} className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
            Получить деньги
          </Button>
        </nav>
      </header>

      <section id="home" className="pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 bg-clip-text text-transparent">
                Займы для друзей без лишних вопросов
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Быстрое одобрение, прозрачные условия и персональный подход. Помогаем друзьям в нужный момент.
              </p>
              <div className="flex gap-4">
                <Button onClick={() => scrollToSection('calculator')} size="lg" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 hover-scale">
                  <Icon name="Calculator" className="mr-2" size={20} />
                  Рассчитать займ
                </Button>
                <Button onClick={() => scrollToSection('application')} size="lg" variant="outline" className="hover-scale border-purple-300 text-purple-600 hover:bg-purple-50">
                  Оформить заявку
                </Button>
              </div>
            </div>
            <div className="relative animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="absolute inset-0 bg-gradient-to-br from-purple-400 to-pink-400 rounded-3xl blur-3xl opacity-30"></div>
              <img 
                src="https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=800&auto=format&fit=crop" 
                alt="Finance" 
                className="relative rounded-3xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-white/50">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: 'Zap', title: 'Быстрое одобрение', desc: 'Решение за 5 минут', color: 'from-orange-500 to-red-500' },
              { icon: 'Shield', title: 'Безопасно', desc: 'Защита данных', color: 'from-blue-500 to-cyan-500' },
              { icon: 'Percent', title: 'Прозрачные условия', desc: 'Без скрытых комиссий', color: 'from-purple-500 to-pink-500' }
            ].map((feature, idx) => (
              <Card key={idx} className="border-0 shadow-lg hover-scale hover:shadow-xl transition-all animate-fade-in" style={{ animationDelay: `${idx * 0.1}s` }}>
                <CardHeader>
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-4`}>
                    <Icon name={feature.icon as any} className="text-white" size={28} />
                  </div>
                  <CardTitle className="text-2xl">{feature.title}</CardTitle>
                  <CardDescription className="text-base">{feature.desc}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="calculator" className="py-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Калькулятор займа
            </h2>
            <p className="text-gray-600 text-lg">Рассчитайте сумму и ежемесячный платеж</p>
          </div>

          <Card className="shadow-2xl border-0 animate-scale-in">
            <CardContent className="p-8">
              <div className="space-y-8">
                <div>
                  <Label className="text-lg font-semibold mb-4 block">Сумма займа</Label>
                  <div className="flex items-center gap-4 mb-4">
                    <Input 
                      type="number" 
                      value={amount} 
                      onChange={(e) => setAmount(Number(e.target.value))}
                      className="text-2xl font-bold border-purple-200 focus:border-purple-500"
                    />
                    <span className="text-2xl font-bold text-purple-600">₽</span>
                  </div>
                  <Slider 
                    value={[amount]} 
                    onValueChange={([v]) => setAmount(v)}
                    min={1000} 
                    max={100000} 
                    step={1000}
                    className="[&_[role=slider]]:bg-gradient-to-r [&_[role=slider]]:from-purple-600 [&_[role=slider]]:to-pink-600"
                  />
                  <div className="flex justify-between text-sm text-gray-500 mt-2">
                    <span>1 000 ₽</span>
                    <span>100 000 ₽</span>
                  </div>
                </div>

                <Separator />

                <div>
                  <Label className="text-lg font-semibold mb-4 block">Срок займа</Label>
                  <div className="flex items-center gap-4 mb-4">
                    <Input 
                      type="number" 
                      value={term} 
                      onChange={(e) => setTerm(Number(e.target.value))}
                      className="text-2xl font-bold border-purple-200 focus:border-purple-500"
                    />
                    <span className="text-2xl font-bold text-purple-600">мес.</span>
                  </div>
                  <Slider 
                    value={[term]} 
                    onValueChange={([v]) => setTerm(v)}
                    min={1} 
                    max={36} 
                    step={1}
                    className="[&_[role=slider]]:bg-gradient-to-r [&_[role=slider]]:from-purple-600 [&_[role=slider]]:to-pink-600"
                  />
                  <div className="flex justify-between text-sm text-gray-500 mt-2">
                    <span>1 месяц</span>
                    <span>36 месяцев</span>
                  </div>
                </div>

                <Separator />

                <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-6 space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600 text-lg">Ставка:</span>
                    <span className="text-2xl font-bold text-purple-600">{rate}%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600 text-lg">Ежемесячный платеж:</span>
                    <span className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                      {monthlyPayment.toFixed(0)} ₽
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600 text-lg">Переплата:</span>
                    <span className="text-2xl font-bold text-orange-500">+{totalInterest.toFixed(0)} ₽</span>
                  </div>
                  <div className="flex justify-between items-center pt-4 border-t border-purple-200">
                    <span className="text-gray-600 text-lg font-semibold">Итого к возврату:</span>
                    <span className="text-3xl font-bold text-gray-900">{totalPayment.toFixed(0)} ₽</span>
                  </div>
                </div>

                <Button onClick={() => scrollToSection('application')} className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-lg py-6">
                  Оформить займ на этих условиях
                  <Icon name="ArrowRight" className="ml-2" size={20} />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="application" className="py-20 px-6 bg-gradient-to-br from-purple-100 via-pink-50 to-blue-100">
        <div className="container mx-auto max-w-2xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Оформить заявку
            </h2>
            <p className="text-gray-600 text-lg">Заполните форму и получите деньги сегодня</p>
          </div>

          <Card className="shadow-2xl border-0 animate-scale-in">
            <CardContent className="p-8">
              <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); alert('Заявка отправлена!'); }}>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="firstName">Имя *</Label>
                    <Input id="firstName" placeholder="Иван" required className="mt-2" />
                  </div>
                  <div>
                    <Label htmlFor="lastName">Фамилия *</Label>
                    <Input id="lastName" placeholder="Иванов" required className="mt-2" />
                  </div>
                </div>

                <div>
                  <Label htmlFor="phone">Телефон *</Label>
                  <Input id="phone" type="tel" placeholder="+7 (___) ___-__-__" required className="mt-2" />
                </div>

                <div>
                  <Label htmlFor="email">Email *</Label>
                  <Input id="email" type="email" placeholder="ivan@example.com" required className="mt-2" />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="loanAmount">Сумма займа *</Label>
                    <Input id="loanAmount" type="number" value={amount} onChange={(e) => setAmount(Number(e.target.value))} required className="mt-2" />
                  </div>
                  <div>
                    <Label htmlFor="loanTerm">Срок (месяцев) *</Label>
                    <Input id="loanTerm" type="number" value={term} onChange={(e) => setTerm(Number(e.target.value))} required className="mt-2" />
                  </div>
                </div>

                <div className="bg-purple-50 rounded-xl p-4 border border-purple-200">
                  <div className="flex gap-3">
                    <Icon name="Info" className="text-purple-600 flex-shrink-0" size={20} />
                    <p className="text-sm text-gray-600">
                      После отправки заявки с вами свяжется менеджер для подтверждения условий займа
                    </p>
                  </div>
                </div>

                <Button type="submit" className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-lg py-6">
                  <Icon name="Send" className="mr-2" size={20} />
                  Отправить заявку
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="contacts" className="py-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Контакты
            </h2>
            <p className="text-gray-600 text-lg">Свяжитесь с нами удобным способом</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: 'Phone', title: 'Телефон', value: '+7 (999) 123-45-67', color: 'from-blue-500 to-cyan-500' },
              { icon: 'Mail', title: 'Email', value: 'info@zaimdrug.ru', color: 'from-purple-500 to-pink-500' },
              { icon: 'MapPin', title: 'Адрес', value: 'Москва, ул. Примерная, 1', color: 'from-orange-500 to-red-500' }
            ].map((contact, idx) => (
              <Card key={idx} className="text-center border-0 shadow-lg hover-scale transition-all animate-fade-in" style={{ animationDelay: `${idx * 0.1}s` }}>
                <CardContent className="p-6">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${contact.color} flex items-center justify-center mx-auto mb-4`}>
                    <Icon name={contact.icon as any} className="text-white" size={28} />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{contact.title}</h3>
                  <p className="text-gray-600">{contact.value}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 text-white py-12 px-6">
        <div className="container mx-auto max-w-6xl text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
              <Icon name="Wallet" className="text-white" size={24} />
            </div>
            <span className="text-2xl font-bold">ZaimDrug</span>
          </div>
          <p className="text-gray-400 mb-4">Финансовая помощь для друзей</p>
          <p className="text-sm text-gray-500">© 2024 ZaimDrug. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
}
