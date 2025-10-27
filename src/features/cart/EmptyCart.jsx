import LinkButton from '../../ui/LinkButton';

function EmptyCart() {
  return (
    <div className='px-4 py-3'>
      <LinkButton to="/menu">&larr; Back to menu</LinkButton>

      <p className='font-semibold mt-7 flex flex-wrap items-center justify-between gap-2 bg-stone-200 px-6 py-5' >Your cart is empty. Start adding some pizzas :)</p>
    </div>
  );
}

export default EmptyCart;
